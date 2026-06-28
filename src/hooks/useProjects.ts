import { useEffect, useState } from "react";
import { fetchProjects } from "../services/github.service";
import { ProjectModel } from "../types/project.model";

interface UseProjectsState {
  projects: ProjectModel[];
  loading: boolean;
  error: string | null;
}

/**
 * Loads portfolio projects from the GitHub service on mount.
 * All fetching/validation/mapping lives in the service; this hook only owns
 * the React lifecycle and exposes a clean, typed state to components.
 */
export function useProjects(): UseProjectsState {
  const [projects, setProjects] = useState<ProjectModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    fetchProjects()
      .then((data) => active && setProjects(data))
      .catch(() =>
        active &&
        setError("Failed to load projects due to API restrictions. Please try again later.")
      )
      .finally(() => active && setLoading(false));
    return () => {
      active = false;
    };
  }, []);

  return { projects, loading, error };
}
