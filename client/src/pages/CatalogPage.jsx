import React from "react";
import "../styles/pagesStyles/CatalogPageStyle.css";
import TopMenu from "../components/catalogPageComponents/TopMenu/TopMenu";
import BackgroundBlock from './../components/BackgroundBlock';
import SideMenu from '../components/catalogPageComponents/SideMenu/SideMenu';
import CustomSlider from "../components/UI/CustomSlider/CustomSlider";
import GameListCatalog from "../components/catalogPageComponents/GameListCatalog/GameListCatalog";


const CatalogPage = () => {
  const $FixThis = [1,1,1]
  return (
    <div className="catalog__page__main">
      <BackgroundBlock>
        
        <div className="slider__blocks">
          <SideMenu/>
          <div className="sliders">
            <TopMenu/>
            <CustomSlider title="Featured & Recommended" numberOfSlides={$FixThis.length}/>
            <GameListCatalog/>
          </div>
        </div>
      </BackgroundBlock>
    </div>
  );
};

export default CatalogPage;
