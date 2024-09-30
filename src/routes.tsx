import DetailPage from './pages/DetailPage';
import Layout from './components/Layout';
import ChatPage from './pages/ChatPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage'
import NotificationPage from './pages/NotificationPage';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/joinPage', element:<JoinPage/>}
      { path: '/loginpage', element: <LoginPage /> },
      { path: '/notification', element: <NotificationPage /> },
      { path: '/chatting', element: <ChatPage /> },
      { path: '/detailpage', element: <DetailPage /> },
    ],
  },
];

export default routes;
