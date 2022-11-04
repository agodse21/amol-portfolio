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
  const TeckSkill = [
    "Frontend",
    "Backend",
    "DSA",
    "Project Management"
  ];
  const SoftSkill = [
    "Collaborative",
    "Creative Thinking",
    "Problem Solving",
    "Time Management"
  ];
  return (
    <>
    <Desktop>
      <Box  pt={5} pb={10} textAlign="center" fontFamily="poppins"  bg={colorMode === "light" ? "#edf2f8" : "#0f1624"}>
        <Heading 
          data-aos="flip-down"
          className={styles.Heading}
          mt={5}
          size="2xl"
          fontFamily="poppins"
        >
          {" "}
           My<span style={{ color: "#dc143c" }}> Skills </span> 
        </Heading>
        <Stack data-aos="zoom-out-right" w="100%" m="auto" align="center">
         

<Box mt="40px" >
  <Heading fontFamily="poppins" className={styles.SubHead} ml={5} textAlign="left">Soft Skills</Heading>
        <SimpleGrid mt={5} columns={4} spacing={10}>
                        {SoftSkill.map((skill, id) => (
                          <Center>
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
                            w="200px"
                            bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                            color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                            key={id}
                          >
                            <Center>
                              {" "}
                              <Stack align="center">
                                
                                <Image
                                  src={skillsImage(skill)}
                                  // borderRadius="50%"
                                  alt={skill}
                                  w="100px"
                                  h="100px"
                                />
                                <Heading w="100%" fontFamily="poppins" mt={4} size="xs">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                          </Center>
                        ))}
                      </SimpleGrid>
                      </Box>
                      <Box >
  <Heading fontFamily="poppins" mt={5} className={styles.SubHead} ml={5} textAlign="left">Tech Skills</Heading>
        <SimpleGrid mt={5} columns={4} spacing={10}>
                        {TeckSkill.map((skill, id) => (
                          <Center>
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
                            w="200px"
                            bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                            color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                            key={id}
                          >
                            <Center>
                              {" "}
                              <Stack align="center">
                                
                                <Image
                                  src={skillsImage(skill)}
                                  // borderRadius="50%"
                                  alt={skill}
                                  w="100px"
                                  h="100px"
                                />
                                <Heading w="100%" fontFamily="poppins" mt={4} size="xs">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                          </Center>
                        ))}
                      </SimpleGrid>
                      </Box>
                  

        </Stack>
      </Box>
      </Desktop>
      
      <Tablet>
      <Box pt={15} pb={10} textAlign="center" fontFamily="poppins"  bg={colorMode === "light" ? "#edf2f8" : "#0f1624"}>
        <Heading
          data-aos="flip-down"
          className={styles.TabHeading}
          mt={10}
          size="2xl"
          fontFamily="poppins"
        >
          {" "}
           My<span style={{ color: "#dc143c" }}> Skills </span> 
        </Heading>
        <Center>
        <Stack data-aos="zoom-out-right" w="80%" m="auto" align="center">
         

<Box mt="40px" >
  <Heading fontFamily="poppins" className={styles.TabSubHead} ml={5} textAlign="left">Soft Skills</Heading>
        <SimpleGrid mt={5} columns={2} spacing={10}>
                        {SoftSkill.map((skill, id) => (
                          <Center>
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
                            w="200px"
                            bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                            color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                            key={id}
                          >
                            <Center>
                              {" "}
                              <Stack align="center">
                                
                                <Image
                                  src={skillsImage(skill)}
                                  // borderRadius="50%"
                                  alt={skill}
                                  w="100px"
                                  h="100px"
                                />
                                <Heading w="100%" fontFamily="poppins" mt={4} size="xs">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                          </Center>
                        ))}
                      </SimpleGrid>
                      </Box>
                      <Box >
  <Heading fontFamily="poppins" mt={5} className={styles.TabSubHead} ml={5} textAlign="left">Tech Skills</Heading>
        <SimpleGrid mt={5} columns={2} spacing={10}>
                        {TeckSkill.map((skill, id) => (
                          <Center>
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
                            w="200px"
                            bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                            color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                            key={id}
                          >
                            <Center>
                              {" "}
                              <Stack align="center">
                                
                                <Image
                                  src={skillsImage(skill)}
                                  // borderRadius="50%"
                                  alt={skill}
                                  w="100px"
                                  h="100px"
                                />
                                <Heading w="100%" fontFamily="poppins" mt={4} size="xs">
                                  {skill}
                                </Heading>
                              </Stack>
                            </Center>
                          </Box>
                          </Center>
                        ))}
                      </SimpleGrid>
                      </Box>
                  

        </Stack>
        </Center>
      </Box>
      </Tablet>
      <Mobile>
      <Box pt={15} pb={10} textAlign="center" fontFamily="poppins"  bg={colorMode === "light" ? "#edf2f8" : "#0f1624"}>
        <Heading
          data-aos="flip-down"
          className={styles.MobHeading}
          mt={10}
          size="2xl"
          fontFamily="poppins"
        >
          {" "}
           My<span style={{ color: "#dc143c" }}> Skills </span> 
        </Heading>
        <Center>
        <Stack data-aos="zoom-out-right" w="80%" m="auto" align="center">
         

         <Box mt="40px" >
           <Heading fontFamily="poppins" className={styles.MoBSubHead} ml={5} textAlign="left">Soft Skills</Heading>
                 <SimpleGrid mt={5} columns={2} spacing={10}>
                                 {SoftSkill.map((skill, id) => (
                                   <Center>
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
                                     w="200px"
                                     h="150px"
                                     bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                                     color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                                     key={id}
                                   >
                                     <Center>
                                       {" "}
                                       <Stack align="center">
                                         
                                         <Image
                                           src={skillsImage(skill)}
                                           // borderRadius="50%"
                                           alt={skill}
                                           w="80px"
                                           h="80px"
                                         />
                                         <Text w="100%" fontFamily="poppins" mt={4} fontSize="12px">
                                           {skill}
                                         </Text>
                                       </Stack>
                                     </Center>
                                   </Box>
                                   </Center>
                                 ))}
                               </SimpleGrid>
                               </Box>
                               <Box >
           <Heading fontFamily="poppins" mt={5} className={styles.MoBSubHead} ml={5} textAlign="left">Tech Skills</Heading>
                 <SimpleGrid mt={5} columns={2} spacing={10}>
                                 {TeckSkill.map((skill, id) => (
                                   <Center>
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
                                     w="200px"
                                     h="150px"
                                     bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                                     color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                                     key={id}
                                   >
                                     <Center>
                                       {" "}
                                       <Stack align="center">
                                         
                                         <Image
                                           src={skillsImage(skill)}
                                           // borderRadius="50%"
                                           alt={skill}
                                           w="80px"
                                           h="80px"
                                         />
                                         <Text w="100%" fontFamily="poppins" mt={4} fontSize="12px">
                                           {skill}
                                         </Text>
                                       </Stack>
                                     </Center>
                                   </Box>
                                   </Center>
                                 ))}
                               </SimpleGrid>
                               </Box>
                           
         
                 </Stack>
        </Center>
      </Box>
      </Mobile>
    </>
  );
};
