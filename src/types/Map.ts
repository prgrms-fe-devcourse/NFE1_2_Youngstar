export interface Position {
  lat: number;
  lng: number;
}

export interface MarkerData {
  title: string;
  position: Position;
}

export type MapClickHandler = (event: any, mouseEvent: kakao.maps.event.MouseEvent) => void;


  
// export interface KakaoMap extends kakao.maps.Map {}

// export interface KakaoMouseEvent extends kakao.maps.event.MouseEvent {}

// export type MapClickHandler = (map: KakaoMap, mouseEvent: KakaoMouseEvent) => void;