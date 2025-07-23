import { useSearchParams } from 'react-router';
import { useBook } from './hooks/useBook';

export const BookDetail = () => {
  const [searchParams, _] = useSearchParams();
  const bookId = searchParams.get('id') ?? '';

  const { book } = useBook({ id: Number(bookId) });

  if (!bookId) {
    return <p>잘못된 경로입니다.</p>;
  }
  if (!book) {
    return <p>{`도서 정보가 없습니다. id: ${bookId}`}</p>;
  }

  return <>{book.title}</>;
};
