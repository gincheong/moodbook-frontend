import styles from './Header.module.css';
import profileImage from '@/assets/profile.png';
import { Dropdown, Input } from 'antd';
import { Link } from 'react-router';

export const Header = () => {
  const onLogoutClick = () => {
    alert('로그아웃');
  };

  return (
    <header className={styles.header}>
      <div className={styles.inputWrapper}>
        <Input type='text' placeholder='검색어를 입력하세요.' />
      </div>
      <Dropdown
        menu={{
          items: [
            {
              key: 'admin',
              label: <Link to='/me'>마이페이지</Link>,
            },
            {
              key: 'me',
              label: <Link to='/admin'>관리자 페이지</Link>,
            },
            {
              key: 'logout',
              label: (
                <button type='button' className={styles.logout} onClick={onLogoutClick}>
                  로그아웃
                </button>
              ),
            },
          ],
        }}
      >
        <img className={styles.profileImage} src={profileImage} alt='profile image' />
      </Dropdown>
    </header>
  );
};
