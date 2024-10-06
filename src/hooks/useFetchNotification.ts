import { useState, useEffect } from 'react';
import axios from 'axios';
import Notification from '../types/Notification';

export default function useFetchNotification() {
  const [notifications, setNotifications] = useState<Notification[] | null>(null);

  const url = `${import.meta.env.VITE_API_URL}/notifications`;
  console.log(url);
  const token = localStorage.getItem('token'); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`, 
          },
        });
        setNotifications(response.data);
      } catch (err) {
        console.error('알림 목록 불러오기 실패:', err);
      }
    };

    if (token) { 
      fetchData();
    }
  }, [url, token]);

  return { notifications };
}
