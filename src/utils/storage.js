/**
 * @typedef {Object} StorageKey
 * @property {string} ACCESS_TOKEN
 */
/** @type {StorageKey} */
export const StorageKeys = {
  ACCESS_TOKEN: 'ACCESS_TOKEN',
};

/**
 * @param {string} key localStorage Key
 */
export const getLocalStorageItem = (key) => {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return value;
};

/**
 * @param {string} key localStorage Key
 * @param {any} value localStorage value
 */
export const setLocalStorageItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
