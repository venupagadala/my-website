import { GitHubRepoDTO, GitHubLanguagesDTO } from "../dto/github.dto";

/**
 * Runtime type guards for the GitHub API boundary.
 *
 * `fetch(...).json()` is typed as `any`, so static types alone can't protect
 * us from malformed payloads or rate-limit error envelopes. These guards
 * validate the wire data before it crosses into typed application code.
 */

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

/** Narrows an unknown value to a single GitHubRepoDTO. */
export function isGitHubRepoDTO(value: unknown): value is GitHubRepoDTO {
  if (!isRecord(value)) return false;
  return (
    typeof value.id === "number" &&
    typeof value.name === "string" &&
    typeof value.html_url === "string" &&
    typeof value.created_at === "string"
  );
}

/** Narrows an unknown value to an array of repo DTOs. */
export function isGitHubRepoArray(value: unknown): value is GitHubRepoDTO[] {
  return Array.isArray(value) && value.every(isGitHubRepoDTO);
}

/** Languages endpoint returns an object of name -> byte count. */
export function isGitHubLanguagesDTO(
  value: unknown
): value is GitHubLanguagesDTO {
  return (
    isRecord(value) &&
    Object.values(value).every((v) => typeof v === "number")
  );
}
