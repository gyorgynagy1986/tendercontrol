import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import photo from "../../../public/assets/about/agi.png";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
const serif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["300", "700"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300", "700"] });

const Agi = () => {
  return (
    <div className={`${Style.contentContainer} ${sans.className}`}>
      <Image src={photo} alt="Dr. Herczeg Ágnes" />
      <div className={Style.textContainer}>
        <div className={Style.flexContainer}>
          <h3 className={serif.className}>Dr. Herczeg Ágnes</h3>
          <span>Ügyvezető</span>
        </div>
        <p>
          Jogi diplomámat 2004-ben szereztem a Szegedi Tudományegyetemen, a
          közbeszerzési joggal azóta foglalkozom folyamatosan.
        </p>
        <p>
          2007-től hivatalos közbeszerzési tanácsadóként, majd 2015-től felelős
          akkreditált közbeszerzési tanácsadóként dolgozom.
        </p>
        <p>
          Közel 10 évet tevékenykedtem felsőfokú képzésekben oktatóként, mely
          során szintén a közbeszerzési jog területe volt a fő általam oktatott
          terület.
        </p>
        <p>
          A Tender Control Kft. – t 2012-ben alapítottam, amely azóta nyújt
          közbeszerzési – jogi tárgyú szolgáltatást mind az ajánlatkérői, mind
          az ajánlattevői oldal számára.
        </p>
      </div>
    </div>
  );
};

export default Agi;
