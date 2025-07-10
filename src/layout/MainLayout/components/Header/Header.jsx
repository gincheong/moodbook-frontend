import styles from './Header.module.css';
import profileImage from '@/assets/profile.png';
import { Link } from 'react-router';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inputWrapper}>
        <input className={styles.input} type='text' placeholder='검색어를 입력하세요' />
      </div>
      <Link to='/admin' className={styles.adminPageButton}>
        관리자 페이지
      </Link>
      <Link to='/me' className={styles.profileIconButton}>
        <img className={styles.profileImage} src={profileImage} alt='profile image' />
      </Link>
    </header>
  );
};
