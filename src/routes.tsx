import DetailPage from './pages/DetailPage';
import Layout from './components/Layout';
import ChatPage from './pages/ChatPage';
import MainPage from './pages/MainPage';
import MyPage from './pages/MyPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage'
import NotificationPage from './pages/NotificationPage';
import PostFormPage from './pages/PostFormPage';
import StarredPage from './pages/StarredPage';
import MapPage from './pages/MapPage';
import HotPost from './pages/HotPost';

const routes = [
  {
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/mypage', element: <MyPage /> },
      { path: '/mypage/:id', element: <MyPage /> },
      { path: '/joinPage', element:<JoinPage/>},
      { path: '/loginpage', element: <LoginPage /> },
      { path: '/notification', element: <NotificationPage /> },
      { path: '/chatting', element: <ChatPage /> },
      { path: '/saved', element: <StarredPage /> },
      { path: '/detailpage/:id', element: <DetailPage /> },
      { path: '/postform', element: <PostFormPage /> },
      { path: '/map', element: <MapPage />},
      { path: '/hotpost', element: <HotPost /> }
    ],
  },
];

export default routes;
