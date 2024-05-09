"use client";

import React, { useState, useEffect} from "react";
import Style from "./Contact.module.css";
import { sections, alt } from "@/data/data";
import Image from "next/image";
import devider from "../../public/assets/devider/devider2.svg";
import LogoWhite from "../../public/assets/logo/logoWhite.svg";
import ButtonSpinner from "@/components/Util/ButtonSpinner";
import Link from "next/link";
import Aos from "aos";

import { Exo_2, IBM_Plex_Sans } from "next/font/google";
const exo = Exo_2({ subsets: ["latin"] });
const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonSpinner, setButtonSpinner] = useState(true);
  const [send, setsend] = useState("Üzenet Küldése");
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setButtonSpinner(false);

    try {
      await fetch("api/email", {
        method: "post",
        body: JSON.stringify({ fullName, email, message, acceptedTerms }),
      });

      setEmail("");
      setFullName("");
      setMessage("");
      setsend("Üzenet elküldve");
      setAcceptedTerms(false)
    } catch (error) {
      console.log(error.message);
      setsend("Valami hiba történt");
    } finally {
      setButtonSpinner(true);
    }
  };

  return (
    <section className={Style.section}>
      <div id="kapcsolat" className={Style.container}>
        <div className={Style.row}>
          <Image src={devider} alt={alt} />
          <h2
            data-aos="fade-up"
            data-aos-once
            data-aos-delay="150"
            data-aos-duration="1500"
            className={exo.className}
          >
            {sections.section3}
          </h2>
          <div className={Style.flexContainer}>
            <div
              data-aos="fade-right"
              data-aos-once
              data-aos-delay="150"
              data-aos-duration="1000"
              className={Style.Container1}
            >
              <div className={Style.textContainer}>
                <div className={Style.imageContainer}>
                  <Image src={LogoWhite} alt={alt} />
                </div>
                <div>
                  <h3 className={exo.className}>Cím</h3>
                  <p className={sans.className}>
                    6720 Szeged, <br /> Roosevelt tér 10-11., II. emelet 24.
                  </p>
                </div>
                <div>
                  <h3 className={exo.className}>E-mail cím</h3>
                  <p className={sans.className} >kozbeszerzes@tendercontrol.hu</p>
                </div>
                <div>
                  <h3 className={exo.className}>Telefonszám</h3>
                  <a className={sans.className} href="tel:+36302292104">+36 30 229 2104</a>
                </div>
              </div>
            </div>

            <div
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-once
              data-aos-delay="150"
              className={Style.Container2}
            >
              <form className={exo.className} onSubmit={handleSubmit}>
                <div className={Style.formItemsContainer}>
                  <label htmlFor="fullName">Teljes név</label>
                  <input
                    className={`${Style.input} ${sans.className}`}
                    type="text"
                    id="fullName"
                    name="fullName"
                    placeholder="Teljes név"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className={Style.formItemsContainer}>
                  <label htmlFor="email">E-mail cím</label>
                  <input
                    className={`${Style.input} ${sans.className}`}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-mail cím"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={Style.formItemsContainer}>
                  <label htmlFor="message">Üzenet</label>
                  <textarea
                    className={`${Style.textarea} ${sans.className}`}
                    id="message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Üzenet"
                  />
                </div>
                <div className={Style.formItemsContainerCheck}>
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms">
                    Elfogadom az{" "}
                    <Link href="/adatkezelesi-tajekoztato">Adatkezelési irányelveket</Link>
                  </label>
                </div>
                <div className={Style.button}>
                  {buttonSpinner ? (
                    <button className={Style.btn} type="submit">
                      {send}
                    </button>
                  ) : (
                    <ButtonSpinner />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
