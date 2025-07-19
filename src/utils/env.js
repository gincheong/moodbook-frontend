/**
 * @typedef {Object} Env
 * @property {string} VITE_API_ENDPOINT
 */

/** @type {Env} */
export const Envs = {
  VITE_API_ENDPOINT: import.meta.env.VITE_API_BASE_URL,
};
