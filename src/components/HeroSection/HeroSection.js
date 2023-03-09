import React from "react";

import styles from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={styles.heroSectionContaiener}>
      <div className={styles.cardContainer}>
        <div className={`${styles.main} ${styles.pixelated_corners}`}>
          <div className={styles.card_warrper}>
            <div className={styles.fast}>
              <svg
                width="22"
                height="28"
                xmlns="http://www.w3.org/2000/svg"
                class="mx-2"
              >
                <path
                  d="M18.031 11.697c-.3.484-.66.96-1.075 1.425a2.284 2.284 0 0 1-1.593.762 2.313 2.313 0 0 1-2.431-2.456c.093-1.481-.388-3.222-1.432-5.178-.528-.981-1.16-1.819-1.912-2.513a7.5 7.5 0 0 1-.379 1.454 11.07 11.07 0 0 1-1.818 3.156 10.925 10.925 0 0 1-1.832 1.775 8.839 8.839 0 0 0-2.525 3.06 8.624 8.624 0 0 0-.909 3.874c0 2.34.922 4.54 2.594 6.2A8.86 8.86 0 0 0 11 25.831a8.86 8.86 0 0 0 6.281-2.575 8.673 8.673 0 0 0 2.594-6.2 8.66 8.66 0 0 0-.75-3.534 8.617 8.617 0 0 0-1.094-1.825z"
                  fill-opacity="0.85"
                  fill="#FF8100"
                ></path>
                <path
                  d="M21.066 12.653a10.86 10.86 0 0 0-2.591-3.6l-.91-.834a.253.253 0 0 0-.406.103l-.406 1.165c-.253.732-.719 1.479-1.378 2.213a.195.195 0 0 1-.128.062.173.173 0 0 1-.134-.046.184.184 0 0 1-.063-.15c.116-1.882-.447-4.004-1.678-6.313-1.019-1.919-2.434-3.416-4.203-4.46L7.879.035a.25.25 0 0 0-.376.228l.069 1.5c.047 1.025-.072 1.932-.353 2.685A8.911 8.911 0 0 1 5.75 6.994a9.239 9.239 0 0 1-1.484 1.44 11.019 11.019 0 0 0-3.135 3.797 10.867 10.867 0 0 0-.265 9.072 10.98 10.98 0 0 0 5.856 5.8c1.356.569 2.794.856 4.278.856a11.05 11.05 0 0 0 4.278-.853 10.894 10.894 0 0 0 3.497-2.334A10.818 10.818 0 0 0 22 17.056a10.77 10.77 0 0 0-.934-4.403zM17.28 23.256A8.86 8.86 0 0 1 11 25.831a8.86 8.86 0 0 1-6.281-2.575 8.678 8.678 0 0 1-2.594-6.2c0-1.36.306-2.662.91-3.875a8.839 8.839 0 0 1 2.524-3.06 10.925 10.925 0 0 0 1.832-1.774A11.07 11.07 0 0 0 9.209 5.19a7.5 7.5 0 0 0 .379-1.454c.753.694 1.384 1.532 1.912 2.513 1.044 1.956 1.525 3.697 1.431 5.178a2.313 2.313 0 0 0 2.432 2.456 2.285 2.285 0 0 0 1.593-.762c.416-.466.775-.94 1.075-1.425.438.56.803 1.169 1.094 1.825a8.66 8.66 0 0 1 .75 3.534c0 2.34-.922 4.544-2.594 6.2z"
                  fill="red"
                ></path>
              </svg>
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
                  <svg
                    width="18"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    class="text-positive"
                  >
                    <path
                      d="m7 7.688 7 7-1.645 1.645L7 10.99l-5.355 5.343L0 14.688l7-7zM7 0l7 7-1.645 1.645L7 3.302 1.645 8.645 0 7l7-7z"
                      fill="#00d0ad"
                    ></path>
                  </svg>
                  <div>
                    <span className={styles.solid_text}>
                      84.13% <span style={{ color: "#00D0AD" }}>SOLD</span>
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
                  NEXT STAGE: <span style={{ color: "#FF5400" }}>$0.017</span>
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
                  only <span style={{ color: "#ff5400" }}>91,380,684</span>{" "}
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
