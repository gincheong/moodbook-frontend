import { createBrowserRouter } from 'react-router';
import { Main } from '../pages/Main/Main';
import { Book } from '../pages/Book/Book';
import { MainLayout } from '../layout/MainLayout/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: MainLayout,
    children: [
      { index: true, Component: Main },
      { path: 'book', Component: Book },
    ],
  },
]);
