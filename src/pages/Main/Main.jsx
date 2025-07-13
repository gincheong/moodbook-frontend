import { BookList } from './components/BookList/BookList';
import styles from './Main.module.css';
import { useBooks } from './hooks/useBooks';

export const Main = () => {
  const { books } = useBooks();

  return (
    <section className={styles.container}>
      <BookList title='Trending Now' books={books} />
      <BookList title='Recommendation' books={books} />
    </section>
  );
};
