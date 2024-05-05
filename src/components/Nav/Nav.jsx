
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { alt } from "@/data/data";
import { nav } from "@/data/data";
import { button } from "@/data/data";
import Style from "./Nav.module.css";
import { Exo_2 } from "next/font/google";
import { useRouter } from 'next/navigation'

const exo = Exo_2({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

import Logo from "../../../public/assets/logo/logo.png";




const Nav = ({ observ }) => {
  const router = useRouter()

  return (
    <section className={`${Style.section} ${observ && Style.fixed}`}>
      <div className={`${Style.container} ${observ && Style.paddingFix}`}>
        <div className={Style.row}>
          <div>
            <Image style={{cursor:'pointer'}} onClick={() => router.push('/')} priority src={Logo} alt={alt} />
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
              <a href="/#kapcsolat">{button}</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
