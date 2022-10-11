import React from "react";
import classes from "./CustomSlider.module.css";
const SliderDots = ({ numberOfSlides, activeSlide, changeActive }) => {
  let slides = [];
  if (numberOfSlides != 0) {
    for (let i = 1; i < numberOfSlides+1; i++) {
      if (activeSlide == i) {
        slides.push(2);
      } else {
        slides.push(1);
      }
    }
  }

  return (
    <div className={classes.slider__dots}>
      {slides.map((element, index) => {
        if (element == 1) {
          return <div onClick={()=>{changeActive(index+1)}} key={index}></div>;
        } else {
          return <span key={index}></span>;
        }
      })}
    </div>
  );
};

export default SliderDots;
