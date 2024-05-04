"use client";

import React, { useState } from "react";
import Image from "next/image";
import { alt } from "@/data/data";
import { button } from "@/data/data";
import Style from "./MobileNav.module.css";
import Logo from "../../../public/assets/logo/logoMobile.svg";
import HambiOpen from "../../../public/assets/hambi/hambi.svg";
import HambiClose from "../../../public/assets/hambi/close.svg";

import { Exo_2 } from "next/font/google";
const exo = Exo_2({ subsets: ["latin"] });

const Nav = () => {
  const [hamiOpen, setHambiOpen] = useState(true);
  const  hambiLogic = hamiOpen ? HambiOpen : HambiClose;

  const habiHandeler = () => {
    setHambiOpen((prevState) => !prevState);
  };

  return (
    <section className={`${Style.section} ${!hamiOpen && Style.vh100}`}>
      <div className={Style.container}>
        <div className={Style.row}>
          <div className={Style.logoContainer}>
            <Image priority src={Logo} alt={alt} />
          </div>
          <div className={Style.itemContainer}>
            <button className={Style.button}>{button}</button>
            <div
              className={`${Style.hambiPhotoContainer} ${!hamiOpen && Style.hambiCloseBg}`}
            >
              <Image
                onClick={habiHandeler}
                className={Style.hambiOpen}
                priority
                src={hambiLogic}
                alt={alt}
              />
            </div>
          </div>
        </div>
      </div>
     { !hamiOpen ? <div className={`${Style.mobileMenu} ${exo.className}`}>
        
        <div className={Style.navContainer}>
          <a href="#">Szolgáltatásaink</a>
          <a href="#">Rólunk</a>
        </div>

      <div className={Style.footerContainer}>
          <div>
            <p>Tender Control Kft.</p>
            <p>2024</p>
          </div>
          <div>
            <p>Designed and developed by </p>
            <a href="https://www.studiobromo.hu/">StudioBromo</a>
          </div>
      </div>
      </div>  : ''}
    </section>
  );
};

export default Nav;
