import Navbar from "../components/Navbar";
import Hero from "../components/Sections/Hero";
import Side from "../components/Side";
import styles from "../styles/Home.module.css";
import { Flex, Box } from "@chakra-ui/react";
import About from "../components/Sections/About";

export default function Home() {
  return (
    <div className={styles.container}>
      {/* <Navbar />

      <Side />
      <Hero /> */}
      <About />
    </div>
  );
}
