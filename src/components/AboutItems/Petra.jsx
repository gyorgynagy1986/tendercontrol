import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import photo from "../../../public/assets/about/petra.jpg";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";
const serif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["300", "700"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300", "700"] });
const Agi = () => {
  return (
    <div className={`${Style.contentContainer} ${sans.className}`}>
      <Image
        data-aos-once
        data-aos="fade"
        data-aos-duration="1500"
        src={photo}
        priority
        width={1000}
        height={1200}
        placeholder="blur"
        alt="Dr. Piri Petra Tender Control Kft"
      />
      <div className={Style.textContainer}>
        <div>
          <h3 className={serif.className}>Dr. Piri Petra</h3>
        </div>
        <p
          data-aos-once
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          Jogi diplomámat 2016-ban szereztem a Szegedi Tudományegyetemen.
        </p>
        <p
          data-aos-once
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          Nappali tagozaton folytatott jogi tanulmányaim mellett, kiemelten
          fontosnak tartottam az elméletben megszerzett tudás gyakorlati
          alkalmazásának elsajátítását, így első éves joghallgatóként már
          gyakornokként tevékenykedtem, ahol érintőlegesen foglalkoztam a
          közbeszerzési joggal is.
        </p>
        <p
          data-aos-once
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          Tanulmányaim befejezését követően pedig egyértelművé vált számomra a
          közbeszerzési jogterület iránti elköteleződés, amellyel immár 8 éve
          foglalkozom.
        </p>
        <p
          data-aos-once
          data-aos="fade"
          data-aos-duration="1500"
          data-aos-delay="100"
        >
          2018-tól felelős akkreditált közbeszerzési tanácsadóként dolgoztam.
        </p>
      </div>
    </div>
  );
};

export default Agi;
