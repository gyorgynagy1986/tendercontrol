"use client"

import React from "react";
import Image from "next/image";
import Style from "./Hero.module.css";
import heroIamge from "../../public/assets/hero/hero.webp";
import Nav from "@/components/Nav/Nav";
import MobileNav from "@/components/Nav/MobileNav";
import { alt } from "@/data/data";
import useAos from "@/app/hooks/aos";

import { Exo_2 } from "next/font/google";
const exo = Exo_2({ subsets: ["latin"] });

const Hero = () => {
  return (
    <section className={Style.section}>
      <Nav />
      <MobileNav />
      <Image priority alt={alt} className={Style.heroImage} src={heroIamge} />
      <div className={Style.row}>
        <div className={Style.h1Container}>
          <h1 data-aos="fade" className={exo.className}>
            Professzionális <br /> közbeszerzési szaktanácsadás
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
