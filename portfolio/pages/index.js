import Navbar from "../components/Navbar";
import Hero from "../components/Sections/Hero";
import Side from "../components/Side";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Navbar />
      <Side /> */}
      <Hero />
    </div>
  );
}
