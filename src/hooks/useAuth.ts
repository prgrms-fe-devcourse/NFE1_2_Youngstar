import { useEffect, useState } from "react";
import axios from "axios";
import { User, AuthResponse } from "../types/AuthTypes"; 
import { response } from "express";

const baseurl = 'https://kdt.frontend.5th.programmers.co.kr:5006';

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const api = axios.create({
    baseURL: baseurl,
  });

  // 1002 추가 - localStorage에 토큰 저장
  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  // 로그인
  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<AuthResponse>("/login", {
        email,
        password,
      });
      setToken(response.data.token);
      setUser(response.data.user);

      // 1002 추가 - localStorage에 토큰 저장
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      console.log("로그인 성공", response.data);
      console.log(localStorage.length)
    } catch (e) {
      console.log("실패 cbcb", e);
    }
  };

  // 회원가입
  const signup = async (email: string, fullName: string, password: string) => {
    try {
      const response = await api.post<AuthResponse>("/signup", {
        email,
        fullName,
        password,
      });
      setToken(response.data.token);
      setUser(response.data.user);

      // 1002 추가 - localStorage에 토큰 저장
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));

      console.log("회원가입 성공", response.data);
      
    } catch (e) {
      console.log("실패ㅡㅡ", e);
    }
  };

  // 1002 추가 - 로그아웃
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    console.log("로그아웃 성공");
    console.log(localStorage.length)
  };

  return { login, logout, signup, token, user };
};
