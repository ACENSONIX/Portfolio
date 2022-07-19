import { Flex, Box, Button } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";

const Contact = () => {
  return (
    <>
      <Box className={styles.hero}>
        <h1 className={styles.smhead}>04.What's next</h1>
        <h2 className={styles.heroname}>Contact Me</h2>
        <p className={styles.desc}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quidemlorem ipsum dolor sit amet consectetur adipisicing
        </p>
        <a href="mailto:shettysahil5@gmail.com">
          <Button size="md" className={styles.rsbtn}>
            Say Hello
          </Button>
        </a>
      </Box>
    </>
  );
};
export default Contact;
