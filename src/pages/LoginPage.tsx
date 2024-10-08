import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/scss/Login.scss";
import { useAuth } from "../hooks/useAuth";
import Input from "../components/Input";
import PasswordToggle from "../components/PasswordToggle";
import FormLayout from "../components/FormLayout";

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(); // 1002 추가

  // 업데이트 값
  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("폼 제출 완료:", formState);
    try {
      await login(formState.email, formState.password);
      // navigate("/"); // 로그인 성공 시 메인 페이지로 이동
    } catch(e) {
      console.log("로그인 에러:", e)
    }
  };

  return (
    <div className="login-container">
      <FormLayout
        title="로그인 하세요"
        description="6팀 프로젝트"
        onSubmit={handleSubmit}
      >
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="이메일을 입력하세요"
          value={formState.email}
          onChange={updateValue}
          required
        />

        <PasswordToggle
          password={formState.password}
          name="password"
          placeholder="비밀번호를 입력하세요"
          onChange={updateValue}
        />

        <button type="submit" className="login-btn">
          로그인
        </button>

        <div className="signup-link">
          <span>
            계정이 없으신가요? <Link to="/joinPage">가입하기</Link>
          </span>
        </div>
      </FormLayout>
    </div>
  );
};

export default LoginPage;
