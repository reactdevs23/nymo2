import React from "react";
import styles from "./styles.module.css";

const BuyEth = () => {
  const buyEth = [
    "Choose amount",
    "Choose payment method",
    "Complete KYC details",
    "Complete ID verification",
    "Purchase ETH",
  ];
  return (
    <div className={` ${styles.pixelatedCorners} ${styles.buyEth}`}>
      <div>
        <h4 className={styles.cardTitle}>Buy $ETH Here</h4>
        <div className={styles.card}>
          <ol className={styles.textContaner}>
            {buyEth.map((el, i) => (
              <li className={styles.value} key={i}>
                {el}
              </li>
            ))}
          </ol>
        </div>{" "}
      </div>
      <button className={`${styles.button} ${styles.buyButton} `}>Buy</button>
    </div>
  );
};

export default BuyEth;
