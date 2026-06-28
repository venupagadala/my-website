import { GitHubRepoDTO } from "../api/dto/github.dto";
import {
  isGitHubRepoArray,
  isGitHubLanguagesDTO,
} from "../api/guards/github.guards";
import { toProjectModel, sortProjectsByNewest } from "../mappers/project.mapper";
import { ProjectModel } from "../types/project.model";

const GITHUB_USER = "venupagadala";
const API_BASE = "https://api.github.com";

/** Thrown when GitHub returns an unexpected (non-array) or error payload. */
export class GitHubApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "GitHubApiError";
  }
}

async function fetchLanguages(repo: GitHubRepoDTO): Promise<string[]> {
  const res = await fetch(`${API_BASE}/repos/${GITHUB_USER}/${repo.name}/languages`);
  const data: unknown = await res.json();
  return isGitHubLanguagesDTO(data) ? Object.keys(data) : [];
}

/**
 * Fetches all public repos, validates the payload, resolves each repo's
 * languages, maps everything to domain ProjectModels, and sorts newest-first.
 *
 * @throws {GitHubApiError} when the repo list is malformed (e.g. rate-limited).
 */
export async function fetchProjects(): Promise<ProjectModel[]> {
  const res = await fetch(`${API_BASE}/users/${GITHUB_USER}/repos`);
  const data: unknown = await res.json();

  if (!isGitHubRepoArray(data)) {
    throw new GitHubApiError("GitHub returned an unexpected response.");
  }

  const projects = await Promise.all(
    data.map(async (repo) => toProjectModel(repo, await fetchLanguages(repo)))
  );

  return sortProjectsByNewest(projects);
}
