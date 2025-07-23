import { useEffect, useState } from 'react';
import { requestGetTrendingBooks } from '../../../apis/books';

const GET_BOOK_PAGE_SIZE = 10;

export const useTrendingNowBooks = () => {
  const [books, setBooks] = useState([]);

  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);

  const requestGetBooks = async () => {
    if (page > totalPage) {
      return;
    }

    const response = await requestGetTrendingBooks({
      size: GET_BOOK_PAGE_SIZE,
      page,
    });

    if (response.ok) {
      const json = await response.json();
      setBooks((books) => [...books, ...json.content]);
      setTotalPage(json.totalPage);
    } else {
      console.error('getBooks Error');
    }
    setPage(page + 1);
  };

  useEffect(() => {
    requestGetBooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { books, requestGetBooks };
};
