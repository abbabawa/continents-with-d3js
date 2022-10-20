import React from "react";
import {
    handleMouseOver,
    handleMouseOut,
    handleMouseMove,
  } from "../helpers/handleTooltip";

const Country = (props) => {
    const { path, tooltipData } = props;
  return (
    <path
      className="path"
      d={path}
      onMouseOver={() => {
        handleMouseOver(tooltipData);
      }}
      onMouseOut={handleMouseOut}
      onMouseMove={(event) => {
        handleMouseMove(event);
      }}
    />
  );
};

export default Country;
