import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/scss/Join.scss";
import PasswordToggle from "../components/PasswordToggle";
import FormLayout from "../components/FormLayout";
import Input from "../components/Input";
import { useAuth } from "../hooks/useAuth";
import { AuthTypes } from "../types/AuthTypes";

const JoinPage: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formState, setFormState] = useState<AuthTypes>({
    email: "",
    id: "",
    password: "",
    checkpassword: "",
  });

  const updateValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.password !== formState.checkpassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else if (formState.id.length < 6 || formState.id.length > 12) { // 1001 추가 - 아이디는 6자 이상 12자 이하
      alert("아이디는 6자 이상 12자 이하로 입력해주세요!!");
      return;
    } else if (formState.password.length < 8 || formState.password.length > 20) { // 1001 추가 - 비밀번호는 8자 이상 20자 이하
      alert("비밀번호는 8자 이상 20자 이하로 입력해주세요!!");
      return;
    }

    //1002 추가 - 회원가입 성공 여부에 따라서 동작
    try { 
      await signup(formState.email, formState.id, formState.password);
      console.log("제출 :", formState);
      navigate("/"); // 회원가입 성공하면 메인으로 이동
    } catch (error) {
      console.error("회원가입 실패", error);
    }
  };

  return (
    <FormLayout
      title="회원가입"
      description="친구들의 사진과 동영상을 보려면 가입하세요."
      onSubmit={handleSubmit}
    >
      <Input
        type="text"
        id="email"
        name="email"
        placeholder="이메일을 입력하세요"
        value={formState.email}
        onChange={updateValue}
        required
      />
      <Input
        type="text"
        id="id"
        name="id"
        placeholder="아이디를 입력하세요"
        value={formState.id}
        onChange={updateValue}
        required
      />
      <PasswordToggle
        password={formState.password}
        name="password"
        placeholder="비밀번호를 입력하세요"
        onChange={updateValue}
      />
      <PasswordToggle
        password={formState.checkpassword}
        name="checkpassword"
        placeholder="비밀번호 확인"
        onChange={updateValue}
      />
      <button type="submit" className="login-btn">
        가입하기
      </button>
    </FormLayout>
  );
};

export default JoinPage;
