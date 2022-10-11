import React from "react";
import classes from "./CustomSlider.module.css";
import SliderArrow from "./SliderArrow";
import SliderDots from "./SliderDots";
const CustomSlider = ({
  children,
  setActiveCallback,
  title = "slider",
  variant = "top__slider",
  buttonTitle = "",
  buttonLink = "",
  numberOfSlides = 1,
  activeSlide = 1
}) => {
  function changeActive(direction)
  {
    if(direction == "right")
    {
      if(activeSlide == numberOfSlides)
      {
        setActiveCallback(1);
      }
      else{
        setActiveCallback((prev)=>{return prev+1})
      }
    }
    else if(direction == "left")
    {
      if(activeSlide == 1)
      {
        setActiveCallback(numberOfSlides);
      }
      else{
        setActiveCallback((prev)=>{return prev-1})
      }
    } 
  }
  return (
    <div className={classes[variant]}>
      <div className={classes.slider__title}>{title}</div>
      {buttonTitle && (
        <div className={classes.browse__more__button}>
          <a href={buttonLink}>Browse More</a>
        </div>
      )}
      <div className={classes.slider__main__block}>{children}</div>
      <SliderArrow changeActive={changeActive} direction="left" />
      <SliderArrow changeActive={changeActive} direction="right" />
      <SliderDots numberOfSlides={numberOfSlides} changeActive={setActiveCallback} activeSlide={activeSlide} />
    </div>
  );
};

export default CustomSlider;
