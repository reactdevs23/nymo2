import React from "react";
import Card from "../Card/Card";
import CountDown from "../CountDown/CountDown";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSectionContaiener}>
      <Card />
      {/* <div
        className={styles.heroSectionWrapper}
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2 className={styles.heading}>About nymo and her ico</h2>
        <div className={styles.heroSection}>
          <div>
            <p className={styles.text}>
              Nymo is a groundbreaking blockchain-based platform for remittances, 
              with the aim of empowering those who lack access to traditional banking services. 
              To fully realize and launch our platform, we have decided to conduct an Initial Coin Offering (ICO) to raise the funds necessary to bring Nymo to life.
            </p>
            <p className={styles.text}>
              Regrettably, despite our extensive efforts, we have been unable to
              secure the essential funding to fully realize and launch our
              platform.
            </p>{" "}
            <p className={styles.text}>
              <strong className={styles.strong}>
                Therefore, we have decided to conduct an Initial Coin Offering
                (ICO) to raise the funds necessary to bring Nymo to life.
              </strong>
            </p>
          </div>
          <div>
            <p className={`${styles.countText} ${styles.text}`}>
              PRIVATE SALE STARTS IN
            </p>
            <CountDown dayCount="March 11 2023 12:00:00" />
          </div>
        </div>
      </div> */}
      {/* <div className={styles.overlay}></div> */}
    </section>
  );
};

export default HeroSection;
