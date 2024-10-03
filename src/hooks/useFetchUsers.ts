import { useState, useEffect } from 'react';
import axios from 'axios';
// import post from '../types/Post';
// import Userpage from'../types/Userpage'
import  Search  from '../types/Search'


export default function useFetchUsers() {
  const [data, setData] = useState  <Search[]| null>(null);

  // const url = "https://kdt.frontend.5th.programmers.co.kr:5001/posts/65a7e3d3ddb5911c0c0f9dfb"
  // const url = "https://kdt.frontend.5th.programmers.co.kr:5001/users/65af52230f190d3bd8fe81df"
  const url ="https://kdt.frontend.5th.programmers.co.kr:5006/search/all/근육몬최익"

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
