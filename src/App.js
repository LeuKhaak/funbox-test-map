import React from "react";
import "./App.css";
import MapSection from "./components/MapSection";
import YandexMap from "./components/NewMap";

function App() {
  return (
    <>
      <YandexMap />
      <React.StrictMode>
        <MapSection />
      </React.StrictMode>
    </>
  );
}

export default App;
