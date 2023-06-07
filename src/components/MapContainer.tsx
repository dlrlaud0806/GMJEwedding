import React, { useEffect } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const MapContainer = () => {
  useEffect(() => {
    let container = document.getElementById('map');
    let markerPosition = new window.kakao.maps.LatLng(37.49138, 127.007197);

    let options = {
      center: markerPosition,
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);

    let marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    marker.setMap(map);
  }, []);

  return <div id="map" style={{ width: '100vw', height: '100vh' }} />;
};

export default MapContainer;
