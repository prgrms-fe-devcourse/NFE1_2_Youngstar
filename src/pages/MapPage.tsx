import { useEffect, useRef } from "react";
import "../styles/scss/Map.scss";

declare global {
  interface Window {
    kakao: any;
  }
}

function MapPage() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { kakao } = window;
    const container = mapRef.current;

    if (container) {
      // container가 존재할 때만 지도 생성
      const mapOptions = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      const map = new kakao.maps.Map(container, mapOptions);
      const markerPosition = new kakao.maps.LatLng(33.45074, 126.570667);

      const iwContent =
        '<div style="padding:15px; margin-bottom:15px;">이곳은 포스팅 썸네일이미지와 사용자 아이디가 들어가려나</div>';
      const iwPosition = new kakao.maps.LatLng(33.450701, 126.570667);
      const marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      const infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      infowindow.open(map, marker);
      marker.setMap(map);
    }
  }, []);

  return (
    <div className="map-container">
      <div className="map" ref={mapRef} style={{ width: "500px", height: "500px" }}></div>
      <button className="fix-button">수정하기</button>
    </div>
  );
}

export default MapPage;
