import { defaultFetch } from '.';
import { Envs } from '../utils/env';

/**
 * @param {object} params
 * @param {number} params.page
 * @param {number} params.size
 * @example /api/books/trending?page=0&size=1&sort=%5B%22string%22%5D
 */
export const getTrendingBooks = (params) => {
  const searchParams = new URLSearchParams({
    ...params,
    sort: ['string'],
  }).toString();

  const url = `${Envs.VITE_API_ENDPOINT}/api/trending?${searchParams}`;

  return defaultFetch(url, { method: 'GET' });
};
