/*global kakao */
import React, { useEffect } from "react";
import { markerdata } from "./MarkerData";

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(35.8708, 128.5933243),
      // 지도 확대 축소 막기
      draggable: false,
      level: 5,
    };

    //map
    const map = new kakao.maps.Map(container, options);

    markerdata.forEach((el) => {
      // 마커를 생성합니다
      new kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
  };

  return <div id="map" style={{ width: "100%", height: "100vh" }}></div>;
}
