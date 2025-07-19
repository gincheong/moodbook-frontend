import { createBrowserRouter } from 'react-router';
import { Main } from '../pages/Main/Main';
import { Book } from '../pages/Book/Book';
import { MyPage } from '../pages/MyPage/MyPage';
import { Admin } from '../pages/Admin/Admin';
import { SignUp } from '../pages/SignUp/SignUp';
import { MainLayout } from '../layout/MainLayout/MainLayout';
import { Search } from '../pages/Search/Search';
import { AiSearch } from '../pages/AiSearch/AiSearch';
import { SelectMood } from '../pages/SelectMood/SelectMood';

export const Paths = {
  MAIN: '/',
  BOOK: '/book',
  ME: '/me',
  ADMIN: '/admin',
  SEARCH: '/search',
  AI_SEARCH: '/ai-search',
  SELECT_MOOD: '/select-mood',

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
          { path: Paths.AI_SEARCH, Component: AiSearch },
          { path: Paths.SELECT_MOOD, Component: SelectMood },
        ],
      },
      { path: Paths.SIGN_UP, Component: SignUp },
    ],
  },
]);
