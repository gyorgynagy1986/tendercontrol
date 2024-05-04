"use client";

import React, { useState } from "react";
import Style from "./Contact.module.css";
import { sections } from "@/data/data";
import Image from "next/image";
import devider from "../../public/assets/devider/devider2.svg";
import LogoWhite from "../../public/assets/logo/logoWhite.svg";
import { Exo_2 } from "next/font/google";
const exo = Exo_2({ subsets: ["latin"] });

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { fullName, email, message });
    // You can add further processing, like sending the form data to a server
  };

  return (
    <section className={Style.section}>
      <div className={Style.container}>
        <div className={Style.row}>
          <Image src={devider} alt="#" />
          <h2 className={exo.className}>{sections.section3}</h2>
          <div className={Style.flexContainer}>
            <div className={Style.Container1}>
              <div className={Style.textContainer}>
                <div className={Style.imageContainer}>
                  <Image src={LogoWhite} alt="#" />
                </div>
                <div>
                  <h6 className={exo.className}>Cím</h6>
                  <p>
                    6720 Szeged, <br /> Roosevelt tér 10-11., II. emelet 24.
                  </p>
                </div>
                <div>
                  <h6 className={exo.className}>E-mail cím</h6>
                  <p>kozbeszerzes@tendercontrol.hu</p>
                </div>
                <div>
                  <h6 className={exo.className}>Telefonszám</h6>
                  <a href="tel:+36302292104">+36 30 229 2104</a>
                </div>
              </div>
            </div>

            <div className={Style.Container2}>
              <form className={exo.className} onSubmit={handleSubmit}>
                <div className={Style.formItemsContainer}>
                  <label htmlFor="fullName">Teljes név</label>
                  <input
                    className={Style.input}
                    type="text"
                    id="fullName"
                    placeholder="Teljes név"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
                <div className={Style.formItemsContainer}>
                  <label htmlFor="email">E-mail cím:</label>
                  <input
                    className={Style.input}
                    type="email"
                    id="email"
                    placeholder="E-mail cím:"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className={Style.formItemsContainer}>
                  <label htmlFor="message">Üzenet:</label>
                  <textarea
                    className={Style.textarea}
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    placeholder="Üzenet"
                  />
                </div>
                <div className={Style.button}>
                  <button className={Style.btn} type="submit">
                    ÜZENET KÜLDÉSE
                  </button>
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
