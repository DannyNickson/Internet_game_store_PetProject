import React from 'react';
import BackgroundBlock from '../components/BackgroundBlock';
import TopMenu from '../components/catalogPageComponents/TopMenu/TopMenu';
import GameSearchList from '../components/GameSearchList/GameSearchList';
import '../styles/pagesStyles/CatalogPageStyle.css'
const CatalogSearch = () => {
    return (
        <BackgroundBlock>
          <TopMenu/>
          <GameSearchList/>  
        </BackgroundBlock>
    );
};

export default CatalogSearch;