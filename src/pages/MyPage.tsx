import "../styles/scss/Mypage.scss"; 
import profilePhoto from "../assets/chun_bong.png";
import settingIcon from "../assets/Setting.svg";

import { useState } from "react";
import SetModal from "./SettingModal";

const MyPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리

  // 모달 열기/닫기 함수
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="page-container">
      <div className="setting-section">
        <img className="setting" src={settingIcon} alt="Setting" onClick={toggleModal}/>
      </div>
      <div className="profile-section">
        <img className="profile-image" src={profilePhoto} alt="Profile" />
        <h2 className="userid">chun_bong</h2>
        <div>
          <p className="introduce-text">
            안녕 나는 박춘봉이다 여기는 자기소개문구 입력란이다. 자기소개 문구
            제한은 50자이고 수정 가능하다
          </p>
        </div>
      </div>
      <div className="tab-section">
        <button className="tab">게시물</button>
        <button className="tab">팔로잉</button>
        <button className="tab">팔로워</button>
      </div>
      <div className="tab-content">
        <p>탭하면 보이는 공간</p>
      </div>

      {/* 모달이 열렸을 때만 Modal 컴포넌트 렌더링 */}
      {isModalOpen && <SetModal onClose={toggleModal} />}
    </div>
  );
};


export default MyPage;
