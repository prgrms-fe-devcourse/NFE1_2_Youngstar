import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/scss/Mypage.scss"; 
import profileImage from "../assets/chun_bong.png";
import settingIcon from "../assets/Setting.svg";
import SetModal from "./SettingModal";
import useFetchUser from "../hooks/useFetchUser";
import Post from "../types/Post";
import useFetchUserPost from "../hooks/useFetchUserPost";
import Follow from "../types/Follow";
import User from "../types/User";
import { useAuth } from "../hooks/useAuth";

const MyPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { pathname } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('post');
  const [followingData, setFollowingData] = useState<(User | null)[]>([])
  const [followersData, setFollowersData] = useState<(User | null)[]>([])

  const handleLogout = () => {
    logout(); 
    navigate("/loginpage"); // 로그아웃 후 로그인 페이지로 이동
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/loginPage", { state: pathname });
    }
  }, [navigate, pathname]);

  const userData = localStorage.getItem('user');
  const userId = userData ? JSON.parse(userData)._id : null;

  const { data } = useFetchUser(userId);
  const posts = useFetchUserPost(userId).data;

  useEffect(() => {
    const fetchFollowersData = async () => {
      if (data?.followers) {
        const followersInfo = await Promise.all(
          data.followers.map(async (follow: Follow) => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${follow.follower}`);
            return response.json();
          })
        );
        setFollowersData(followersInfo);
      }
    };

    const fetchFollowingData = async () => {
      if (data?.following) {
        const followingInfo = await Promise.all(
          data.following.map(async (follow: Follow) => {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/users/${follow.user}`);
            return response.json();
          })
        );
        setFollowingData(followingInfo);
      }
    };

    fetchFollowersData();
    fetchFollowingData();
  }, [data?.followers, data?.following]);

  return (
    <div className="page-container">
      <div className="logout">
        <button onClick={handleLogout}>로그아웃</button>
      </div>
      <div className="setting-section">
        <img className="setting" src={settingIcon} alt="Setting" onClick={toggleModal}/>
      </div>
      <div className="profile-section">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <h2 className="user-id">{data?.fullName}</h2>
        <div>
          <p className="introduce-text">
            안녕 나는 박춘봉이다 여기는 자기소개문구 입력란이다. 자기소개 문구
            제한은 50자이고 수정 가능하다
          </p>
        </div>
      </div>
      <div className="tab-section">
        <button className={`tab ${currentTab === 'post' ? 'current' : ''}`} onClick={() => setCurrentTab('post')}>게시물</button>
        <button className={`tab ${currentTab === 'following' ? 'current' : ''}`} onClick={() => setCurrentTab('following')}>팔로잉</button>
        <button className={`tab ${currentTab === 'follower' ? 'current' : ''}`} onClick={() => setCurrentTab('follower')}>팔로워</button>
      </div>
      <div className="tab-content">
        {
          currentTab === 'post' && (
            <div className="post-tab">
              {
                posts?.map((post: Post) => (
                  <div className="posts">
                    <img src={post.image}></img>
                  </div>
                ))
              }                  
            </div>
        )}
        {
          currentTab === 'following' && (
            <div className="follower-tab">
              {
                followingData.map((followedUser, index) => (
                  <div className="follower" key={index}>
                    <div className="follower-info">
                      <div className="follower-img">
                        <img src={followedUser?.coverImage} alt="follower profile" />
                        {/* <img src='src/assets/postImage1.png' alt="follower profile" /> */}
                      </div>
                      <div className="follower-name">{followedUser?.fullName}</div>
                    </div>
                    <button className="follow-btn">following</button>
                  </div>
                ))
              }
            </div>
          )
        }
        {
          currentTab === 'follower' && (
            <div className="follower-tab">
            {
              followersData.map((followedUser, index) => (
                <div className="follower" key={index}>
                  <div className="follower-info">
                    <div className="follower-img">
                      <img src={followedUser?.coverImage} alt="follower profile" />
                    </div>
                    <div className="follower-name">{followedUser?.fullName}</div>
                  </div>
                  <button className="follow-btn">
                    {followingData.some(f => f?._id === followedUser?._id) ? 'following' : 'follow'}
                  </button>
                </div>
              ))
            }
          </div>
          )
        }
      </div>

      {/* 0928 - 모달이 열릴 때만 렌더링 추가 */}
      {isModalOpen && <SetModal onClose={toggleModal} />} 
    </div>
  );
};

export default MyPage;