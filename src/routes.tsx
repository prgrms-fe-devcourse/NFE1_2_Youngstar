import DetailPage from './pages/DetailPage';
import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/detailpage', element: <DetailPage /> },
    ],
  },
];

export default routes;
