import { BookList } from './components/BookList/BookList';
import styles from './Main.module.css';
import { useTrendingNowBooks } from './hooks/useTrendingNowBooks';
import { useRecommendationBooks } from './hooks/useRecommendationBooks';

export const Main = () => {
  const { books: trendingNowBooks, requestGetBooks: getTrendingNowBooks } =
    useTrendingNowBooks();
  const {
    books: recommendationBooks,
    requestGetBooks: getRecommendationBooks,
  } = useRecommendationBooks();

  return (
    <section className={styles.container}>
      <BookList
        title='Trending Now'
        books={trendingNowBooks}
        onIntersect={async () => {
          await getTrendingNowBooks();
        }}
      />
      <BookList
        title='Recommendation'
        books={recommendationBooks}
        onIntersect={async () => {
          await getRecommendationBooks();
        }}
      />
    </section>
  );
};
