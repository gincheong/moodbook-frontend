import styles from './Header.module.css';
import profileImage from '@/assets/profile.png';
import { Button, Dropdown, Input } from 'antd';
import { Link, useNavigate } from 'react-router';
import { Paths } from '../../../../routes/routes';

export const Header = () => {
  const navigate = useNavigate();

  const onLogoutClick = () => {
    alert('로그아웃');
  };

  /**
   * @param {string} value
   */
  const onSearch = (value) => {
    if (value.trim().length === 0) {
      return;
    }

    navigate(`${Paths.SEARCH}?keyword=${value}`);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Button type='link' href={Paths.AI_SEARCH}>
          AI 검색
        </Button>
        <Button type='link' href={Paths.SELECT_MOOD}>
          기분 선택
        </Button>
      </nav>
      <div className={styles.flex} />
      <div className={styles.inputWrapper}>
        <Input.Search
          type=''
          placeholder='검색어를 입력하세요.'
          onSearch={onSearch}
        />
      </div>
      <Dropdown
        menu={{
          items: [
            { key: 'admin', label: <Link to='/me'>마이페이지</Link> },
            {
              key: 'logout',
              label: (
                <button
                  type='button'
                  className={styles.logout}
                  onClick={onLogoutClick}
                >
                  로그아웃
                </button>
              ),
            },
            {
              key: 'me',
              label: <Link to='/admin'>관리자 페이지</Link>,
            },
          ],
        }}
      >
        <img
          className={styles.profileImage}
          src={profileImage}
          alt='profile image'
        />
      </Dropdown>
    </header>
  );
};
