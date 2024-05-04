import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import photo from "../../../public/assets/about/agi.png";
import useAos from "@/app/hooks/aos";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
const serif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["300", "700"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300", "700"] });

const Agi = () => {
  useAos({ duration: 1500 });

  return (
    <div className={`${Style.contentContainer} ${sans.className}`}>
      <Image data-aos-once	 data-aos="fade-right" src={photo} alt="Dr. Herczeg Ágnes" />
      <div className={Style.textContainer}>
        <div className={Style.flexContainer}>
          <h3 className={serif.className}>Dr. Herczeg Ágnes</h3>
          <span>Ügyvezető</span>
        </div>
        <p data-aos-once	 data-aos="fade-up" data-aos-delay="100" >
          Jogi diplomámat 2004-ben szereztem a Szegedi Tudományegyetemen, a
          közbeszerzési joggal azóta foglalkozom folyamatosan.
        </p>
        <p  data-aos-once	 data-aos="fade-up" data-aos-delay="100" >
          2007-től hivatalos közbeszerzési tanácsadóként, majd 2015-től felelős
          akkreditált közbeszerzési tanácsadóként dolgozom.
        </p>
        <p data-aos-once	 data-aos="fade-up" data-aos-delay="100" >
          Közel 10 évet tevékenykedtem felsőfokú képzésekben oktatóként, mely
          során szintén a közbeszerzési jog területe volt a fő általam oktatott
          terület.
        </p>
        <p data-aos-once	 data-aos="fade-up" data-aos-delay="100">
          A Tender Control Kft. – t 2012-ben alapítottam, amely azóta nyújt
          közbeszerzési – jogi tárgyú szolgáltatást mind az ajánlatkérői, mind
          az ajánlattevői oldal számára.
        </p>
      </div>
    </div>
  );
};

export default Agi;
