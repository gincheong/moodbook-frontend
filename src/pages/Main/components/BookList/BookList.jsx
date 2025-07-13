import { Card, Image } from 'antd';
import styles from './BookList.module.css';

/**
 * @param {object} props
 * @param {object[]} props.books
 * @param {string} title
 */
export const BookList = (props) => {
  const { title, books } = props;

  return (
    <section>
      <h3>{title}</h3>
      <li className={styles.list}>
        {books.map((book) => (
          <ol key={book.id} className={styles.item}>
            <Card title={book.title} size='small'>
              <Image src={book.coverImageUrl} alt={`image-alt-${book.title}`} />
            </Card>
          </ol>
        ))}
      </li>
    </section>
  );
};
