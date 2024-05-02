"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { alt } from "@/data/data";
import { nav } from "@/data/data";
import { button } from "@/data/data";
import Style from "./MobileNav.module.css";

import Logo from "../../../public/assets/logo/logoMobile.svg";

import HambiOpen from "../../../public/assets/hambi/hambi.svg";
import HambiClose from "../../../public/assets/hambi/close.svg";

const Nav = () => {
  const [hamiOpen, setHambiOpen] = useState(true);
  const hambiLogic = hamiOpen ? HambiOpen : HambiClose;

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
            <div className={`${Style.hambiPhotoContainer} ${!hamiOpen && Style.hambiCloseBg}`}>
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
      <div className={`${!hamiOpen && Style.mobileMenu} ${!hamiOpen && Style.vh100}`}>

      </div>
    </section>
  );
};

export default Nav;
