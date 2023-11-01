import React, { useState } from "react";
import H from "./Header.module.css";
import Nav from "./nav/index";

const Header = () => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isNavFixed, setIsNavFixed] = useState(false);

  return (
    <div className={H.container}>
      <div
        id="header"
        className={`${H.box} ${H.header} ${isHeaderVisible ? "" : H.scrolled
          } ${isNavFixed ? H.fixed : ""}`}
      >
        <a href="https://www.instagram.com/oblako53_bishkek/?hl=ru" target="_blank" rel="noreferrer">
          <img className={H.logo_img} src="https://i.1.creatium.io/35/fe/01/7200eaf8da4697c0142667237cc1bba5bc/1142x169q8/oblako_53_wordmark_white.png" alt="O53" />
        </a>
        <h2 className={`font_medium ${H.title}`}>ДОБРО ПОЖАЛОВАТЬ!</h2>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
