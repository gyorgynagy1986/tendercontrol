import React from "react";
import Image from "next/image";
import Style from "./Hero.module.css";
import heroIamge from "../../public/assets/hero/hero.png";
import Nav from "@/components/Nav/Nav";
import { titleH1 } from "@/data/data";

const Hero = () => {
  return (
    <section className={Style.section}>
      <Nav />
      <Image priority alt="iamge" className={Style.heroImage} src={heroIamge} />
      <div className={Style.row}>
        <div className={Style.h1Container}>
          <h1>
            Professzionális <br /> közbeszerzési szaktanácsadás
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
