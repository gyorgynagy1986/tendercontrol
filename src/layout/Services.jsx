"use client";

import React from "react";
import Style from "./Services.module.css";
import Image from "next/image";
import { services, sections, alt } from "@/data/data";
import devider from "../../public/assets/devider/devider.svg";
import { Exo_2, IBM_Plex_Sans } from "next/font/google";
import useAos from "@/app/hooks/aos";
const exo = Exo_2({ subsets: ["latin"] });
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const Services = () => {
  useAos({ duration: 1500 });

  return (
    <section className={Style.section}>
      <div id="szolgaltatasok" className={Style.container}>
        <div className={Style.row}>
          <Image src={devider} alt={alt} />
          <h2 data-aos="fade-up" data-aos-delay="150" className={exo.className}>
            {sections.section1}
          </h2>
          <div data-aos="fade-up" className={Style.itemsContainer}>
            {" "}
            {/* Key should be here */}
            {services.map((el, index) => (
              <div key={index} className={Style.itemsContainerItems}>
                <Image width={80} height={80} src={el.img} alt={alt} />
                <div className={Style.itemsContainerText}>
                  <span className={sans.className}>{el.number}</span>
                  <h3>{el.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
