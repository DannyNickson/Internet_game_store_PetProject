import React from "react";
import "../styles/pagesStyles/CatalogPageStyle.css";
import TopMenu from "../components/catalogPageComponents/TopMenu/TopMenu";
import BackgroundBlock from './../components/BackgroundBlock';
import SideMenu from '../components/catalogPageComponents/SideMenu/SideMenu';
import RecomendedSlider from './../components/catalogPageComponents/RecomendedSlider';
import SpecialOfferSlider from './../components/catalogPageComponents/SpecialOfferSlider';
import CategorySlider from './../components/catalogPageComponents/CategorySlider';


const CatalogPage = () => {
  return (
    <div className="catalog__page__main">
      <BackgroundBlock>
        <TopMenu/>
        <div className="slider__blocks">
          <SideMenu/>
          <div className="sliders">
            <RecomendedSlider/>
            <SpecialOfferSlider/>
            <CategorySlider/>
          </div>
        </div>
      </BackgroundBlock>
    </div>
  );
};

export default CatalogPage;
