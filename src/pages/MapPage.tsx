import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "../hooks/useKakaoLoader";
import { useAuth } from "../hooks/useAuth";
import { useMap } from "../hooks/useMap";
import "../styles/scss/Map.scss";

export default function MapPage() {
  useKakaoLoader();
  const { token, user } = useAuth();
  const {
    position,
    clickedPosition,
    markers,
    handleClick,
    handleAddMarker,
    deleteAllMarkers,
  } = useMap(token || "", user);

  return (
    <div className="map-container">
      <Map
        id="map"
        center={position}
        style={{
          width: "600px",
          height: "600px",
        }}
        level={2}
        onClick={handleClick}
      >
        {markers.map((marker, index) => (
          <MapMarker
            key={index}
            position={marker.position}
            title={marker.title}
          >
            <div style={{ padding: "5px" }}>{marker.title}</div>
          </MapMarker>
        ))}
        {clickedPosition && (
          <MapMarker position={clickedPosition}>
            <div style={{ padding: "5px" }}>선택한 위치</div>
          </MapMarker>
        )}
      </Map>
      <div className="map-button-container">
        <button className="add-marker-button" onClick={handleAddMarker}>
          장소 추가하기
        </button>
        <button
          className={`delete-marker-button ${markers.length === 0 ? "disabled" : ""}`}
          onClick={deleteAllMarkers}
          disabled={markers.length === 0}
        >
          모든 마커 삭제
        </button>
      </div>
    </div>
  );
}