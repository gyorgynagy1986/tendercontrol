import React from "react";
import Image from "next/image";
import Style from "./Hero.module.css";
import heroIamge from "../../public/assets/hero/hero.png";
import Nav from "@/components/Nav/Nav";
import MobileNav from "@/components/Nav/MobileNav";

const Hero = () => {
  return (
    <section className={Style.section}>
      <Nav />
      <MobileNav />
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
