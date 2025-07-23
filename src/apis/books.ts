import { defaultFetch } from '.';
import { Envs } from '../utils/env';

export interface Book {
  bookId: number;
  isbn13: string;
  title: string;
  author: string;
  publisher: string;
  /** @example "2025-07-19T09:18:33.333Z" */
  pubDate: string;
  reputation: number;
  coverImage: string;
  description: string;
  categoryName: string;
  /** @example "2025-07-19T09:18:33.333Z" */
  createdAt: string;
  viewCount: number;
}

export interface TrendingBooksResponse {
  totalElements: number;
  totalPages: number;
  pageable: {
    paged: boolean;
    pageNumber: number;
    pageSize: number;
    offset: number;
    sort: {
      sorted: boolean;
      empty: boolean;
      unsorted: boolean;
    };
    unpaged: boolean;
  };
  size: number;
  content: Book[];
  number: number;
  sort: {
    sorted: boolean;
    empty: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  last: boolean;
  empty: boolean;
}

export const requestGetTrendingBooks = () => {
  const url = `${Envs.VITE_API_ENDPOINT}/api/books/trending`;

  return defaultFetch(url, { method: 'GET' });
};

export const requestGetRecommendationBooks = () => {
  const url = `${Envs.VITE_API_ENDPOINT}/api/books/recommendations/star`;

  return defaultFetch(url, { method: 'GET' });
};

/** @returns {Book} */
export const requestGetBookDetail = (id: number) => {
  const url = `${Envs.VITE_API_ENDPOINT}/api/books/${id}`;

  return defaultFetch(url, { method: 'GET' });
};
