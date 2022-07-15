import { Flex, Box, Image } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import css from "../../utils/skills/css.png";
const Projects = () => {
  return (
    <>
      <Box>
        <h3 className={styles.topics}>01.Some things I have built </h3>
      </Box>
      <Flex flexDirection="column" maxWidth="300px" margin="0 auto">
        <Box>
          <Flex justifyContent="space-between">
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-folder"
                width="24"
                height="24"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
            </Box>
            <Box>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-external-link"
                width="24"
                height="24"
              >
                <title>External Link</title>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Box>
          </Flex>
        </Box>
        <Box className={styles.aboutinfo}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quidem.lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, quidemlorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </Box>
        <Box>
          <Flex justifyContent="space-between">
            <Image width={50} height={50} src={css} alt="css" />
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Projects;
