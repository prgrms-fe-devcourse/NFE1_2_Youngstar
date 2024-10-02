import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../types/Post';

export default function useFetchPost() {
  const [data, setData] = useState<Post | null>(null);

  const url = 'https://kdt.frontend.5th.programmers.co.kr:5010/posts/6652e8c536b89e0a8912d72f';

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
