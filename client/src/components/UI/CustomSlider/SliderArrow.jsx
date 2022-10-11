import React from "react";
import classes from "./CustomSlider.module.css";
const SliderArrow = ({ direction = "right", changeActive }) => {
  return (
    <div onClick={()=>{changeActive(direction)}} className={classes["arrow__" + direction]}>
      <div></div>
    </div>
  );
};

export default SliderArrow;
