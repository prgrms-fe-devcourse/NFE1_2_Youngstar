import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/mypage', element: <MyPage /> },
    ],
  },
];

export default routes;
