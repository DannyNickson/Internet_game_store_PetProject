import React from "react";
import classes from "./CustomNav.module.css";
const CustomNav = ({
  children,
  title = "MenuButton",
  titleLink = "",
  variant = "catalog__submenu__blue",
}) => {
  return (
    <div className={classes[variant]}>
      {titleLink ? <a href={titleLink}>{title}</a> : <span>{title}</span>}
      {children}
    </div>
  );
};

export default CustomNav;
