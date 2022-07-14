import { Flex, Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";

const Navbar = () => {
  return (
    <>
      <Box className={styles.navbar}>
        <Flex
          justify="flex-start"
          align="center"
          paddingLeft={4}
          paddingTop={10}
        >
          <Box className={styles.name}>SAHIL SHETTY</Box>
          <Box className={styles.links}>
            <Flex justify="space-around">
              <a className={styles.navlinks} href="/about">
                About
              </a>
              <a href="/education">Education</a>
              <a href="/projects">Projects</a>
              <a href="/contact">Contact</a>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
