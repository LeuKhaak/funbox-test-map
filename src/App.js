import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import RoutePoints from "./components/RoutePoints";
import YandexMap from "./components/YandexMap/YandexMap";

function App() {
  const [pointValue, setPointValue] = useState("");

  const createPoint = (arg) => {
    setPointValue(arg);
    console.log("AppPoint", pointValue);
  };

  return (
    <>
      <YandexMap pointValue={pointValue} />
      <React.StrictMode>
        <RoutePoints createPoint={createPoint} />
      </React.StrictMode>
    </>
  );
}

export default App;
