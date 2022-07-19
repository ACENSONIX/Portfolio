import Navbar from "../components/Navbar";
import Hero from "../components/Sections/Hero";
import Side from "../components/Side";
import styles from "../styles/Home.module.css";
import { Flex, Box } from "@chakra-ui/react";
import About from "../components/Sections/About";
import Skills from "../components/Sections/skills";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Side />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
