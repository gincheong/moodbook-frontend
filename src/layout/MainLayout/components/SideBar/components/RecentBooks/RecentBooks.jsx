import { Button } from 'antd';
import styles from './RecentBooks.module.css';
import { Paths } from '../../../../../../routes/routes';

export const RecentBooks = () => {
  return (
    <nav className={styles.container}>
      <Button type='link' href={Paths.AI_SEARCH}>
        AI 검색
      </Button>
      <Button type='link' href={Paths.SELECT_MOOD}>
        기분 선택
      </Button>
    </nav>
  );
};
