import React from "react";
import { useState } from "react";
import classes from "./CustomSlider.module.css";
import Slide from "./Slide";
import SliderArrow from "./SliderArrow";
import SliderDots from "./SliderDots";
const CustomSlider = ({
  gameList=[1,1,1],
  title = "slider",
  variant = "top__slider",
  buttonTitle = "",
  buttonLink = "",
  numberOfSlides = 1,
}) => {
  const [active,setActive] = useState(1)
  function changeActive(direction) {
    if (direction == "right") {
      if (active == numberOfSlides) {
        setActive(1);
      } else {
        setActive((prev) => {
          return prev + 1;
        });
      }
    } else if (direction == "left") {
      if (active == 1) {
        setActive(numberOfSlides);
      } else {
        setActive((prev) => {
          return prev - 1;
        });
      }
    }
  }
  return (
    <div className={classes.top__slider}>
      <div className={classes.slider__title}>{title}</div>
      {buttonTitle && (
        <div className={classes.browse__more__button}>
          <a href={buttonLink}>Browse More</a>
        </div>
      )}
      <div className={classes.slider__main__block}>
        {gameList &&
          gameList.map((number, index) => {
            return (
              <Slide
                gameId={number}
                key={number + index}
                active={index + 1 == active}
              />
            );
          })}
      </div>
      <SliderArrow changeActive={changeActive} direction="left" />
      <SliderArrow changeActive={changeActive} direction="right" />
      <SliderDots
        numberOfSlides={numberOfSlides}
        changeActive={setActive}
        activeSlide={active}
      />
    </div>
  );
};

export default CustomSlider;
