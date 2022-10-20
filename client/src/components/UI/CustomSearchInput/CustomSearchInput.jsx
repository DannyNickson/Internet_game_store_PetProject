import React from 'react';
import classes from './CustomSearchInput.module.css'
import search_icon from "../../../img/search_icon.png"
import { CATALOG_SEARCH } from '../../../utils/consts';
const CustomSearchInput = ({placeholder = "search"}) => {
    return (
        <div className={classes.search__block}>
            <input type="text" placeholder={placeholder} />
            <a href={CATALOG_SEARCH}>
              <img src={search_icon} alt="search" />
            </a>
          </div>
    );
};

export default CustomSearchInput;