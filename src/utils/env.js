/**
 * @typedef {Object} EnvType
 * @property {string} VITE_API_ENDPOINT
 */

/** @type {EnvType} */
export const Env = {
  VITE_API_ENDPOINT: import.meta.env.VITE_API_BASE_URL,
};
