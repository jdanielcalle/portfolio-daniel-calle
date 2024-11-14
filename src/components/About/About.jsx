import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Sobre Mí</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about2Image.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador de Software</h3>
              <p>
              Experiencia en gestión de proyectos, desarrollo de software y arquitectura de software.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Desarrollador Backend</h3>
              <p>
              Sólida experiencia en la creación de aplicaciones web, especializado en el
              desarrollo de API REST
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};