import Layout from './components/Layout';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage'
const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/loginPage', element: <LoginPage /> },
      { path: '/joinPage', element:<JoinPage/>}
      
    ],
  },
];

export default routes;
