import { useSearchParams } from 'react-router';
import { useBook } from './hooks/useBook';
import {
  BookInfo,
  Container,
  DetailList,
  Texts,
  Title,
} from './BookDetail.styles';
import { Image } from 'antd';
import { ScoreStars } from './components/ScoreStars';

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

  return (
    <Container>
      <BookInfo>
        <Image src={book.coverImage} alt='book cover image' width={150} />
        <Texts>
          <Title>{book.title}</Title>
          <DetailList>
            <li>{`저자 :    ${book.author}`}</li>
            <li>{`장르 :    ${book.categoryName}`}</li>
            <li>{`출판일:  ${book.pubDate}`}</li>
          </DetailList>
          <ScoreStars reputation={book.reputation} />
        </Texts>
      </BookInfo>
    </Container>
  );
};
