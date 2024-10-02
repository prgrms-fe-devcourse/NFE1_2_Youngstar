import { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../types/User';

export default function useFetchUsers() {

  const [data, setData] = useState<User | null>(null);


  const url = 'https://kdt.frontend.5th.programmers.co.kr:5010/users/66fa3fe9b220810bf869cea5'
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        console.error('요청 실패:', err);
      }
    };
    fetchData();
  }, []);

  return { data };
}
