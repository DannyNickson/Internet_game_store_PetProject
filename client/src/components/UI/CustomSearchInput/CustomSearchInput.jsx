import React from 'react';
import classes from './CustomSearchInput.module.css'
import search_icon from "../../../img/search_icon.png"
const CustomSearchInput = ({placeholder = "search"}) => {
    return (
        <div className={classes.search__block}>
            <input type="text" placeholder={placeholder} />
            <a href="/">
              <img src={search_icon} alt="search" />
            </a>
          </div>
    );
};

export default CustomSearchInput;