import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
import WatchPage from '@/pages/WatchPage';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '/watch/:id',
        element: <WatchPage />,
      },
    ],
  },
]);
