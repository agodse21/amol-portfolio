import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import styles from "./skills.module.css";
import Marquee from "react-fast-marquee";
import { skillsImage } from "./SkillsImg";
import { useMediaQuery } from 'react-responsive'

const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 767 })
    return isMobile ? children : null
  }
  const Default = ({ children }) => {
    const isNotMobile = useMediaQuery({ minWidth: 768 })
    return isNotMobile ? children : null
  }
export const Skills = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const BackendData = ["CPP", "Nodejs", "Expressjs", "Mongodb"];
  const Frontenddata = [
    "HTML",
    "CSS",
    "Wordpress",
    "Typescript",
    "Git",
    "chakra",
    "Bootstrap",
    "Javascript",
    "Redux",
    "React",
  ];
  return (
    <>
    <Desktop>
      <Box pt={10} pb={10} textAlign="center" fontFamily="poppins">
        <Heading
          data-aos="flip-down"
          className={styles.Heading}
          mt={10}
          size="2xl"
          fontFamily="poppins"
        >
          {" "}
          My <span style={{ color: "#dc143c" }}> Technical </span> Skills
        </Heading>
        <Center>
          <Tabs
            data-aos="flip-down"
            w="80%"
            size="sm"
            mt={10}
            variant="unstyled"
          >
            <Center>
              <TabList>
                <Tab
                  bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                  color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                  borderRadius={5}
                  _selected={{ color: "white", bg: "#dc143c" }}
                >
                  <Box>
                    {" "}
                    <Text fontWeight="" fontSize="20px">
                      Frontend
                    </Text>
                  </Box>
                </Tab>
                <Tab
                  ml={5}
                  bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                  color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                  borderRadius={5}
                  _selected={{ color: "white", bg: "#dc143c" }}
                >
                  <Box>
                    {" "}
                    <Text fontWeight="" fontSize="20px">
                      Backend
                    </Text>
                  </Box>
                </Tab>{" "}
              </TabList>
            </Center>
            <TabPanels>
              <TabPanel>
                <Box
                  mt="50px"
                  data-aos="flip-down"
                  fontFamily="poppins"
                  className="skill--scroll"
                >
                  {/* <Marquee 
                        gradient={false} 
                        speed={80} 
                        pauseOnHover={true}
                        pauseOnClick={true} 
                        delay={0}
                        play={true} 
                        direction="left"
                    > */}
                  <Center>
                    <SimpleGrid columns={5} spacing={10}>
                      {Frontenddata.map((skill, id) => (
                        <Box
                          className={styles.boxes}
                          _hover={
                            colorMode === "light"
                              ? {
                                  background: "#350d36",
                                }
                              : {
                                  background: "#c1c3c5",
                                }
                          }
                          ml={5}
                          p={5}
                          borderRadius={10}
                          w="150px"
                          bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                          color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                          key={id}
                        >
                          <Center>
                            {" "}
                            <Stack>
                              <Image
                                src={skillsImage(skill)}
                                borderRadius={10}
                                alt={skill}
                                w="100px"
                                h="100px"
                              />
                              <Heading fontFamily="poppins" mt={3} size="sm">
                                {skill}
                              </Heading>
                            </Stack>
                          </Center>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Center>
                  {/* </Marquee> */}
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  mt="50px"
                  data-aos="flip-down"
                  fontFamily="poppins"
                  className="skill--scroll"
                >
                  <Center>
                    <SimpleGrid columns={4} spacing={10}>
                      {BackendData.map((skill, id) => (
                        <Box
                          className={styles.boxes}
                          _hover={
                            colorMode === "light"
                              ? {
                                  background: "#350d36",
                                }
                              : {
                                  background: "#c1c3c5",
                                }
                          }
                          ml={5}
                          p={5}
                          borderRadius={10}
                          w="150px"
                          bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                          color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                          key={id}
                        >
                          <Center>
                            {" "}
                            <Stack>
                              <Image
                                src={skillsImage(skill)}
                                borderRadius={10}
                                alt={skill}
                                w="150px"
                                h="100px"
                              />
                              <Heading fontFamily="poppins" mt={3} size="sm">
                                {skill}
                              </Heading>
                            </Stack>
                          </Center>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Center>
                  {/* </Marquee> */}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Box>
      </Desktop>
      <Tablet>
      <Box pt={10} pb={10} textAlign="center" fontFamily="poppins">
        <Heading
          data-aos="flip-down"
          className={styles.TabHeading}
          mt={10}
          size="2xl"
          fontFamily="poppins"
        >
          {" "}
          My <span style={{ color: "#dc143c" }}> Technical </span> Skills
        </Heading>
        <Center>
          <Tabs
            data-aos="flip-down"
            w="90%"
            size="sm"
            mt={10}
            variant="unstyled"
          >
            <Center>
              <TabList>
                <Tab
                  bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                  color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                  borderRadius={5}
                  _selected={{ color: "white", bg: "#dc143c" }}
                >
                  <Box>
                    {" "}
                    <Text fontWeight="" fontSize="20px">
                      Frontend
                    </Text>
                  </Box>
                </Tab>
                <Tab
                  ml={5}
                  bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                  color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                  borderRadius={5}
                  _selected={{ color: "white", bg: "#dc143c" }}
                >
                  <Box>
                    {" "}
                    <Text fontWeight="" fontSize="20px">
                      Backend
                    </Text>
                  </Box>
                </Tab>{" "}
              </TabList>
            </Center>
            <TabPanels>
              <TabPanel>
                <Box
                  mt="50px"
                  data-aos="flip-down"
                  fontFamily="poppins"
                  className="skill--scroll"
                >
                
                  <Center>
                    <SimpleGrid columns={3} spacing={10}>
                      {Frontenddata.map((skill, id) => (
                        <Box
                          className={styles.boxes}
                          _hover={
                            colorMode === "light"
                              ? {
                                  background: "#350d36",
                                }
                              : {
                                  background: "#c1c3c5",
                                }
                          }
                          ml={5}
                          p={5}
                          borderRadius={10}
                          w="100px"
                          bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                          color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                          key={id}
                        >
                          <Center>
                          
                            <Stack>
                          <Center>
                              <Image
                                src={skillsImage(skill)}
                                borderRadius={10}
                                alt={skill}
                                w="70px"
                                h="70px"
                              />
                              </Center>
                              <Heading fontFamily="poppins" mt={3} size="sm">
                                {skill}
                              </Heading>
                            </Stack>
                          </Center>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Center>
                  {/* </Marquee> */}
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  mt="50px"
                  data-aos="flip-down"
                  fontFamily="poppins"
                  className="skill--scroll"
                >
                  <Center>
                    <SimpleGrid columns={3} spacing={10}>
                      {BackendData.map((skill, id) => (
                        <Box
                          className={styles.boxes}
                          _hover={
                            colorMode === "light"
                              ? {
                                  background: "#350d36",
                                }
                              : {
                                  background: "#c1c3c5",
                                }
                          }
                          ml={5}
                          p={5}
                          borderRadius={10}
                          w="100px"
                          bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                          color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                          key={id}
                        >
                          <Center>
                          
                            <Stack>
                          <Center>
                              <Image
                                src={skillsImage(skill)}
                                borderRadius={10}
                                alt={skill}
                                w="70px"
                                h="70px"
                              />
                              </Center>
                              <Heading fontFamily="poppins" mt={3} size="sm">
                                {skill}
                              </Heading>
                            </Stack>
                          </Center>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Center>
                  {/* </Marquee> */}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Box>
      </Tablet>
      <Mobile>
      <Box pt={10} pb={10} textAlign="center" fontFamily="poppins">
        <Heading
          data-aos="flip-down"
          className={styles.MobHeading}
          mt={10}
          size="2xl"
          fontFamily="poppins"
        >
          {" "}
          My <span style={{ color: "#dc143c" }}> Technical </span> Skills
        </Heading>
        <Center>
          <Tabs
            data-aos="flip-down"
            w="90%"
            size="sm"
            mt={10}
            variant="unstyled"
          >
            <Center>
              <TabList>
                <Tab
                  bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                  color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                  borderRadius={5}
                  _selected={{ color: "white", bg: "#dc143c" }}
                >
                  <Box>
                    {" "}
                    <Text fontWeight="" fontSize="20px">
                      Frontend
                    </Text>
                  </Box>
                </Tab>
                <Tab
                  ml={5}
                  bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                  color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                  borderRadius={5}
                  _selected={{ color: "white", bg: "#dc143c" }}
                >
                  <Box>
                    {" "}
                    <Text fontWeight="" fontSize="20px">
                      Backend
                    </Text>
                  </Box>
                </Tab>{" "}
              </TabList>
            </Center>
            <TabPanels>
              <TabPanel>
                <Box
                  mt="50px"
                  data-aos="flip-down"
                  fontFamily="poppins"
                  className="skill--scroll"
                >
                
                  <Center>
                    <SimpleGrid columns={2} spacing={10}>
                      {Frontenddata.map((skill, id) => (
                        <Box
                          className={styles.boxes}
                          _hover={
                            colorMode === "light"
                              ? {
                                  background: "#350d36",
                                }
                              : {
                                  background: "#c1c3c5",
                                }
                          }
                          ml={5}
                          p={5}
                          borderRadius={10}
                          w="100px"
                          bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                          color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                          key={id}
                        >
                          <Center>
                          
                            <Stack>
                          <Center>
                              <Image
                                src={skillsImage(skill)}
                                borderRadius={10}
                                alt={skill}
                                w="70px"
                                h="70px"
                              />
                              </Center>
                              <Heading fontFamily="poppins" mt={3} size="sm">
                                {skill}
                              </Heading>
                            </Stack>
                          </Center>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Center>
                  {/* </Marquee> */}
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  mt="50px"
                  data-aos="flip-down"
                  fontFamily="poppins"
                  className="skill--scroll"
                >
                  <Center>
                    <SimpleGrid columns={2} spacing={10}>
                      {BackendData.map((skill, id) => (
                        <Box
                          className={styles.boxes}
                          _hover={
                            colorMode === "light"
                              ? {
                                  background: "#350d36",
                                }
                              : {
                                  background: "#c1c3c5",
                                }
                                
                          }
                          ml={5}
                          p={5}
                          borderRadius={10}
                          w="100px"
                          bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                          color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                          key={id}
                        >
                          <Center>
                          
                            <Stack>
                          <Center>
                              <Image
                                src={skillsImage(skill)}
                                borderRadius={10}
                                alt={skill}
                                w="70px"
                                h="70px"
                              />
                              </Center>
                              <Heading fontFamily="poppins" mt={3} size="sm">
                                {skill}
                              </Heading>
                            </Stack>
                          </Center>
                        </Box>
                      ))}
                    </SimpleGrid>
                  </Center>
                  {/* </Marquee> */}
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Center>
      </Box>
      </Mobile>
    </>
  );
};
