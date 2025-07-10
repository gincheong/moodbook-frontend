import { Outlet } from 'react-router';
import styles from './MainLayout.module.css';
import { SideBar } from './components/SideBar/SideBar';

export const MainLayout = () => {
  return (
    <main className={styles.container}>
      <SideBar />
      <section className={styles.content}>
        <Outlet />
      </section>
    </main>
  );
};
