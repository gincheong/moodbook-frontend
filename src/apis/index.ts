import { getLocalStorageItem, StorageKeys } from '@/utils/storage';

export const defaultFetch = async (
  input: string | URL | globalThis.Request,
  init: RequestInit,
) => {
  const accessToken = getLocalStorageItem(StorageKeys.ACCESS_TOKEN);

  const response = await fetch(input, {
    ...init,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-type': 'application/json',
    },
  });

  if (response.status === 401) {
    location.href = '/sign-in';
  }

  return response;
};
