import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../types/Post';

export default function useFetchPost() {
  const [data, setData] = useState<Post | null>(null);

  const url = 'https://kdt.frontend.5th.programmers.co.kr:5010/posts/66b4cc15b220810bf8689085';

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
