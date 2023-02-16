import React from "react";
import { useEffect, useState } from "react";

function fetchScript(url) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");

    script.type = "text/javascript";
    script.onload = resolve;
    script.onerror = reject;
    script.src = url;
    script.async = true;

    document.head.appendChild(script);
  });
}

function YandexMaps({ pointValue }) {
  const [yandexMap, setYandexMap] = useState(null);

  useEffect(() => {
    if (!yandexMap) {
      return;
    }
    window["ymaps"].geocode(pointValue).then((res) => {
      var firstGeoObject = res.geoObjects.get(0);
      // Координаты геообъекта.
      const coords = firstGeoObject.geometry.getCoordinates();
      console.log(coords);
      var placemark = new window["ymaps"].Placemark(
        //[55.75, 37.61]
        coords,
        {
          balloonContent:
            '<img src="http://img-fotki.yandex.ru/get/6114/82599242.2d6/0_88b97_ec425cf5_M" />',
          iconContent: pointValue,
        },
        {
          preset: "islands#yellowStretchyIcon",
          // Отключаем кнопку закрытия балуна.
          balloonCloseButton: false,
          // Балун будем открывать и закрывать кликом по иконке метки.
          hideIconOnBalloonOpen: false,
        }
      );
      yandexMap.geoObjects.add(placemark);
    });
  }, [yandexMap, pointValue]);

  useEffect(() => {
    console.log(window["ymaps"]);
    if (window["ymaps"]) {
      return;
    }

    fetchScript(
      "https://api-maps.yandex.ru/2.1.78/?apikey=41755867-17bd-44e2-afee-a8c99c1be478&lang=ru_RU"
    ).then(() => {
      window["ymaps"].ready(() => {
        console.log(window["ymaps"]);
        setYandexMap(
          new window["ymaps"].Map("map", {
            // Координаты центра карты.
            // Порядок по умолчанию: «широта, долгота».
            // Чтобы не определять координаты центра карты вручную,
            // воспользуйтесь инструментом Определение координат.
            center: [55.76, 37.64],
            // Уровень масштабирования. Допустимые значения:
            // от 0 (весь мир) до 19.
            zoom: 7,
          })
        );
      });
    });
  }, []);

  return (
    <section className="mapSection">
      <div id="map" style={{ width: "100vw", height: "100vh" }}></div>
    </section>
  );
}

export default YandexMaps;
