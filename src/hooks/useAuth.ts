import { useState } from "react";
import axios from "axios";

const baseurl = 'https://kdt.frontend.5th.programmers.co.kr:5001';

interface User {
  email: string;
  fullName: string;
}

interface AuthResponse {
  user: User;
  token: string;
}

export const useAuth = () => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const api = axios.create({
    baseURL: baseurl,
  });

  const login = async (email: string, password: string) => {
    try {
      const response = await api.post<AuthResponse>("/login", {
        email,
        password,
      });
      setToken(response.data.token);
      setUser(response.data.user);
      console.log("로그인 성공", response.data);
    } catch (e) {
      console.log("실패 cbcb", e);
    }
  };

  const signup = async (email: string, fullName: string, password: string) => {
    try {
      const response = await api.post<AuthResponse>("/signup", {
        email,
        fullName,
        password,
      });
      setToken(response.data.token);
      setUser(response.data.user);
      console.log("회원가입 성공", response.data);
    } catch (e) {
      console.log("실패ㅡㅡ", e);
    }
  };
  return { login, signup, token, user };
};
