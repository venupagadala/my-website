/**
 * Domain model for a portfolio project.
 *
 * This is the UI-facing shape produced by the project mapper. It is fully
 * normalized: no nullable description, an always-present language array, and
 * camelCase fields. Components should depend on this, never on the raw DTO.
 */
export interface ProjectModel {
  readonly id: number;
  readonly name: string;
  readonly description: string;
  readonly url: string;
  readonly languages: readonly string[];
  readonly stars: number;
  readonly createdAt: Date;
}
