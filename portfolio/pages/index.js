import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Side from "../components/Side";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Side />
    </div>
  );
}
