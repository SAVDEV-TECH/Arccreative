import React,{Component} from "react";
import Slider from "react-slick";

function LeftReactArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  export default LeftReactArrow;