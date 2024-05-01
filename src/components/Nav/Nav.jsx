import React from "react";
import Image from "next/image";
import Link from "next/link";
import { alt } from "@/data/data";
import { nav } from "@/data/data";
import { button } from "@/data/data";
import Style from "./Nav.module.css";

import Logo from "../../../public/assets/logo/logo.svg";

const Nav = () => {
  return (
    <section className={Style.section}>
      <div className={Style.container}>
        <div className={Style.row}>
          <div>
            <Image priority src={Logo} alt={alt} />
          </div>
          <div className={Style.itemContainer}>
            {nav.map((el, index) => (
              <ul key={index}>
                <Link className={Style.li} href={el.link}>
                  {el.name}
                </Link>
              </ul>
            ))}
            <button className={Style.button}>{button}</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nav;
