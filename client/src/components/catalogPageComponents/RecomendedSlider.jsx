import React, {useState} from "react";
import Slide from "../UI/CustomSlider/Slide";
import CustomSlider from "./../UI/CustomSlider/CustomSlider";


const RecomendedSlider = ({gameList = [1,1,1]}) => {
  let [active, setActive] = useState(1);
  return (
      <CustomSlider title="Featured & Recommended" activeSlide={active} numberOfSlides={gameList.length} setActiveCallback={setActive}>
        {gameList && gameList.map((number,index)=>{
          return (<Slide gameId={number} key={number+index} active={index+1 == active}/>)
        })}
      </CustomSlider>
  );
};

export default RecomendedSlider;
