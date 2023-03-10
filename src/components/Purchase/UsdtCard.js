import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const UsdtCard = () => {
  const [usdt, setUsdt] = useState(0);
  const [nymo, setNymo] = useState(0);
  useEffect(() => {
    setNymo(usdt * 58.42);
  }, [usdt]);

  return (
    <div
      className={`  ${styles.usdtCard}`}
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <h4 className={styles.cardTitle}>Buy With $USDT</h4>
      <div className={styles.card}>
        <div className={`${styles.inputWrapper}`}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={usdt}
              onChange={(e) => {
                setUsdt(e.target.value);
              }}
            />{" "}
            <p className={styles.label}> USDT</p>
          </div>{" "}
        </div>
        <p className={styles.value}>{nymo} NYMO</p>
        <div className={`${styles.inputWrapper}`}>
          <div className={`${styles.inputContainer}`}>
            <input
              className={styles.input}
              min="0"
              type="number"
              value={nymo}
              onChange={(e) => setNymo(e.target.value)}
            />{" "}
            <p className={styles.label}> NYMO</p>
          </div>{" "}
        </div>
        <p className={styles.value}>Your USDT balance : USDT</p>
        <p className={styles.value}>
          {nymo} NYMO = {usdt} USD
        </p>
        <div className={`${styles.buttonWrapper}`}>
          <button className={`${styles.button}  `}> 1. Approve</button>
          <button className={`${styles.button} ${styles.buyButton} `}>
            2.Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsdtCard;
