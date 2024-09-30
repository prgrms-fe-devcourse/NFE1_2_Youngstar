import React, { useState } from "react";
import "../styles/css/login.css";
import bigLogo from "../assets/bigLogo.png";
import Group from "../assets/Group.png";
import Group1 from "../assets/Group1.png";

const LoginPage: React.FC = () => {
  const [formState, setFormState] = useState({
    id: "",
    password: "",
  });
  //비밀번호 표시 여부
  const [showPassword, setShowPassword] = useState(false);

  //업데이트값
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value, //입력한값 id,password :사용자 입력값
    });
  };
  const togglepasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  //로그인 버튼을 누르면 콘솔창에 현재값 출력
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // 제출시 새로고침 막기
    console.log("Form Submitted:", formState); //콘솔에 id,password값이 출력됨
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>환영합니다!</h2>
        <h1>로그인 하세요</h1>
        <p>6팀 프로젝트</p>
        {/* 아이디 입력 */}
        <div className="form-group">
          <label htmlFor="id">아이디</label>
          <input
            type="text"
            id="id"
            name="id"
            placeholder="아이디를 입력하세요 "
            value={formState.id}
            onChange={updateValue}
            required
          />
        </div>
        {/* 비밀번호 입력 */}
        <div className="form-group">
          <label htmlFor="password">비밀번호</label>
          <div className="password-container">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요"
              value={formState.password}
              onChange={updateValue}
              required
            />

            {/* 눈모양 아이콘 추가하여 클릭하면 비밀번호여부 */}
            <button
              type="button"
              className="password-toggle"
              onClick={togglepasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
        </div>
        {/* 로그인버튼 */}
        <button type="submit" className="login-btn">
          로그인
        </button>
        {/* 회원가입 */}
        <div className="singup-link">
          <span>
            {" "}
            계정이 없으신가요? <a href="">가입하기</a>
          </span>
        </div>
      </form>
      <img src={Group}></img>
      <img src={bigLogo} />
      <img src={Group1}></img>
    </div>
  );
};

export default LoginPage;
