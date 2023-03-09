import React, { useState } from "react";
import styles from "./styles.module.css";

const UsdtCard = () => {
  const [usdt, setUsdt] = useState(0);
  const [usdtMcade, setUsdtMcade] = useState(0);

  return (
    <div className={` ${styles.pixelatedCorners} ${styles.usdtCard}`}>
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
                setUsdtMcade(usdt + 1 * 58.42);
              }}
            />{" "}
            <p className={styles.label}> USDT</p>
          </div>{" "}
        </div>
        <p className={styles.value}>{usdtMcade} MCADE</p>
        <div className={`${styles.inputWrapper}`}>
          <div className={`${styles.inputContainer}`}>
            <input
              className={styles.input}
              min="0"
              type="number"
              value={usdtMcade}
              onChange={(e) => setUsdtMcade(e.target.value)}
            />{" "}
            <p className={styles.label}> MCADE</p>
          </div>{" "}
        </div>
        <p className={styles.value}>Your USDT balance : USDT</p>
        <p className={styles.value}>
          {usdtMcade} MCADE = {usdt + 1} USD
        </p>
        <div className={`${styles.buttonWrapper}`}>
          <button className={`${styles.button} ${styles.connectWallet} `}>
            {" "}
            1. Approve
          </button>
          <button className={`${styles.button} ${styles.buyButton} `}>
            2.Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsdtCard;
