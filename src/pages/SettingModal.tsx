import "../styles/scss/Setting.scss";
import profileImage from "../assets/chun_bong.png";
import settingIcon from "../assets/Setting.svg";
import backImg from "../assets/_.png"
import { useState } from "react";
import axios from "axios";
import User from "../types/User";

const SettingModal = ({ onClose }: { onClose: () => void }) => {
  const user: User = JSON.parse(localStorage.getItem('user') || '');

  const changePassword = async(password: string) => {
    console.log("비밀번호 변경 함수 실행..~");
    const token = localStorage.getItem('token');
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/settings/update-password`,
            {
              password: password,
            },
            {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
            },
        );
        alert('성공적으로 변경되었습니다.')
        return response.data

    } catch (error) {
        console.error(error)
    }
  }

  const changeName = async(fullName: string | null, intro: string) => {
    console.log("이름 변경 함수 실행..~");

    if(fullName === "") fullName = null;

    const token = localStorage.getItem('token');
    try {
        const response = await axios.put(
            `${import.meta.env.VITE_API_URL}/settings/update-user`,
            {
                fullName: fullName || user.fullName,
                username: intro,
            },
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

        if(fullName) user.fullName = fullName;
        if(intro) user.userName = intro;
        localStorage.setItem('user', JSON.stringify(user));

        alert('성공적으로 변경되었습니다.');
        return response.data

    } catch (error) {
        console.error(error)
    }
  }

  const handleChange = () => {
    console.log('실행');
    const newPasswordInput = document.querySelector('#new-password') as HTMLInputElement;
    const newPassword = newPasswordInput.value;

    const newfullNameInput = document.querySelector('#new-fullname') as HTMLInputElement;
    const newfullName = newfullNameInput.value;

    const newIntroInput = document.querySelector('#intro-textarea') as HTMLInputElement;
    const newIntro = newIntroInput.value;

    console.log(newPassword);
    console.log(newfullName);

    if(newPassword) {changePassword(newPassword)};
    if(newfullName || newIntro) {changeName(newfullName, newIntro)};
  }
  
  
  
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
            <p className="setting-user-id">{user.fullName}</p>
            <p className="setting-user-email">{user.email}</p>
          </div>
        </div>
        <hr className="top"/>

        <div className="password-section">
        <label htmlFor="new-fullName">이름 변경</label>
          <input placeholder={user.fullName} id="new-fullname"/>
        </div>

        <hr className=" bottom"/>      

        {/* 비밀번호 */}
        <div className="password-section">
          <label htmlFor="new-password">비밀번호 변경</label>
          <input type="password" id="new-password" />
        </div>
            
        {/* 자기소개 */}
        <hr className=" bottom"/>

        <div className="intro-section">
          <label htmlFor="intro">자기소개 수정</label>
          <textarea id="intro-textarea" value={user?.userName} maxLength={50} />
        </div>

        {/* 임시로 추가한 수정 취소 버튼들 */}
        <div className="settingbutton-section">
          <button className="fix-button" onClick={handleChange}>수정</button>
          <button className="cancel-button" onClick={onClose}>취소</button>
        </div>
      </div>
    </div>
  );
};

export default SettingModal;
