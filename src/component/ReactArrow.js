import React, { Component } from "react";
import Slider from "react-slick";

function ReactArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black", position:"absolute", bottom:0, }}
        onClick={onClick}
      />
    );
  }
  export default ReactArrow;