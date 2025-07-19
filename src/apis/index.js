import { getLocalStorageItem, StorageKeys } from '../utils/storage';

/**
 * @param {string | URL | globalThis.Request} input
 * @param {RequestInit} [init]
 */
export const defaultFetch = (input, init) => {
  const accessToken = getLocalStorageItem(StorageKeys.ACCESS_TOKEN);

  return fetch(input, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    },
  });
};
