import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "../styles/css/Mypage.css"; 
import profileImage from "../assets/chun_bong.png";
import settingIcon from "../assets/Setting.svg";
import SetModal from "./SettingModal";
import useFetchUser from "../hooks/useFetchUser";
import Post from "../types/Post";
import useFetchUserPost from "../hooks/useFetchUserPost";
import Follow from "../types/Follow";
import User from "../types/User";
import { useAuth } from "../hooks/useAuth";
import PageHeader from "../components/PageHeader";
import axios from "axios";

const MyPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { id: paramId } = useParams(); 
  const { pathname, search } = useLocation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('post');
  const [followingData, setFollowingData] = useState<(User | null)[]>([]);
  const [followersData, setFollowersData] = useState<(User | null)[]>([]);
  
  const [id, setId] = useState(paramId || JSON.parse(localStorage.getItem('user') || '')._id);
  const [data, setData] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [isFollowing, setIsFollowing] = useState(false)

  const user = JSON.parse(localStorage.getItem('user') || '');

  const userData = useFetchUser(id);
  const postData = useFetchUserPost(id);

  useEffect(() => {
    if (userData?.data) {
      setData(userData.data); 
    }

    if (postData?.data) {
      setPosts(postData.data);
    }

    console.log(data);
    console.log(posts);
  }, [id, userData, postData]);
  
  const handleLogout = () => {
    logout(); 
    navigate("/loginpage");
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    setIsFollowing(user.following.includes(id));
  }, [id]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/loginPage", { state: pathname });
    }
  }, [navigate, pathname]);
  
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
  }, [id, data, search]);

  const handleFollow = async () => {
    const user = JSON.parse(localStorage.getItem('user') || '');
    
    if (isFollowing) {
      try {
        const response = await axios.delete(
          `${import.meta.env.VITE_API_URL}/follow/delete`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
            data: { userId: id },
          }
        );
        alert('언팔로우 성공');
        setIsFollowing(false);
      } catch (error) {
        console.error("언팔로우 실패", error);
      }
    } else {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/follow/create`,
          { userId: id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        alert('팔로우 성공');
        const response2 = await axios.post(
          `${import.meta.env.VITE_API_URL}/notifications/create`,
          { notificationType: "FOLLOW",
            notificationTypeId: response.data._id,
            userId: id,
            postId: null,
        },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );
        setIsFollowing(true);
      } catch (error) {
        console.error("팔로우 실패", error);
      }
    }
  };

  useEffect(() => {
    if (userData && userData.data) {
      setData(userData.data);
    }
  }, [userData]);
  
  useEffect(() => {
    if (postData && postData.data) {
      setPosts(postData.data);
    }
  }, [postData]);
  
  

  return (
    <div className="page-container">
      {
        (id ===  user._id) &&
          <div className="logout">
            <button onClick={handleLogout}>로그아웃</button>
          </div>
      }
      {
        (id !==  user._id) &&
        <button className='follow_btn' onClick={() => handleFollow(id)}>
          {isFollowing ? 'following' : 'follow'}
        </button>
      }
      {
        (id !== user._id) &&
          <PageHeader> </PageHeader>
      }

      <div className="setting-section">
        <img className="setting" src={settingIcon} alt="Setting" onClick={toggleModal}/>
      </div>
      <div className="profile-section">
        <img className="profile-image" src={profileImage} alt="Profile" />
        <h2 className="user-id">{data?.fullName}</h2>
        <div className="introduce-box">
          {
            data?.username && 
            <p className="introduce-text">
              {data?.username}
            </p>
          }
         
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
                  <div className="posts" key={post._id} onClick={() => navigate(`/detailpage/${post._id}`)}>
                    <img src={post.image} alt="Post" />
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

      {isModalOpen && <SetModal onClose={toggleModal} />} 
    </div>
  );
};

export default MyPage;
