import { Box, Center, CircularProgress, CircularProgressLabel, Flex, Heading, Spacer, Text, useColorMode } from '@chakra-ui/react'
import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import styles from "./Github.module.css";
import { FaCode,FaGit } from "react-icons/fa";
import { RiLightbulbFlashLine } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { BiUserVoice } from "react-icons/bi";
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
export const GithubCalender = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      
   <Desktop>
    <Box mt="-350px">
    {/* <Box bgColor={colorMode === 'light' ? 'black' : 'white'} className={styles.line}></Box> */}
       <Heading 
      // / mt="15px"
       mb="25px"
          data-aos="flip-down"
          className={styles.Heading}
          size="xl"
          fontFamily="poppins"
        >
          {" "}
           Github<span style={{ color: "#dc143c" }}> Activity </span> 
        </Heading>
      <Center className={styles.boxes} mt={10}  data-aos="flip-down">

      <GitHubCalendar username="agodse21" />
      </Center>
      <Box mt="40px">
     
        <Center >
          <Flex w="55%"  data-aos="flip-down" justifyContent="space-between">
            <Box>  <Flex className={styles.texts} alignItems="center"><FaCode size="30px" /> <Text ml={5}>1200+ Hours Practical Coding</Text></Flex>
        
            <Flex className={styles.texts} mt={5} alignItems="center"><RiLightbulbFlashLine size="30px" /> <Text ml={5}>300+ Hours Data Structures & Algorithms</Text></Flex>
            <Flex className={styles.texts} mt={5} alignItems="center"><BiUserVoice size="30px" /> <Text ml={5}>100+ Hours Soft Skill Development</Text></Flex>
          
            </Box>
            <Spacer />
            
            <Box>  <Flex className={styles.texts} alignItems="center"><AiOutlineFundProjectionScreen size="30px" /> <Text ml={3}>12+ Projects</Text></Flex>
            <Flex className={styles.texts} mt={5} alignItems="center"><VscGraph size="30px" /> <Text ml={3}>70+ Mini Projects</Text></Flex>
            <Flex className={styles.texts} mt={5} alignItems="center"><FaGit size="30px" /> <Text ml={3}>136+ Git Commits</Text></Flex>
        
            
           </Box>
          </Flex>
       
</Center>
      </Box>
    </Box>
    </Desktop>
  <Tablet>
  <Box mt="-50px" mb={10}>
    {/* <Box bgColor={colorMode === 'light' ? 'black' : 'white'} className={styles.line}></Box> */}
       <Heading 
      // / mt="15px"
       mb="25px"
          data-aos="flip-down"
          className={styles.TabHeading}
          size="xl"
          fontFamily="poppins"
        >
          {" "}
           Github<span style={{ color: "#dc143c" }}> Activity </span> 
        </Heading>
      <Center className={styles.boxes} w="80%" m="auto" mt={10}  data-aos="flip-down">

      <GitHubCalendar username="agodse21" />
      </Center>
      <Box mt="40px">
     
        <Center >
          <Flex w="75%"  data-aos="flip-down" justifyContent="space-between">
            <Box>  <Flex className={styles.texts} alignItems="center"><FaCode size="30px" /> <Text ml={5}>1200+ Hours Practical Coding</Text></Flex>
        
            <Flex className={styles.texts} mt={5} alignItems="center"><RiLightbulbFlashLine size="30px" /> <Text ml={5}>300+ Hours Data Structures & Algorithms</Text></Flex>
            <Flex className={styles.texts} mt={5} alignItems="center"><BiUserVoice size="30px" /> <Text ml={5}>100+ Hours Soft Skill Development</Text></Flex>
          
            </Box>
            <Spacer />
            
            <Box>  <Flex className={styles.texts} alignItems="center"><AiOutlineFundProjectionScreen size="30px" /> <Text ml={3}>12+ Projects</Text></Flex>
            <Flex className={styles.texts} mt={5} alignItems="center"><VscGraph size="30px" /> <Text ml={3}>70+ Mini Projects</Text></Flex>
            <Flex className={styles.texts} mt={5} alignItems="center"><FaGit size="30px" /> <Text ml={3}>136+ Git Commits</Text></Flex>
        
            
           </Box>
          </Flex>
       
</Center>
      </Box>
    </Box>
  </Tablet>
  <Mobile>
  <Box mt="-50px" mb="30px">
    {/* <Box bgColor={colorMode === 'light' ? 'black' : 'white'} className={styles.line}></Box> */}
       <Heading 
      // / mt="15px"
       mb="25px"
          data-aos="flip-down"
          className={styles.MobHeading}
          size="xl"
          fontFamily="poppins"
        >
          {" "}
           Github<span style={{ color: "#dc143c" }}> Activity </span> 
        </Heading>
      <Center w="90%" m="auto" className={styles.boxes} mt={10}  data-aos="flip-down">

      <GitHubCalendar  username="agodse21" />
      </Center>
      <Box mt="40px">
     
        <Center >
          <Flex w="95%"  data-aos="flip-down" justifyContent="space-between">
            <Box>  <Flex className={styles.texts} alignItems="center"><FaCode size="15px" /> <Text fontSize="12px" ml={2}>1200+ Hours Practical Coding</Text></Flex>
      
            <Flex class0ame={styles.texts} mt={5} alignItems="center"><RiLightbulbFlashLine size="15px" /> <Text fontSize="12px" ml={2}>300+ Hours Data Structures & Algorithms</Text></Flex>
            <Flex className={styles.texts} mt={5} alignItems="center"><BiUserVoice size="15px" /> <Text fontSize="12px" ml={2}>100+ Hours Soft Skill Development</Text></Flex>
          
            </Box>
            <Spacer />
            
            <Box>  <Flex className={styles.texts} alignItems="center"><AiOutlineFundProjectionScreen size="15px" /> <Text fontSize="12px" ml={2}>12+ Projects</Text></Flex>
            <Flex className={styles.texts} mt={5} alignItems="center"><VscGraph size="15px" /> <Text fontSize="12px" ml={2}>70+ Mini Projects</Text></Flex>
            <Flex className={styles.texts} mt={5} alignItems="center"><FaGit size="15px" /> <Text fontSize="12px" ml={2}>136+ Git Commits</Text></Flex>
        
            
           </Box>
          </Flex>
       
</Center>
      </Box>
    </Box>
  </Mobile>
    </>
  )
}
