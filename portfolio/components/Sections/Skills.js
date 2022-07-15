import { Flex, Box } from "@chakra-ui/react";
import styles from "../../styles/Home.module.css";
import { skillData } from "../../utils/skilldata";

const Skills = () => {
  return (
    <>
      <Flex justifyContent="center">
        <Box>
          <h3 className={styles.topics}>02. Skills </h3>
        </Box>
        <Box>
          <Flex>
            {skillData.map((skill) => (
              <Box>
                <h4>{skill.name}</h4>
                <ul className={styles.skills}>
                  {skill.data.map((item) => (
                    <li>{item}</li>
                  ))}
                </ul>
              </Box>
            ))}
          </Flex>
        </Box>
      </Flex>
    </>
  );
};

export default Skills;
