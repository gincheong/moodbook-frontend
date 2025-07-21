import { Image, Typography } from 'antd';
import {
  CardContent,
  Cover,
  Description,
  Title,
  Card,
  CustomArrow,
  Wrapper,
} from './BookList.styles';
import Slider, { CustomArrowProps, Settings } from 'react-slick';
import { Book } from '@/apis/books';

const getRandomColor = () => {
  const colors = [
    '#FDFD96',
    '#FFB3BA',
    '#B5EAD7',
    '#C9C9FF',
    '#FFDAC1',
    '#E2F0CB',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const Arrow = (props: CustomArrowProps) => {
  return <CustomArrow {...props} />;
};

interface BookListProps {
  books: Book[];
  title: string;
}
export const BookList = (props: BookListProps) => {
  // TODO Carousel 적용
  const { title, books } = props;

  const sliderSettings: Settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    swipeToSlide: true,
    variableWidth: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 600, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
    prevArrow: <Arrow />,
    nextArrow: <Arrow />,
  };

  return (
    <Wrapper>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Slider {...sliderSettings}>
        {books.map((book) => (
          <div key={book.bookId}>
            <Card size='small' $backgroundColor={getRandomColor()}>
              <CardContent>
                <div>
                  <Title>{book.title}</Title>
                  <Description>{book.description}</Description>
                </div>
                <Cover>
                  <Image
                    width={100}
                    src={book.coverImage}
                    alt={`image-alt-${book.title}`}
                  />
                </Cover>
              </CardContent>
            </Card>
          </div>
        ))}
      </Slider>
    </Wrapper>
  );
};
