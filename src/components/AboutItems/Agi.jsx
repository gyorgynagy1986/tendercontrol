import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import photo from "../../../public/assets/about/agi.png";
import { IBM_Plex_Sans } from "next/font/google";
const inter = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300", "700"] });

const Agi = () => {
  return (
    <div className={`${Style.contentContainer} ${inter.className}`}>
      <Image src={photo} alt="Dr. Herczeg Ágnes" />
      <div className={Style.textContainer}>
        <div className={Style.flexContainer}>
          <h4>Dr. Herczeg Ágnes</h4>
          <h5>Ügyvezető</h5>
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
