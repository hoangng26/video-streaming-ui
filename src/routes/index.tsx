import MainLayout from '@/layouts/MainLayout';
import HomePage from '@/pages/HomePage';
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
        path: 'test',
        element: <h1>Hello, this is a test page!!</h1>,
      },
    ],
  },
]);
