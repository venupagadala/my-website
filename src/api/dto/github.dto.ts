/**
 * Raw Data Transfer Objects (DTOs) for the GitHub REST API.
 *
 * These describe the *exact* shape the API returns. They are intentionally
 * narrow (only the fields we consume) and must never be used directly by UI
 * components — map them to a domain model first via the project mapper.
 *
 * @see https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
 */
export interface GitHubRepoDTO {
  readonly id: number;
  readonly name: string;
  readonly description: string | null;
  readonly html_url: string;
  readonly language: string | null;
  readonly created_at: string;
  readonly fork: boolean;
  readonly stargazers_count: number;
  readonly topics?: string[];
}

/**
 * Response of `GET /repos/{owner}/{repo}/languages`.
 * Keys are language names, values are bytes of code.
 */
export type GitHubLanguagesDTO = Record<string, number>;

/** Error envelope GitHub returns on rate limiting / failures. */
export interface GitHubErrorDTO {
  readonly message: string;
  readonly documentation_url?: string;
}
