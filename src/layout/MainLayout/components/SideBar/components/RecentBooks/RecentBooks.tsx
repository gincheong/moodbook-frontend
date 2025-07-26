import { Typography } from 'antd';
import { useRecentBooks } from './hooks/useRecentBooks.ts';
import {
  Books,
  Container,
  RecentBookImg,
  TextStyles,
} from './RecentBooks.styles.ts';

export const RecentBooks = () => {
  const { recentBooks } = useRecentBooks();

  return (
    <Container>
      <Typography.Text style={TextStyles}>최근 본 도서</Typography.Text>
      <Books>
        {recentBooks.map((book) => (
          <RecentBookImg key={book.bookId} src={book.coverImage} />
        ))}
      </Books>
    </Container>
  );
};
