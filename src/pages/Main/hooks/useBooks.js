import { useEffect, useState } from 'react';

export const useBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const requestGetBooks = async () => {
      const response = await fetch('./dummyBooks.json', { method: 'GET' });
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
      } else {
        console.error('getBooks Error');
        setBooks([]);
      }
    };
    requestGetBooks();
  }, []);

  return { books };
};
