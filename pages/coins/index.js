import React from "react";
import axios from "axios";
import styles from "../../styles/Coin.module.css";
function Coins({ coinData }) {
  return (
    <div className={styles.container}>
      <h1> All Coins</h1>
      {coinData.coins.map((coin, index) => {
        return (
          <div>
            <h2 key={index}> {coin.name}</h2>
            <p> {coin.price}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Coins;

export const getStaticProps = async () => {
  const data = await axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
  };
};
