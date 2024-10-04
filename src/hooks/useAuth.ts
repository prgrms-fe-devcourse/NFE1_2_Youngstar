import { useState } from "react";
import axios from "axios";
import { User, AuthResponse } from "../types/AuthTypes";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const baseurl = "https://kdt.frontend.5th.programmers.co.kr:5010";

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );
  const [user, setUser] = useState<User | null>(null);
  const { state } = useLocation();
  const navigate = useNavigate();
  const redirectUrl = state || '/';

  // 로그인
  const login = async (email: string, password: string) => {
    try {
      const response = await axios.post<AuthResponse>(`${baseurl}/login`, {
        email,
        password,
      });

      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log("토큰:", response.data.token);

      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      console.log("로그인 성공", response.data);

      navigate(redirectUrl);
      
    } catch (e) {
      console.error("로그인 실패", e);
    }
  };

  // 회원가입
  const signup = async (email: string, fullName: string, password: string) => {
    try {
      const response = await axios.post<AuthResponse>(`${baseurl}/signup`, {
        email,
        fullName,
        password,
      });
      setToken(response.data.token);
      setUser(response.data.user);

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      console.log("회원가입 성공", response.data);
    } catch (e) {
      console.log("회원가입 실패", e);
    }
  };

  // 로그아웃
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("로그아웃 성공");
  };

  // 인증
  const authUser = async () => {
    try {
      if (!token) {
        throw new Error("로그인이 필요합니다.");
      }

      const response = await axios.get<User>(`${baseurl}/auth-user`, {
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      });
      setUser(response.data);
      console.log("인증 성공", response.data);
      return response.data;
    } catch (e) {
      console.log("인증 실패", e);
      return null;
    }
  };

  return { login, logout, signup, authUser, token, user };
};
