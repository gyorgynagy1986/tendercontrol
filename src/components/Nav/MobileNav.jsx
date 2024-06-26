"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { alt } from "@/data/data";
import { button } from "@/data/data";
import Style from "./MobileNav.module.css";
import Logo from "../../../public/assets/logo/logoMobile.png";
import HambiOpen from "../../../public/assets/hambi/hambi.svg";
import HambiClose from "../../../public/assets/hambi/close.svg";
import { useRouter } from "next/navigation";

import { Exo_2 } from "next/font/google";
const exo = Exo_2({ subsets: ["latin"] });

const NavMobile = ({ observ }) => {
  const router = useRouter();

  const [hamiOpen, setHambiOpen] = useState(true);
  const hambiLogic = hamiOpen ? HambiOpen : HambiClose;

  useEffect(() => {
    if (!hamiOpen) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }, [hamiOpen]);

  const habiHandeler = () => {
    setHambiOpen((prevState) => !prevState);
  };

  const defaultfunction = () => {
  };

  return (
    <section
      className={`${Style.section} ${!hamiOpen && Style.vh100} ${observ && Style.fixed}`}
    >
      <div className={Style.container}>
        <div className={Style.row}>
          <div className={Style.logoContainer}>
            <Image
              onClick={() => router.push("/")}
              width={1100}
              height={300}
              priority
              src={Logo}
              alt={alt}
            />
          </div>
          <div className={Style.itemContainer}>
            <button
              onClick={!hamiOpen ? habiHandeler : defaultfunction}
              className={Style.button}
            >
              <a className={Style.buttonA} href="/#kapcsolat">
                {button}
              </a>{" "}
            </button>
            <div
              className={`${Style.hambiPhotoContainer} ${!hamiOpen && Style.hambiCloseBg}`}
              onClick={habiHandeler}
            >
              <Image
                className={Style.hambiOpen}
                priority
                src={hambiLogic}
                alt={alt}
              />
            </div>
          </div>
        </div>
      </div>
      {!hamiOpen ? (
        <div className={`${Style.mobileMenu} ${exo.className}`}>
          <div className={Style.navContainer}>
            <a onClick={habiHandeler} href="#szolgaltatasok">
              Szolgáltatásaink
            </a>
            <a onClick={habiHandeler} href="#rolunk">
              Rólunk
            </a>
          </div>

          <div className={Style.footerContainer}>
            <div className={Style.footerItemContainer}>
              <p>Tender Control Kft.</p>
              <p>2024</p>
            </div>
            <div className={Style.footerItemContainer}>
              <p>Designed and developed by </p>
              <a href="https://www.studiobromo.hu/">Studio Bromo</a>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default NavMobile;
