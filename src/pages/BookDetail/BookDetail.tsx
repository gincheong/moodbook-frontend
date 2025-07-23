import { useSearchParams } from 'react-router';
import { useBook } from './hooks/useBook';
import {
  BookInfo,
  Container,
  DetailList,
  Texts,
  Title,
} from './BookDetail.styles';
import { Button, Image, Space } from 'antd';
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

  const onGoReportsClick = () => {
    alert('TODO: report 페이지로 이동');
    // navigate(report ?id={id})
  };

  const onBookmarkClick = () => {
    alert('TODO: add to bookmark (API 모르는 상태)');
  };

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
          <Space>
            <Button type='primary' onClick={onGoReportsClick}>
              다른 유저들의 독후감 보기
            </Button>
            <Button type='primary' onClick={onBookmarkClick}>
              북마크에 추가
            </Button>
          </Space>
        </Texts>
      </BookInfo>
    </Container>
  );
};
