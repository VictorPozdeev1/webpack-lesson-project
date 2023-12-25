import React from "react";

import image1 from "img/closeup-shot-of-a-disabled-white-cat-on-white.jpg";
import image2 from "img/one.svg";
import ra from "src2/images/rosatomLogo.svg";

import "./styles.css";

const App = (): JSX.Element => {
  return (
    <>
      <div>Init webpack-manual-setup project</div>
      <p>Mode = {process.env.NODE_ENV}</p>
      <img height="300px" width="fitContent" src={image1} alt="" />
      <img height="200px" width="fitContent" src={image2} alt="" />
      <img height="100px" width="fitContent" src={ra} alt="" />
      <img src="/butterfly.png" alt="" />
    </>
  );
};

export { App };
