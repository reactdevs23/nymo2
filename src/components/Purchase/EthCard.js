import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

const EthCard = () => {
  const [eth, setEth] = useState(0);
  const [ethMcade, setEthMcade] = useState(0);
  useEffect(() => {
    setEthMcade(eth * 90487.65);
  }, [eth]);

  return (
    <div
      className={`  ${styles.ethCard}`}
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <h4 className={styles.cardTitle}>Trade With $ETH</h4>
      <div className={styles.card}>
        <div className={`${styles.inputWrapper}`}>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="number"
              min="0"
              value={eth}
              onChange={(e) => {
                setEth(e.target.value);
              }}
            />{" "}
            <p className={styles.label}> ETH</p>
          </div>{" "}
        </div>
        <p className={styles.value}>{ethMcade} MCADE</p>
        <div className={`${styles.inputWrapper}`}>
          <div className={`${styles.inputContainer}`}>
            <input
              className={styles.input}
              min="0"
              type="number"
              value={ethMcade}
              onChange={(e) => setEthMcade(e.target.value)}
            />{" "}
            <p className={styles.label}> MCADE</p>
          </div>{" "}
        </div>

        <p className={styles.value}>
          {ethMcade} MCADE = {eth} ETH
        </p>
      </div>{" "}
      <button className={`${styles.button} ${styles.buyButton} `}>Buy</button>
    </div>
  );
};

export default EthCard;
