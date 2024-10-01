export interface AuthTypes {
    email: string;
    id: string;  // id는 회원가입 시에만 필요할 수 있음
    password: string;
    checkpassword: string;  // checkpassword는 회원가입 시에만 필요
  }

export interface User {
  email: string;
  fullName: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

  