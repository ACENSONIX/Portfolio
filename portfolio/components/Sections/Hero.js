import styles from "../../styles/Home.module.css";
import { Flex, Box, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <>
      <Box className={styles.hero}>
        <h1 className={styles.smhead}>Hi, my name is</h1>
        <h2 className={styles.heroname}>Sahil Shetty</h2>
        <h3 className={styles.bigheading}>I build things for the web.</h3>
        <p className={styles.desc}>
          I'm a second year I.T student at D.J Sanghavi College of Engineering.
          <br></br>I'm a <b>MERN developer </b>with a passion for learning new
          things and
          <br></br> building things that are useful to the world. I like problem
          solving and<br></br> love solving challenges. Currently looking for
          <b> Web Development opportunities.</b>
        </p>

        <Button size="md" className={styles.rsbtn}>
          Resume
        </Button>
      </Box>
    </>
  );
};

export default Hero;
