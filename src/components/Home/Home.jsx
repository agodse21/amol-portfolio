import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import styles from "./Home.module.css";
// import { TypeWritter } from "./HomeElements";
// import CustomLetter from "../Letter/Letter";
import Typical from "react-typical";
import Typewriter from "typewriter-effect";
import HeaderSection from "./HeaderS";
import { About } from "../About/About";
import { Skills } from "../Skills/Skills";
import { Work } from "../Work/Work";
import { Contact } from "../Contact/Contact";
import { ChevronRightIcon } from "@chakra-ui/icons";
// import resume from ""
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
const typewritterStrings = [
  "Full Stack Web Developer !",
  "Frontend Developer",
  "MERN Stack Developer",
  "A tech enthusiastic",
];

export const Home = ({ props }) => {
  const { scrollsection, about, work, conatct, home, skills } = props;

  const { colorMode, toggleColorMode } = useColorMode();
  const [animation, setAnimation] = useState(false);

  return (
    <>
      <Desktop>
        <Box
          position="relative"
          fontFamily="poppins"
          mt="80px"
          zIndex="1"
          h="640px"
          bg={colorMode === "light" ? "#edf2f8" : "#0f1624"}
        >
          <Flex alignItems="center">
            <Center>
              <Box
                data-aos="zoom-in"
                h="640px"
                fontFamily="poppins"
                textAlign="start"
              >
                <Box ml={250} mt={150}>
                  <Text
                    fontFamily="poppins"
                    fontSize="3xl"
                    className={styles.font}
                    fontWeight="bold"
                  >
                    Hi, I am
                  </Text>

                  <Heading
                    size="4xl"
                    mt={5}
                    fontFamily="poppins"
                    fontWeight="bold"
                    className={styles.font}
                  >
                    AMOL GODSE
                  </Heading>
                  <Heading
                    fontFamily="poppins"
                    size="lg"
                    color="#dc143c"
                    mt={5}
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "Full Stack Web Developer.",
                          "Frontend Developer.",
                          "MERN Stack Developer.",
                          "A tech enthusiastic.",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </Heading>

                  <a href="Amol_Resume.pdf" download>
                    <Button
                      mt={10}
                      h="50px"
                      fontFamily="Poppins"
                      w="150px"
                      fontWeight="bold"
                      fontSize="20px"
                      color="white"
                      bg="#dc143c"
                      _hover={{
                        background: "transparent",
                        color: "#dc143c",
                        border: "2px solid #dc143c",
                      }}
                    >
                      {/* <Icon size="" as={ChevronRightIcon} /> */}
                      RESUME
                    </Button>
                  </a>

                  {/* <Button>amol</Button> */}
                </Box>
              </Box>
            </Center>
            <Box data-aos="zoom-in" w="50%">
              <Flex alignItems="center">
                <HeaderSection />
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Box className={styles.line}></Box>

        <Box ref={about}>
          <About />
        </Box>
        <Box ref={work}>
          <Work />
        </Box>
        <Box h="800px" ref={skills}>
          <Skills />
        </Box>
        <Box ref={conatct}>
          <Contact />
        </Box>
      </Desktop>
   
      <Tablet>
      <Box
          w="100%"
          position="relative"
          zIndex="1"
          bg={colorMode === "light" ? "#edf2f8" : "#0f1624"}
          padding={5}
        >
          <Center>
            <Stack mt={90}>
              <Box ml={10}>
                <Circle
                  position="relative"
                  bg="#dc143c"
                  opacity="0.9"
                  w="250px"
                  h="250px"
                  alignSelf="flex-end"
                >
                  <Box mt={3} className={styles.profilePicture}></Box>
                </Circle>
              </Box>
              <Box>
      <Text
      mt={5}
        fontSize="1xl"
        className={styles.font}
        fontWeight="bold"
        align="center"
      >
        Hi, I am
      </Text>

      <Heading
        size="2xl"
        mt={5}
        fontWeight="bold"
        className={styles.font}
      >
        AMOL GODSE
      </Heading>
      <Heading textAlign="center" size="sm" w="100%" color="#dc143c" mt={5}>
        <Typewriter
          options={{
            strings: [
              "Full Stack Web Developer.",
              "Frontend Developer.",
              "MERN Stack Developer.",
              "A tech enthusiastic.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Heading>
      <Center>
      <a href="Amol_Resume.pdf" download>
                    <Button
                      mt={10}
                      h="40px"
                      fontFamily="Poppins"
                      w="100px"
                      fontWeight="bold"
                      fontSize="20px"
                      color="white"
                      bg="#dc143c"
                      _hover={{
                        background: "transparent",
                        color: "#dc143c",
                        border: "2px solid #dc143c",
                      }}
                    >
                  
                      RESUME
                    </Button>
                  </a>
                  </Center>
    </Box>
            </Stack>
          </Center>
        </Box>
        <Box h="auto" ref={about}>
          <About />
        </Box>
       
        <Box h="auto" ref={work}>
          <Work />
        </Box>
        <Box h="auto" ref={skills}>
          <Skills />
        </Box>
        <Box h="auto" ref={conatct}>
          <Contact />
        </Box> 
      </Tablet>
      <Mobile>
        <Box
          w="100%"
          position="relative"
          zIndex="1"
          bg={colorMode === "light" ? "#edf2f8" : "#0f1624"}
          padding={5}
        >
          <Center>
            <Stack mt={90}>
              <Box>
                <Circle
                  position="relative"
                  bg="#dc143c"
                  opacity="0.9"
                  w="250px"
                  h="250px"
                  alignSelf="flex-end"
                >
                  <Box mt={3} className={styles.profilePicture}></Box>
                </Circle>
              </Box>
              <Box>
      <Text
      mt={5}
        fontSize="1xl"
        className={styles.font}
        fontWeight="bold"
        align="center"
      >
        Hi, I am
      </Text>

      <Heading
        size="2xl"
        mt={5}
        fontWeight="bold"
        className={styles.font}
      >
        AMOL GODSE
      </Heading>
      <Heading size="sm" textAlign="center" w="100%" color="#dc143c" mt={5}>
        <Typewriter
          options={{
            strings: [
              "Full Stack Web Developer.",
              "Frontend Developer.",
              "MERN Stack Developer.",
              "A tech enthusiastic.",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </Heading>
      <Center>
      <a href="Amol_Resume.pdf" download>
                    <Button
                      mt={10}
                      h="40px"
                      fontFamily="Poppins"
                      w="100px"
                      fontWeight="bold"
                      fontSize="20px"
                      color="white"
                      bg="#dc143c"
                      _hover={{
                        background: "transparent",
                        color: "#dc143c",
                        border: "2px solid #dc143c",
                      }}
                    >
                  
                      RESUME
                    </Button>
                  </a>
                  </Center>
    </Box>
            </Stack>
          </Center>
        </Box>
        <Box h="auto"  ref={about}>
          <About />
        </Box>
        
        <Box h="auto" ref={work}>
          <Work />
        </Box>
        <Box h="auto" ref={skills}>
          <Skills />
        </Box>
        <Box h="auto" ref={conatct}>
          <Contact />
        </Box>
      </Mobile>
    </>
  );
};
