import React from "react";

import image1 from "./images/closeup-shot-of-a-disabled-white-cat-on-white.jpg";
import image2 from "./images/one.svg";
import ra from "./images/rosatomLogo.svg";

import "./styles.css";

const App = (): JSX.Element => {
  return (
    <>
      <div>Init webpack-manual-setup project</div>
      <img height="300px" width="fitContent" src={image1} alt="" />
      <img height="200px" width="fitContent" src={image2} alt="" />
      <img height="100px" width="fitContent" src={ra} alt="" />
    </>
  );
};

export { App };
