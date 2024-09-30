import React from 'react';
import { useAuth } from '../hooks/useAuth';

const APITest: React.FC = () => {
  const { login, signup, user } = useAuth();

  const testLogin = () => {
    // 실제 admin 계정 정보로 로그인 시도
    login('admin@programmers.co.kr', 'programmers');
  };

  return (
    <div>
      <h1>TestHook</h1>
      <button onClick={testLogin}>테스트 로그인</button>
      {user && <p>사용자: {user.email}</p>}  
    </div>
  );
};

export default APITest;
