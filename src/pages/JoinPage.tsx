import React, { useState } from "react";
import "../styles/css/join.css";
import welcomeLogo from "../assets/welcomeLogo.svg";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "../hooks/useAuth";

const JoinPage: React.FC = () => {
  const { signup } = useAuth();

  const [formState, setFormState] = useState({
    email: "",
    id: "",
    password: "",
    checkpassword: "",
  });

  //비밀번호 표시 여부
  const [showPassword, setShowPassword] = useState(false);
  const [showCheckPassword, setShowCheckPassword] = useState(false);

  //업데이트값
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    console.log(setShowPassword);
  };

  const toggleCheckPasswordVisibility = () => {
    setShowCheckPassword(!showCheckPassword);
  };

  //1001 추가 - API 호출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 제출시 새로고침 막기

    // 1001 추가 - 입력한 비번하고 맞지않으면 alert 기능
    if (formState.password !== formState.checkpassword) { 
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    await signup(formState.email, formState.id, formState.password);
    console.log("제출 :", formState);
  };

  return (
    <div className="join-container">
      <form className="join-form" onSubmit={handleSubmit}>
        <h1>회원가입</h1>
        <p>친구들의 사진과 동영상을 보려면 가입하세요.</p>

        {/* 이메일 입력 */}
        <div className="join-form-group">
          <label htmlFor="join-email">이메일</label>
          <input
            type="text"
            id="join-email"
            name="email"
            placeholder="이메일을 입력하세요 "
            value={formState.email}
            onChange={updateValue}
            required
          />
        </div>

        {/* 아이디 입력 */}
        <div className="join-form-group">
          <label htmlFor="id">아이디</label>
          <div className="id-container">
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디를 입력하세요"
              value={formState.id}
              onChange={updateValue}
              required
            />
          </div>
        </div>

        <div className="join-form-group">
          <label htmlFor="password">비밀번호</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formState.password}
              onChange={updateValue}
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="join-password-toggle"
            >
              {showPassword ? (
                <AiFillEyeInvisible color="black" />
              ) : (
                <AiFillEye color="black" />
              )}
            </button>
          </div>
        </div>

        <div className="join-form-group">
          <label htmlFor="checkpassword">비밀번호 확인</label>
          <div className="password-container">
            <input
              type={showCheckPassword ? "text" : "password"}
              id="checkpassword"
              name="checkpassword"
              placeholder="비밀번호 확인"
              value={formState.checkpassword}
              onChange={updateValue}
              required
            />

            <button
              type="button"
              onClick={toggleCheckPasswordVisibility}
              className="join-password-toggle"
            >
              {showCheckPassword ? (
                <AiFillEyeInvisible color="black" />
              ) : (
                <AiFillEye color="black" />
              )}
            </button>
          </div>
        </div>
        {/* 로그인버튼 */}
        <button type="submit" className="login-btn">
          가입하기
        </button>
        {/* 회원가입 */}
        <div className="singup-link">
          <span>
            {" "}
            계정이 이미 있으신가요?<a href="">로그인하기</a>
          </span>
        </div>
      </form>
      {/* 회원가입페이지에서 우측 크게 보이는 로고 */}
      <div className="rightlogo-container">
        <img src={welcomeLogo} alt="welcome logo" />
      </div>
    </div>
  );
};

export default JoinPage;
