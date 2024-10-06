import { useKakaoLoader as useKakaoLoaderOrigin } from 'react-kakao-maps-sdk';

const useKakaoLoader = () => {
  const [loading, error] = useKakaoLoaderOrigin({
    appkey: import.meta.env.VITE_KAKAO_JS_KEY as string,
    libraries: ['clusterer', 'drawing', 'services'], 
  });

  return [loading, error];
};

export default useKakaoLoader;