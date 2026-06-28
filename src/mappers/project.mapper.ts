import { GitHubRepoDTO } from "../api/dto/github.dto";
import { ProjectModel } from "../types/project.model";

/**
 * Maps a raw GitHub repo DTO + its languages into the UI-facing ProjectModel.
 *
 * All normalization lives here: nullable fields get sensible defaults, dates
 * become real `Date` objects, and language data is reduced to a string list.
 * Components stay free of GitHub-specific concerns.
 */
export function toProjectModel(
  dto: GitHubRepoDTO,
  languages: readonly string[]
): ProjectModel {
  return {
    id: dto.id,
    name: dto.name,
    description: dto.description?.trim() || "No description available.",
    url: dto.html_url,
    languages: languages.length > 0 ? languages : dto.language ? [dto.language] : [],
    stars: dto.stargazers_count ?? 0,
    createdAt: new Date(dto.created_at),
  };
}

/** Sorts projects newest-first by creation date. */
export function sortProjectsByNewest(
  projects: readonly ProjectModel[]
): ProjectModel[] {
  return [...projects].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );
}
