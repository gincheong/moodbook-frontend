import { Card, Image } from 'antd';
import styles from './BookList.module.css';
import { useRef } from 'react';
import { useIntersectionObserver } from '../../../../hooks/useIntersectionObserver';

/**
 * @param {object} props
 * @param {object[]} props.books
 * @param {string} props.title
 * @param {function} [props.onIntersect]
 */
export const BookList = (props) => {
  // TODO Carousel 적용
  const { title, books, onIntersect } = props;

  const infinityScrollIndicatorRef = useRef(null);

  useIntersectionObserver({
    target: infinityScrollIndicatorRef.current,
    onIntersect: () => {
      onIntersect && onIntersect();
    },
  });

  return (
    <section>
      <h3>{title}</h3>
      <li className={styles.list}>
        {books.map((book, index) => (
          <ol key={`${book.id}-${index}`} className={styles.item}>
            <Card title={book.title} size='small'>
              <Image src={book.coverImageUrl} alt={`image-alt-${book.title}`} />
            </Card>
          </ol>
        ))}
        <div
          ref={infinityScrollIndicatorRef}
          className={styles.infinityScrollIndicator}
        />
      </li>
    </section>
  );
};
