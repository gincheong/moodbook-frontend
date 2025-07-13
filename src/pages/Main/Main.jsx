import { TrendingNow } from './components/TrendingNow/TrendingNow';
import styles from './Main.module.css';

export const Main = () => {
  return (
    <section className={styles.container}>
      <TrendingNow />
    </section>
  );
};
