export const Envs: Record<string, string> = {
  VITE_API_ENDPOINT: import.meta.env.VITE_API_BASE_URL,
} as const;
