import React from "react";
import { useMapData } from "../hooks/useMapData";

const Container = () => {
  // step 1: load geoJSON and create tooltip
  const { mapData } = useMapData();
  console.log(mapData);

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    return (
        <div className="container">
        <svg></svg>
        </div>
    );
  }else{
    <div className="container">Loading</div>
  }
};

export default Container;
