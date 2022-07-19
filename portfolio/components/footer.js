import { Flex, Box } from "@chakra-ui/react";
// import styles from "../../styles/Home.module.css";

const Footer = () => {
  return (
    <>
      <Flex justifyContent="center" alignItems="center" margin="0 auto">
        <Box>
          <p>
            © 2022 Created by:{" "}
            <a href="https://github.com/ACENSONIX/Portfolio">Sahil Shetty</a>
          </p>
        </Box>
      </Flex>
    </>
  );
};

export default Footer;
