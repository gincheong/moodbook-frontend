import { Image, Typography } from 'antd';
import styles from './BookList.module.css';
import {
  CardContent,
  Cover,
  Description,
  Title,
  Card,
} from './BookList.styles';

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

/**
 * @param {object} props
 * @param {object[]} props.books
 * @param {string} props.title
 */
export const BookList = (props) => {
  // TODO Carousel 적용
  const { title, books } = props;

  return (
    <section>
      <Typography.Title level={4}>{title}</Typography.Title>
      <li className={styles.list}>
        {books.map((book, index) => (
          <ol key={`${book.id}-${index}`} className={styles.item}>
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
          </ol>
        ))}
      </li>
    </section>
  );
};
