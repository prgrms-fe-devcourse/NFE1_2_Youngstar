import { useState, useEffect } from 'react';
import axios from 'axios';
import Post from '../types/Post';

export default function useFetchUserPost(id: string) {
  const [data, setData] = useState<Post[] | null>(null);

  const url = `https://kdt.frontend.5th.programmers.co.kr:5010/posts/author/${id}`;

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
