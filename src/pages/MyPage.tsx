import "../styles/scss/Mypage.scss"; 
import profileImage from "../assets/chun_bong.png";
import settingIcon from "../assets/Setting.svg";

import { useState, useEffect } from "react";
import SetModal from "./SettingModal";
import useFetchUser from "../hooks/useFetchUser";
import Post from "../types/Post";
import useFetchUserPost from "../hooks/useFetchUserPost";
import Follow from "../types/Follow";
import User from "../types/User";

const MyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState('post');
  const [followingData, setFollowingData] = useState<(User | null)[]>([])
  const [followersData, setFollowersData] = useState<(User | null)[]>([])

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { data } = useFetchUser('65ae275324a85d18276ffd13');
  const posts = useFetchUserPost('64edba47aa26671246930aa3').data;
  // const posts = useFetchUserPost('65ae275324a85d18276ffd13').data;

  useEffect(() => {
    if (data?.followers) {
      const fetchFollowersData = async () => {
        const followersInfo = await Promise.all(
          data.followers.map(async (follow: Follow) => {
            const response = await fetch(`https://kdt.frontend.5th.programmers.co.kr:5006/users/${follow.follower}`);
            const followedUser = await response.json();
            return followedUser;
          })
        );
        setFollowersData(followersInfo);
      };
      fetchFollowersData();
    }
    if (data?.following) {
      const fetchFollowingData = async () => {
        const followingInfo = await Promise.all(
          data.following.map(async (follow: Follow) => {
            const response = await fetch(`https://kdt.frontend.5th.programmers.co.kr:5006/users/${follow.user}`);
            const followedUser = await response.json();
            return followedUser;
          })
        );
        setFollowingData(followingInfo);
      };
      fetchFollowingData();
    }
  }, [data?.following, data?.followers]);

  return (
    <div className="page-container">
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