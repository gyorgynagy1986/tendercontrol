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
        <div>
          <h4>Dr. Piri Petra</h4>
        </div>
        <p>Jogi diplomámat 2016-ban szereztem a Szegedi Tudományegyetemen.</p>
        <p>
          Nappali tagozaton folytatott jogi tanulmányaim mellett, kiemelten
          fontosnak tartottam az elméletben megszerzett tudás gyakorlati
          alkalmazásának elsajátítását, így első éves joghallgatóként már
          gyakornokként tevékenykedtem, ahol érintőlegesen foglalkoztam a
          közbeszerzési joggal is.
        </p>
        <p>
          Tanulmányaim befejezését követően pedig egyértelművé vált számomra a
          közbeszerzési jogterület iránti elköteleződés, amellyel immár 8 éve
          foglalkozom.
        </p>
        <p>
          2018-tól felelős akkreditált közbeszerzési tanácsadóként dolgoztam.
        </p>
      </div>
    </div>
  );
};

export default Agi;
