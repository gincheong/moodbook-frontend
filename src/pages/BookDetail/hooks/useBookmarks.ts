import { requestGetBookMarks, RequestGetBookMarksResponse } from '@/apis/books';
import { useEffect, useState } from 'react';

export const useBookmarks = () => {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([]);

  const fetchBookmarkedIds = async () => {
    const response = await requestGetBookMarks();

    if (response.status === 200) {
      const json = (await response.json()) as RequestGetBookMarksResponse;
      const ids = json.map((book) => book.bookId);
      setBookmarkedIds(ids);
    }
  };

  useEffect(() => {
    fetchBookmarkedIds();
  }, []);

  return { bookmarkedIds, fetchBookmarkedIds };
};
