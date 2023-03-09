import React from "react";
import { fire, positive } from "../../assets/images/images";
import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSectionContaiener}>
      <div
        className={styles.cardContainer}
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <div className={`${styles.main} ${styles.pixelated_corners}`}>
          <div className={styles.card_warrper}>
            <div className={styles.fast}>
              <img src={fire} alt="#" />
              <span>
                <span className={styles.text}>PRESALE</span>
                ELLING FAST
              </span>
            </div>
          </div>
          <div className={styles.card_body}>
            <div className={styles.card_body_desc}>
              <div className={styles.stage}>
                <h1>STAGE 5</h1>
                <p>CURRENT STAGE</p>
              </div>
              <div className={styles.money}>
                <h1>$7,416,567</h1>
                <p>/ $8,835,000 RAISED</p>
              </div>
            </div>
            {/* white background sold */}
            <div>
              <div className={`${styles.sold} ${styles.pixelated_corners}`}>
                <div className={styles.solid_desc}>
                  <img src={positive} alt="" />
                  <div>
                    <span className={styles.solid_text}>
                      84.13% <span style={{ color: "#ed5829" }}>SOLD</span>
                    </span>
                  </div>
                </div>

                <div className={styles.solid_left}>
                  <h1>16.03%</h1>
                  <p>REMAINING</p>
                </div>

                <div className={styles.animated_bg}>
                  <div className={styles.animated_loading}></div>
                </div>
              </div>
            </div>

            <div className={styles.next}>
              <div>
                <p>$0.0155 USDT = 1 $MCADE</p>
              </div>
              {/* next */}
              <div>
                <p>
                  NEXT STAGE: <span style={{ color: "#ed5829" }}>$0.017</span>
                </p>
              </div>

              {/* count */}
            </div>
            <div className={styles.count}>
              <div className={styles.token}>
                <span style={{ color: "#00a2ec" }}>
                  663,619,316{" "}
                  <span style={{ color: "white" }}>Tokens Sold</span>
                </span>
              </div>
              <div className={styles.only}>
                <span>
                  only <span style={{ color: "#ed5829" }}>91,380,684</span>{" "}
                  tokens remain
                </span>
              </div>
            </div>
            <button
              type="button"
              className={`${styles.button} ${styles.pixelated_corners_sm}`}
            >
              Buy tokens
            </button>
            <p className={styles.buy}>How to buy?</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
