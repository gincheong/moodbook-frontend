import { BookList } from './components/BookList/BookList';
import styles from './Main.module.css';
import books from './dummy.json';

export const Main = () => {
  return (
    <section className={styles.container}>
      <BookList title='Trending Now' books={books} />
      <BookList title='Recommendation' books={books} />
    </section>
  );
};
