import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { Position, MarkerData } from "../types/Map";

const DEFAULT_POSITION: Position = { lat: 37.54724538153527, lng: 127.03942810586953 }; // 초기 위치 선정 
const FOR_USEMAP_API_URL = import.meta.env.VITE_FOR_USEMAP_URL;
const REST_API_KEY = import.meta.env.VITE_KAKAO_REST_KEY;

export const useMap = (token: string | null, user: any) => {
  const [position, setPosition] = useState<Position>(DEFAULT_POSITION);
  const [clickedPosition, setClickedPosition] = useState<Position | null>(null);
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  // 로컬에서 마커 데이터 갖고 옴
  useEffect(() => {
    const storedMarkers = localStorage.getItem("markers");
    if (storedMarkers) {
      setMarkers(JSON.parse(storedMarkers));
    }
  }, []);

  // 카카오 RESTAPI 사용 -> 위치정보
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios({
          method: "get",
          url: `${import.meta.env.VITE_KAKAO_API_URL}?x=${position.lng}&y=${position.lat}`,
          headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
        });
      } catch (e) {
        console.error("에러 : ", e);
      }
    };

    fetchData(); 

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( //현재 위치로 뜹니다!
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setPosition({ lat: latitude, lng: longitude });
        },
        (e) => { //에러 발생하면 지정한 기본 위치로 뜹니당
          console.error("에러 발생 : ", e);
          setPosition(DEFAULT_POSITION);
        }
      );
    }
  }, []);

  const handleClick = useCallback(
    (_: any, mouseEvent: kakao.maps.event.MouseEvent) => {
      const clickedPos = {
        lat: mouseEvent.latLng.getLat(),
        lng: mouseEvent.latLng.getLng(),
      };
      setClickedPosition(clickedPos);
      setPosition(clickedPos);
    },
    []
  );

  // 장소 추가하기 클릭했을 때 동작
  const handleAddMarker = async () => {
    if (!clickedPosition) {
      console.log("위치를 먼저 선택해주세요!");
      return;
    }

    if (!token) {
      console.log("토큰이 필요합니다.");
      return;
    }

    try {
      const formData = new FormData();
      const jsonData = {
        title: `${user?.fullName}의 맛집🍴`,
        x: clickedPosition.lat.toString(),
        y: clickedPosition.lng.toString(),
      };
      formData.append("title", JSON.stringify(jsonData));

      const response = await axios.post(FOR_USEMAP_API_URL, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("마커 데이터 전송 성공:", jsonData);
      console.log("서버 응답 데이터:", response.data);

      // 새 마커 로컬에 저장
      const newMarker: MarkerData = {
        title: jsonData.title,
        position: clickedPosition,
      };

      setMarkers((prevMarkers) => {
        const updatedMarkers = [...prevMarkers, newMarker];
        localStorage.setItem("markers", JSON.stringify(updatedMarkers));
        return updatedMarkers;
      });

      // 서버 response으로 데이터가 있다면?
      if (response.data && response.data.title) {
        const parsedTitle = JSON.parse(response.data.title);
        console.log("파싱한 데이터:", parsedTitle);
      }
    } catch (e) {
      console.error("마커 데이터 전송 실패:", e);
    }
  };

  const deleteAllMarkers = () => {
    const savedMarkers = JSON.parse(localStorage.getItem("markers") || "[]");
    const updatedMarkers = savedMarkers.filter((marker: any) => marker.title !== `${user?.fullName}의 맛집🍴`);
  
    updatedMarkers.forEach((marker: any) => {
      const mapMarker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(marker.lat, marker.lng),
      });
      mapMarker.setMap(null); // 마커 제거
    });
  
    // 마커들 업데이트
    localStorage.setItem("markers", JSON.stringify(updatedMarkers));
    setMarkers(updatedMarkers);
  };

  return { position, clickedPosition, setClickedPosition, markers, handleClick, handleAddMarker, deleteAllMarkers };
};
