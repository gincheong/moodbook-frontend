import { useEffect, useState } from 'react';

// TODO API로 페이지 사이즈 전달 필요하다면 이 값 사용
const GET_BOOK_PAGE_SIZE = 10;

export const useRecommendationBooks = () => {
  const [books, setBooks] = useState([]);

  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);

  const requestGetBooks = async () => {
    if (page > totalPage) {
      return;
    }

    // TODO page에 따라 새로 API 호출
    const response = await fetch('./dummyBooks.json', { method: 'GET' });

    if (response.ok) {
      const json = await response.json();
      setBooks((books) => [...books, ...json.data]);
      setTotalPage(json.totalPage);
    } else {
      console.error('getBooks Error');
    }
    setPage(page + 1);
  };

  useEffect(() => {
    requestGetBooks();
  }, []);

  return { books, requestGetBooks };
};
