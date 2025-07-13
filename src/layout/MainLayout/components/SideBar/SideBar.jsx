import { Layout, Typography } from 'antd';
import styles from './SideBar.module.css';
import moodBookLogo from '@/assets/moodbook_logo.png';
import { Link } from 'react-router';

export const SideBar = () => {
  return (
    <Layout.Sider breakpoint='md' width={200}>
      <h1 className={styles.title}>MoodBook</h1>
      <div className={styles.content}>
        <Link to='/' className={styles.logoAnchor}>
          <img className={styles.logo} src={moodBookLogo} alt='MoodBook Logo' />
        </Link>
        <div className={styles.description}>
          <span>{'지금 내가 읽고 싶은 책,\nAI가 찾아드릴게요'}</span>
          <span>오늘의 기분은 어떠신가요?</span>
        </div>
      </div>
    </Layout.Sider>
  );
};
