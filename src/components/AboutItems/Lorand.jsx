import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import photo from "../../../public/assets/about/lorand.jpg";
import { IBM_Plex_Sans, IBM_Plex_Serif } from "next/font/google";

const serif = IBM_Plex_Serif({ subsets: ["latin"], weight: ["300", "700"] });
const sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300", "700"] });

const Agi = () => {

  return (
    <div className={`${Style.contentContainer} ${sans.className}`}>
      <Image
        data-aos-once
        data-aos-duration="1500"
        placeholder="blur"
        data-aos="fade"
        priority
        src={photo}
        alt="Dr. Magosi Lóránd Tender Control Kft"
      />
      <div className={Style.textContainer}>
        <div>
          <h3 className={serif.className}>Dr. Magosi Lóránd</h3>
        </div>
        <p data-aos-once data-aos="fade" data-aos-duration="1500" data-aos-delay="100">
          Jogi diplomámat 2016-ban szereztem a Szegedi Tudományegyetemen, majd
          az élet úgy hozta, hogy rögtön munkába is álltam az önkormányzati szférában,
          ahol több mint 7 évig közbeszerzési ügyintézőként tevékenykedtem.
        </p>
        <p data-aos-once data-aos="fade" data-aos-duration="1500" data-aos-delay="100">
          A munkám során alapos betekintést nyertem a közbeszerzési jog számos
          részterületébe, így többek között pl. koordináltam a hivatal
          energiabeszerzéseit, továbbá rendszeresen véleményeztem a hivatali
          cégek közbeszerzéseit.
        </p>
        <p data-aos-once data-aos="fade" data-aos-duration="1500" data-aos-delay="100">
          2018-tól munkámat felelős akkreditált közbeszerzési szaktanácsadóként
          láttam el. A gyakorlat mellett mindig is érdekelt a jogelmélet, ezen
          érdeklődési területemnek hódolva 2018-tól több éven át oktattam a
          Szegedi Tudományegyetem közbeszerzési referens felnőttképzésén.
        </p>
        <p data-aos-once data-aos="fade" data-aos-duration="1500" data-aos-delay="100">
          2023-ban csatlakoztam a Tender Control Kft.-hez abból a célból, hogy
          jobban megismerjem a versenyszféra izgalmas világát.
        </p>
      </div>
    </div>
  );
};

export default Agi;
