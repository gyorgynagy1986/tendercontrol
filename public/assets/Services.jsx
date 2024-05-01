import React from "react";
import Style from "./Services.module.css";
import Image from "next/image";

import devider from "../../public/assets/devider/devider.svg";

const Services = () => {
  return (
    <section className={Style.section}>
      <div className={Style.container}>
        <div className={Style.row}>
          <Image src={devider} alt="#" />
          <h2>HELLo</h2>
          <div className={Style.itemsContainer}>
            <div className={Style.itemsContainerItems}>
              <Image width={50} height={50} src="/1.svg" alt="#" />

              <div className={Style.itemsContainerText}>
                <p></p>
                <h3></h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
