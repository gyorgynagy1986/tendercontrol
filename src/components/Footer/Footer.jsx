import React from "react";
import Style from "./Footer.module.css";

import { Exo_2 } from "next/font/google";
const exo = Exo_2({ subsets: ["latin"] });


const Footer = () => {
  return (
    <section className={Style.section}>
      <div className={Style.container}>
        <div className={Style.row}>
          <div className={Style.textContainer1}>
            <p className={exo.className}>Tender Control Kft.</p> <p className={exo.className}>2024</p>
          </div>
          <div className={Style.textContainer2}>
            <p className={exo.className}>Designed and developed by</p>{" "}
            <a className={exo.className} href="https://www.studiobromo.hu/">StudioBromo</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
