import { Flex, Box } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";

const About = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Box>
          <h3 className={styles.topics}>01. About me </h3>
          <p className={styles.aboutinfo}>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quidemlorem ipsum dolor sit amet consectetur adipisicing
            elit. Quisquam, quidemlorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quidem
          </p>
        </Box>
        <Box>
          <img src="https://picsum.photos/400" />
        </Box>
      </Flex>
    </>
  );
};

export default About;
