import { createBrowserRouter } from 'react-router';
import { Main } from '@/pages/Main/Main';
import { Book } from '@/pages/Book/Book';
import { MyPage } from '@/pages/MyPage/MyPage';
import { Admin } from '@/pages/Admin/Admin';
import { SignUp } from '@/pages/SignUp/SignUp';
import { MainLayout } from '@/layout/MainLayout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      // * 아래 항목들의 `Component`에 해당되는 부분이 MainLayout에 있는 <Outlet />에 들어갑니다.
      {
        Component: MainLayout,
        children: [
          { index: true, Component: Main },
          { path: 'book', Component: Book },
          { path: 'me', Component: MyPage },
          { path: 'admin', Component: Admin },
        ],
      },
      { path: 'login', Component: SignUp },
    ],
  },
]);
