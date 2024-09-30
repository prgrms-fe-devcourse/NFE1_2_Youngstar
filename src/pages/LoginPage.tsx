import React, { useState } from "react";
import "../styles/scss/Login.scss";
import welcomeLogo from "../assets/welcomeLogo.svg"; //1001 - 로그인&회원가입 우측 로고 파일 변경
import { useAuth } from '../hooks/useAuth';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  //비밀번호 표시 여부
  const [showPassword, setShowPassword] = useState(false);

  //업데이트값
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value, 
    });
  };
  const togglepasswordVisibility = () => {
    setShowPassword(!showPassword);
    console.log(setShowPassword)
  };

  // 1001 추가 - API 호출
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("폼 제출 완료:", formState); 
    await login(formState.email, formState.password); 
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>환영합니다!</h2>
        <h1>로그인 하세요</h1>
        <p>6팀 프로젝트</p>

        {/* 이메일 입력 */}
        <div className="form-group">
          <label htmlFor="email">이메일</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="이메일을 입력하세요"
            value={formState.email}
            onChange={updateValue}
            required
          />
        </div>

        {/* 비밀번호 입력 */}
        <div className="form-group">
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
              className="password-toggle"
              onClick={togglepasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>
        {/* 로그인 버튼 */}
        <button type="submit" className="login-btn">
          로그인
        </button>
        {/* 회원가입 */}
        <div className="signup-link">
          <span>
            계정이 없으신가요? <a href="">가입하기</a>
          </span>
        </div>
      </form>
      <div className="rightlogo-container">
        <img src={welcomeLogo} alt="welcome logo" />
      </div>
    </div>
  );
};

export default LoginPage;
