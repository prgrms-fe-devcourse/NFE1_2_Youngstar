import "../styles/scss/Setting.scss";
import profileImage from "../assets/chun_bong.png";
import settingIcon from "../assets/Setting.svg";
import backImg from "../assets/_.png"

const SettingModal = ({ onClose }: { onClose: () => void }) => {
  return (
    
    <div className="settingContainer">
      

      <div className="setting-content">
        {/* 뒤로가기 이미지 */}
      <button className="baack-image" onClick={onClose}>
          <img src={backImg}alt="back-image"></img>
         </button>
        {/* 프로필(사진, 아이디, 비밀번호) */}
        <div className="profile-section">

         <p className="title">설정</p>

        

          <div className="image-container">
            <img
              className="setting-image"
              src={profileImage}
              alt="setting-image"
            />
            {/* 프로필 사진 수정 버튼 */}
            <button className="setting-btn">
              <img src={settingIcon} alt="Setting" />
            </button>
          </div>

          <div className="setting-user-info">
            <p className="setting-user-id">chun_bong</p>
            <p className="setting-user-email">pcb_cat@naver.com</p>
          </div>
         
        </div>
        <hr className="top"/>
      

        {/* 비밀번호 */}
        <div className="password-section">
          <label htmlFor="current-password">기존 비밀번호 확인</label>
          <input type="password" id="current-password" />

          <label htmlFor="new-password">새 비밀번호 입력</label>
          <input type="password" id="new-password" />
        </div>
            
        {/* 자기소개 */}
        <hr className=" bottom"/>

        <div className="intro-section">
          <label htmlFor="intro">자기소개 수정</label>
          <textarea id="intro-textarea" maxLength={50} />
        </div>

        {/* 임시로 추가한 수정 취소 버튼들 */}
        <div className="settingbutton-section">
          <button className="fix-button" onClick={onClose}>수정</button>
          <button className="cancel-button" onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
