/*global kakao */
// const { kakao } = window;
import React, { useEffect } from "react";

const Location = () => {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(35.8708, 128.5933243),
      // 지도 확대 축소 막기
      draggable: false,
      level: 3,
    };

    // mao
    const map = new kakao.maps.Map(container, options);
    const markerPosition = new kakao.maps.LatLng(35.8708, 128.5933243);
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      title: "동성로",
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "1000px", height: "800px" }}></div>
    </div>
  );
};

export default Location;
