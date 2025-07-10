import { createBrowserRouter } from 'react-router';
import { Main } from '../pages/Main/Main';
import { Book } from '../pages/Book/Book';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/book',
    element: <Book />,
  },
]);
