import React from "react";
import Style from "./About.module.css";
import Image from "next/image";
import photo from "../../../public/assets/about/agi.png";

const Agi = () => {
  return (
    <div className={Style.contentContainer}>
      <Image src={photo} alt="Dr. Herczeg Ágnes" />
      <div className={Style.textContainer}>
        <div>
          <h4>Dr. Magosi Lóránd</h4>
        </div>
        <p>
          Jogi diplomámat 2016-ban szereztem a Szegedi Tudományegyetemen, majd
          az élet úgy hozta, hogy rögtön munkába is az önkormányzati szférában,
          ahol több mint 7 évig közbeszerzési ügyintézőként tevékenykedtem.
        </p>
        <p>
          A munkám során alapos betekintést nyertem a közbeszerzési jog számos
          részterületébe, így többek között pl. koordináltam a hivatal
          energiabeszerzéseit, továbbá rendszeresen véleményeztem a hivatali
          cégek közbeszerzéseit.
        </p>
        <p>
          2018-tól munkámat felelős akkreditált közbeszerzési szaktanácsadóként
          láttam el. A gyakorlat mellett mindig is érdekelt a jogelmélet, ezen
          érdeklődési területemnek hódolva 2018-tól több éven át oktattam a
          Szegedi Tudományegyetem közbeszerzési referens felnőttképzésén.
        </p>
        <p>
          2023-ban csatlakoztam a Tender Control Kft.-hez abból a célból, hogy
          jobban megismerjem a versenyszféra izgalmas világát.
        </p>
      </div>
    </div>
  );
};

export default Agi;
