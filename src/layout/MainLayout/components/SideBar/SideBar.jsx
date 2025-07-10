import styles from './SideBar.module.css';
import moodBookLogo from '@/assets/moodbook_logo.png';

export const SideBar = () => {
  return (
    <section className={styles.sideBar}>
      <img className={styles.logo} src={moodBookLogo} alt='MoodBook Logo' />
      <div className={styles.description}>
        <span>{'지금 내가 읽고 싶은 책,\nAI가 찾아드릴게요'}</span>
        <span>오늘의 기분은 어떠신가요?</span>
      </div>
    </section>
  );
};
