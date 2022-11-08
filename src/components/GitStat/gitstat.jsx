import { Box, Flex, VStack } from '@chakra-ui/react'
import React from 'react'
import styles from "./gitstat.module.css";
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

export const GitStat = () => {
  return (<>
  <Desktop>
  <Box m="auto"  w="28%" mt={50} mb={50}>
    
    <Flex justifyContent={"center"} >
    <img className={styles.box}  align="center" src="https://github-readme-stats.vercel.app/api?username=agodse21&theme=vision-friendly-dark&show_icons=true&locale=en" alt="agodse21" />
    
    <img className={styles.box} style={{marginLeft:"20px"}} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=agodse21&theme=vision-friendly-dark" alt="agodse21" />
   
    </Flex>
    <Flex mt ={30} justifyContent={"center"} ><img className={styles.box} align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=agodse21&theme=vision-friendly-dark&show_icons=true&locale=en&layout=compact" alt="agodse21" /></Flex>
    </Box>
  </Desktop>
  <Tablet>
    <Box m="auto"  w="68%" mt={50} mb={50}>
    
    <VStack justifyContent={"center"} >
    <img className={styles.box}  align="center" src="https://github-readme-stats.vercel.app/api?username=agodse21&theme=vision-friendly-dark&show_icons=true&locale=en" alt="agodse21" />
    
    <img className={styles.box} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=agodse21&theme=vision-friendly-dark" alt="agodse21" />
   
    </VStack>
    <Flex mt ={3} justifyContent={"center"} ><img className={styles.box} align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=agodse21&theme=vision-friendly-dark&show_icons=true&locale=en&layout=compact" alt="agodse21" /></Flex>
    </Box></Tablet>
    <Mobile>
      <Box w="120%">
    <Box m="auto"  w="68%" mt={50} mb={50}>
    
    <VStack justifyContent={"center"} >
    <img className={styles.box}  align="center" src="https://github-readme-stats.vercel.app/api?username=agodse21&theme=vision-friendly-dark&show_icons=true&locale=en" alt="agodse21" />
    
    <img className={styles.box} align="center" src="https://github-readme-streak-stats.herokuapp.com/?user=agodse21&theme=vision-friendly-dark" alt="agodse21" />
   
    </VStack>
    <Flex mt ={2} justifyContent={"center"} ><img className={styles.box} align="center" src="https://github-readme-stats.vercel.app/api/top-langs?username=agodse21&theme=vision-friendly-dark&show_icons=true&locale=en&layout=compact" alt="agodse21" /></Flex>
    </Box></Box>
    </Mobile>
    {/* <Default>Not mobile (desktop or laptop or tablet)</Default> */}
    </>)
}
