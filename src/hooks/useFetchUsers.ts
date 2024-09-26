import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetchUsers() {
  const [data, setData] = useState(null);

  const url = 'https://kdt.frontend.5th.programmers.co.kr:5010/users/get-users';

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
