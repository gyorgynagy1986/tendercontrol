import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import { sections } from "@/data/data";
import devider from "../../public/assets/devider/devider.svg";
import Agi from "@/components/AboutItems/Agi";
import Petra from "@/components/AboutItems/Petra";
import Lorand from "@/components/AboutItems/Lorand";

import { Exo_2 } from "next/font/google";
const exo = Exo_2({ subsets: ["latin"] });

const About = () => {
  return (
    <section className={Style.section}>
      <div id="rolunk" className={Style.container}>
        <div className={Style.row}>
          <Image src={devider} alt="#" />
          <h2 className={exo.className}>{sections.section2}</h2>
          <div>
            <Agi />
            <div className={Style.line}></div>
            <Petra />
            <div className={Style.line}></div>
            <Lorand />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
