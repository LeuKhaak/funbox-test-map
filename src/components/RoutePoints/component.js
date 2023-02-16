import React from "react";
import "./styles.css";

function RoutePoints({ makePoint, createNewPoint }) {
  return (
    <section className="routePoints">
      <div className="container">
        <div className="pointsInputWrapper">
          <input
            className="pointsInput"
            type="text"
            name="newPoint"
            placeholder="Новая точка маршрута"
            onChange={makePoint}
            onKeyDown={createNewPoint}
          />
        </div>
      </div>
    </section>
  );
}

export default RoutePoints;
