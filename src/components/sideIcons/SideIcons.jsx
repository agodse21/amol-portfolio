import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, useColorMode } from "@chakra-ui/react";
import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import styles from './SideIcons.module.css';
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

function SideBarIcons(){
  const {colorMode}=useColorMode();
return(<><Desktop>
  <Box className={styles.sideicon}>


<a className={styles.SocialIcon} target="_blank" href="mailto:agodse9@gmail.com">
  <FiMail 
  size={30}
   />
</a>
<a className={styles.SocialIcon} target="_blank" href="https://github.com/agodse21">
  <FiGithub 
  size={30}
   />
</a>
<a className={styles.SocialIcon} target="_blank" href="https://www.linkedin.com/in/amol-godse-patil/" >
 
  <FiLinkedin 
  size={30} 
  />
</a>
<Box bgColor={colorMode === 'light' ? 'black' : 'white'} className={styles.line}></Box>

</Box>
  </Desktop>
  <Tablet>
  <Box className={styles.mobicon}>


<a className={styles.SocialIcon} target="_blank" href="mailto:agodse9@gmail.com">
  <FiMail 
  size={30}
   />
</a>
<a className={styles.SocialIcon} target="_blank" href="https://github.com/agodse21">
  <FiGithub 
  size={30}
   />
</a>
<a className={styles.SocialIcon} target="_blank" href="https://www.linkedin.com/in/amol-godse-patil/" >
 
  <FiLinkedin 
  size={30} 
  />
</a>
<Box bgColor={colorMode === 'light' ? 'black' : 'white'} className={styles.line}></Box>

</Box>

  </Tablet>
  <Mobile>
  <Box className={styles.mobicon}>


<a className={styles.SocialIcon} target="_blank" href="mailto:agodse9@gmail.com">
  <FiMail 
  size={20}
   />
</a>
<a className={styles.SocialIcon} target="_blank" href="https://github.com/agodse21">
  <FiGithub 
  size={20}
   />
</a>
<a className={styles.SocialIcon} target="_blank" href="https://www.linkedin.com/in/amol-godse-patil/" >
 
  <FiLinkedin 
  size={20} 
  />
</a>
<Box bgColor={colorMode === 'light' ? 'black' : 'white'} className={styles.line}></Box>

</Box>

  </Mobile>
  </>

)
};

export default SideBarIcons;