import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1> CryptoApp</h1>
      <p>Stay up to date on all things crypto!</p>
    </div>
  );
}
