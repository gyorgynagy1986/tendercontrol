"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Style from "./Hero.module.css";
import heroIamge from "../../public/assets/hero/hero.webp";
import Nav from "@/components/Nav/Nav";
import MobileNav from "@/components/Nav/MobileNav";
import { alt } from "@/data/data";
import "aos/dist/aos.css";

import { Exo_2 } from "next/font/google";
const exo = Exo_2({ subsets: ["latin"] });

const Hero = () => {
  const [stickyNav, setStickyNav] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStickyNav(false);
        } else {
          setStickyNav(true);
        }
      },
      { rootMargin: "0px 10px 10px 10px" },
    );

    observer.observe(menuRef.current);
  }, []);

  return (
    <section ref={menuRef} className={Style.section}>
      <Nav observ={stickyNav} />
      <MobileNav observ={stickyNav} />
      <Image priority alt={alt} className={Style.heroImage} src={heroIamge} />
      <div className={Style.row}>
        <div className={Style.h1Container}>
          <h1
            data-aos="fade"
            data-aos-duration="1500"
            className={exo.className}
          >
            Professzionális <br /> közbeszerzési szaktanácsadás
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
