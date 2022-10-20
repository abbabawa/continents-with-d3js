import React, { useState } from "react";
import { useMapData } from "../hooks/useMapData";
import * as d3 from "d3";
import Country from "./Country";
import { setMapProjection } from "../helpers/setMapProjection";

const Container = () => {
  const continents = [
    { name: "Africa", url: "./custom.geo.json" },
    { name: "Asia", url: "./custom.geo.json" },
    { name: "Europe", url: "./europe.json" },
    { name: "Oceania", url: "./custom.geo.json" },
    { name: "North America", url: "./custom.geo.json" },
    { name: "South America", url: "./custom.geo.json" },
    { name: "Others", url: "./custom.geo.json" },
  ];
  const [url, setUrl] = useState(continents[2].url);

  // step 1: load geoJSON and create tooltip
  const { mapData } = useMapData(url);

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const countries = mapData.data.features.map((data) => {
      const region_name = data.properties["name_en"];
      return (
        <Country
          key={data.properties.FID}
          path={path(data)}
          tooltipData={region_name}
        />
      );
    });
    return (
      <div className="container">
        <div>
          <header>
            <h1>Continents With React and D3.js</h1>
          </header>
          <select>
            <option value="">Select Continent</option>
          </select>
        </div>
        <div className="svgWrapper">
          <svg>
            <g>{countries}</g>
          </svg>
        </div>
      </div>
    );
  } else {
    <div className="container">Loading</div>;
  }
};

export default Container;
