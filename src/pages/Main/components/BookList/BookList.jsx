import { Card, Image, Typography } from 'antd';
import styles from './BookList.module.css';
import { CardContent, Cover, Description, Title } from './BookList.styles';

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
            <Card size='small'>
              <CardContent>
                <div className={styles.text}>
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
