import { getLocalStorageItem, StorageKeys } from '@/utils/storage';

const tempAccessToken =
  'eyJhbGciOiJIUzUxMiJ9.eyJtZW1iZXItaWQiOjEsInRva2VuLXR5cGUiOiJhY2Nlc3MiLCJlbWFpbCI6Iuuwle2YuOyihSIsImlhdCI6MTc1MzE3MTgxMiwiZXhwIjoxNzUzMTczNjEyfQ.opsojsTlJRbKUtWXNgY4qw_mqTDirSwvryEn92JIjoF2MzD-vq5eTwAjY_9d3VHvSHsEVxvZRh3tMICKmU2Bjg';

export const defaultFetch = (
  input: string | URL | globalThis.Request,
  init: RequestInit,
) => {
  const accessToken = getLocalStorageItem(StorageKeys.ACCESS_TOKEN);

  return fetch(input, {
    ...init,
    headers: {
      // Authorization: `Bearer ${accessToken}`,
      Authorization: `Bearer ${tempAccessToken}`,
      'Content-type': 'application/json',
    },
  });
};
