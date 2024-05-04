import React from "react";
import Image from "next/image";
import Link from "next/link";
import { alt } from "@/data/data";
import { nav } from "@/data/data";
import { button } from "@/data/data";
import Style from "./Nav.module.css";
import { Exo_2 } from "next/font/google";

const exo = Exo_2({ subsets: ["latin"] });

import Logo from "../../../public/assets/logo/logo.png";

const Nav = () => {
  return (
    <section className={Style.section}>
      <div className={Style.container}>
        <div className={Style.row}>
          <div>
            <Image priority src={Logo} alt={alt} />
          </div>
          <div className={Style.itemContainer}>
            <ul>
              {nav.map((el, index) => (
                <li>
                  <Link
                    key={index}
                    className={`${Style.li} ${exo.className}`}
                    href={el.link}
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button className={`${Style.button} ${exo.className}`}>
             <a href="#kapcsolat">{button}</a> 
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
