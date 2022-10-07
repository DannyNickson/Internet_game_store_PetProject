import React from "react";

const BackgroundBlock = ({ children }) => {
  const stylesForBlock = {
    "border-top": "1px solid #171a21",
    "width": "100%",
    "background":"linear-gradient( to bottom,rgba(42, 71, 94, 0.7) 5%,rgba(42, 71, 94, 0) 70% )",
    "display": "flex",
    "flex-direction": "column",
  };
  return <div style={stylesForBlock}>{children}</div>;
};

export default BackgroundBlock;
