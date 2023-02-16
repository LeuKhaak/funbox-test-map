import React from "react";
import { useEffect, useState } from "react";
import RoutePoints from "./component";

function RoutePointsContainer({ createPoint }) {
  const [pointValue, setPointValue] = useState("");

  const createNewPoint = (e) => {
    if (e.key === "Enter") createPoint(pointValue);
  };

  const makePoint = (e) => {
    setPointValue(e.target.value);
  };

  return <RoutePoints makePoint={makePoint} createNewPoint={createNewPoint} />;
}

export const container = RoutePointsContainer;
