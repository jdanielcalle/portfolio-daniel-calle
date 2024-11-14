import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>¡Ey! Soy Daniel</h1>
        <p className={styles.description}>
        Soy un desarrollador de software con experiencia en el uso de Java y Spring Boot.
        ¡Contáctame si quieres saber más sobre mí!
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contáctame
        </a>
      </div>
      <img
        src={getImageUrl("hero/perfilImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};