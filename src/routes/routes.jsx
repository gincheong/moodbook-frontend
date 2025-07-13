import { createBrowserRouter } from 'react-router';
import { Main } from '../pages/Main/Main';
import { Book } from '../pages/Book/Book';
import { MyPage } from '../pages/MyPage/MyPage';
import { Admin } from '../pages/Admin/Admin';
import { SignUp } from '../pages/SignUp/SignUp';
import { MainLayout } from '../layout/MainLayout/MainLayout';
import { Search } from '../pages/Search/Search';

export const Paths = {
  MAIN: '/',
  BOOK: '/book',
  ME: '/me',
  ADMIN: '/admin',
  SEARCH: '/search',

  SIGN_UP: '/sign-up',
};

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      // * 아래 항목들의 `Component`에 해당되는 부분이 MainLayout에 있는 <Outlet />에 들어갑니다.
      {
        Component: MainLayout,
        children: [
          { index: true, Component: Main },
          { path: Paths.BOOK, Component: Book },
          { path: Paths.ME, Component: MyPage },
          { path: Paths.ADMIN, Component: Admin },
          { path: Paths.SEARCH, Component: Search },
        ],
      },
      { path: Paths.SIGN_UP, Component: SignUp },
    ],
  },
]);
