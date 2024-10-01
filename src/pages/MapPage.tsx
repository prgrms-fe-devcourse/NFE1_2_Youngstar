import { useEffect, useRef } from "react";
import '../styles/scss/Map.scss';

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
      const options = {
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      new kakao.maps.Map(container, options);
    }
  }, []);

  return (
    <div className="map-container">
      <div ref={mapRef} style={{ width: "500px", height: "500px" }}></div>
    </div>
  );
}

export default MapPage;
