import { useEffect, useState } from 'react';
import { requestGetTrendingBooks } from '../../../apis/books';

export const useTrendingNowBooks = () => {
  const [books, setBooks] = useState([]);

  const requestGetBooks = async () => {
    const response = await requestGetTrendingBooks();

    if (response.ok) {
      const json = await response.json();
      setBooks((books) => [...books, ...json.content]);
    } else {
      console.error('getBooks Error');
    }
  };

  useEffect(() => {
    requestGetBooks();
  }, []);

  return { books, requestGetBooks };
};
