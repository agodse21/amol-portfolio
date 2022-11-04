import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
  useColorMode,
  useToast,
} from "@chakra-ui/react";
import styles from "./contact.module.css";
import {
  BsGithub,
  BsLinkedin,
  BsTwitter,
  BsTelephoneFill,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
const initialInput = {
  user_name: "",
  user_email: "",
  message: "",
};
export const Contact = () => {
  const form = useRef();

  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();
  const [input, setInput] = useState(initialInput);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const sendEmail = (e) => {
    e.preventDefault();

    if (
      input.user_name == "" ||
      input.user_email == "" ||
      input.message == ""
    ) {
      toast({
        title: `input feild is empty`,
        status: "error",
        isClosable: true,
      });
    } else {
      // toast({
      //     title: `Message Send Successfully!`,
      //     status:'success',
      //     isClosable: true,
      //   });
      emailjs
        .sendForm(
          "service_ni42gpi",
          "template_vhl15p5",
          form.current,
          "-aEsO9Cy5cXe58Gfw"
        )
        .then(
          (result) => {
            console.log(result.text);
            toast({
              title: `Message Send Successfully!`,
              status: "success",
              isClosable: true,
            });
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <Desktop>
        <Box
          pt={5}
          pb={10}
          fontFamily="poppins"
          textAlign="center"
         
        >
          <Heading
            data-aos="zoom-in"
            className={styles.Heading}
            mt={5}
            size="2xl"
            fontFamily="poppins"
          >
            {" "}
            Take a <span style={{ color: "#dc143c" }}> Coffee </span>And{" "}
            <span style={{ color: "#dc143c" }}>chat</span> with me
          </Heading>
          <Flex ml={20} mt={10} mr={10} alignItems="center">
            <Center>
              <Box data-aos="zoom-in" ml={20}>
                <Center>
                  <Box>
                    <Flex alignItems="center">
                      <Center>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="https://github.com/agodse21"
                        >
                          <Box className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <BsGithub
                                size={30}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Github
                              </Text>{" "}
                            </Flex>
                          </Box>
                        </a>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="https://www.linkedin.com/in/amol-godse-patil/"
                        >
                          {" "}
                          <Box ml={10} className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <BsLinkedin
                                size={25}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Linkedin
                              </Text>{" "}
                            </Flex>
                          </Box>
                        </a>
                      </Center>
                    </Flex>
                    <Flex mt={5}>
                      {" "}
                      <Center>
                        {" "}
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="mailto:agodse9@gmail.com"
                        >
                          {" "}
                          <Box className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <SiGmail
                                size={25}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Gmail
                              </Text>{" "}
                            </Flex>
                          </Box>
                        </a>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="https://api.whatsapp.com/send/?phone=919860672023&text=I%27m+interested+to+talk+with+you!&type=phone_number&app_absent=0"
                        >
                        <Box ml={10} className={styles.iconBox}>
                          <Flex justifyContent="center" alignItems="center">
                            <BsTelephoneFill
                              size={25}
                              style={{ marginRight: "10px" }}
                            />
                         
                            <Text fontFamily="poppins" fontSize="22px">
                              9860672023
                            </Text>{" "}
                          </Flex>
                        </Box>
                        </a>
                      </Center>
                    </Flex>
                  </Box>
                </Center>
                <Center>
                  <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <Input
                      type="text"
                      value={input.user_name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      isInvalid
                      name="user_name"
                      errorBorderColor="crimson"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    <Input
                      mt={5}
                      type="email"
                      value={input.user_email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      isInvalid
                      name="user_email"
                      errorBorderColor="crimson"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    {/* <Input
               mt={5}
             //   isInvalid
               errorBorderColor="crimson"
               type="number"
             //   value={input.mobile}
               onChange={handleInputChange}
               placeholder="Mobile"
               name="mobile"
               _placeholder={
                 colorMode === "light"
                   ? { opacity: 1, color: "black" }
                   : { opacity: 0.5, color: "white" }
               }
             /> */}
                    <Textarea
                      value={input.message}
                      onChange={handleInputChange}
                      mt={5}
                      placeholder="Type Your Message"
                      isInvalid
                      errorBorderColor="crimson"
                      name="message"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    <Input
                      w="100%"
                      type="submit"
                      value="Send"
                      bg="#dc143c"
                      color="white"
                      mt={5}
                      mb={10}
                      _hover={{ background: "#262f82" }}
                    />
                  </form>
                </Center>
              </Box>
            </Center>

            <Spacer />
            <Flex ml={10} w="50%" mt={10} mr={10}>
              {/* <Box w="50%" ml={10} textAlign="left" fontFamily="poppins" mr={10}> */}
              <Center>
                {" "}
                <Box data-aos="zoom-in" ml={10} className={styles.img}>
                  {" "}
                </Box>
              </Center>
              {/* </Box> */}
            </Flex>
          </Flex>
          <Box>
            <Text className={styles.texts} >
              Designed and Developed by Amol Godse,© Copyright 2022. All rights
              reserved
            </Text>
          </Box>
        </Box>
      </Desktop>
      <Tablet>
      <Box
          pt={10}
          pb={10}
          fontFamily="poppins"
          textAlign="center"
         
        >
          <Heading
            data-aos="zoom-in"
            className={styles.TabHeading}
            mt={5}
           
            fontFamily="poppins"
          >
            {" "}
            Take a <span style={{ color: "#dc143c" }}> Coffee </span>And{" "}
            <span style={{ color: "#dc143c" }}>chat</span> with me
          </Heading>
          <Center>          <Stack  mt={10}  alignItems="center">
            <Center>
              <Box data-aos="zoom-in" >
                <Center>
                  <Box>
                    <Stack alignItems="center">
                      <Center>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="https://github.com/agodse21"
                        >
                          <Box className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <BsGithub
                                size={30}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Github
                              </Text>{" "}
                            </Flex>
                          </Box>
                        </a>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="https://www.linkedin.com/in/amol-godse-patil/"
                        >
                          {" "}
                          <Box ml={10} className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <BsLinkedin
                                size={25}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Linkedin
                              </Text>{" "}
                            </Flex>
                          </Box>
                        </a>
                      </Center>
                    </Stack>
                    <Flex mt={5}>
                      {" "}
                      <Center>
                        {" "}
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="mailto:agodse9@gmail.com"
                        >
                          {" "}
                          <Box className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <SiGmail
                                size={25}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Gmail
                              </Text>{" "}
                            </Flex>
                          </Box>
                        </a>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="https://api.whatsapp.com/send/?phone=919860672023&text=I%27m+interested+to+talk+with+you!&type=phone_number&app_absent=0"
                        >
                        <Box ml={10} className={styles.iconBox}>
                          <Flex justifyContent="center" alignItems="center">
                            <BsTelephoneFill
                              size={25}
                              style={{ marginRight: "10px" }}
                            />
                            <Text fontFamily="poppins" fontSize="22px">
                              9860672023
                            </Text>{" "}
                          </Flex>
                        </Box>
                        </a>
                      </Center>
                    </Flex>
                  </Box>
                </Center>
                <Center>
                  <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <Input
                      type="text"
                      value={input.user_name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      isInvalid
                      name="user_name"
                      errorBorderColor="crimson"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    <Input
                      mt={5}
                      type="email"
                      value={input.user_email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      isInvalid
                      name="user_email"
                      errorBorderColor="crimson"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    
                    <Textarea
                      value={input.message}
                      onChange={handleInputChange}
                      mt={5}
                      placeholder="Type Your Message"
                      isInvalid
                      errorBorderColor="crimson"
                      name="message"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    <Input
                      w="100%"
                      type="submit"
                      value="Send"
                      bg="#dc143c"
                      color="white"
                      mt={5}
                      mb={10}
                      _hover={{ background: "#262f82" }}
                    />
                  </form>
                </Center>
              </Box>
            </Center>

            <Spacer />
            
            <Stack  w="70%" mt={10} >
               <Center>
                 <Box data-aos="zoom-in"  className={styles.img}>
                  {" "}
                </Box>
              </Center>
              {/* </Box> */}
            </Stack>
          </Stack>
          </Center>

          <Box>
            <Text className={styles.texts} fontSize="13px">
              Designed and Developed by Amol Godse,© Copyright 2022. All rights
              reserved
            </Text>
          </Box>
        </Box>
      </Tablet>
      <Mobile>
        <Box
          pt={10}
          pb={10}
          fontFamily="poppins"
          textAlign="center"
         
        >
          <Heading
            data-aos="zoom-in"
            className={styles.MobHeading}
            mt={5}
            size="md"
            fontFamily="poppins"
          >
            {" "}
            Take a <span style={{ color: "#dc143c" }}> Coffee </span>And{" "}
            <span style={{ color: "#dc143c" }}>chat</span> with me
          </Heading>
          <Center>          <Stack  mt={10}  alignItems="center">
            <Center>
              <Box data-aos="zoom-in" >
                <Center>
                  <Box>
                    <Stack alignItems="center">
                      <Center>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="https://github.com/agodse21"
                        >
                          <Box className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <BsGithub
                                size={30}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Github
                              </Text>{" "}
                            </Flex>
                          </Box>
                        </a>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="https://www.linkedin.com/in/amol-godse-patil/"
                        >
                          {" "}
                          <Box ml={10} className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <BsLinkedin
                                size={25}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Linkedin
                              </Text>{" "}
                            </Flex>
                          </Box>
                        </a>
                      </Center>
                    </Stack>
                    <Flex mt={5}>
                      {" "}
                      <Center>
                        {" "}
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="mailto:agodse9@gmail.com"
                        >
                          {" "}
                          <Box className={styles.iconBox}>
                            <Flex justifyContent="center" alignItems="center">
                              <SiGmail
                                size={25}
                                style={{ marginRight: "10px" }}
                              />
                              <Text fontFamily="poppins" fontSize="22px">
                                Gmail
                              </Text>{" "}
                            </Flex>
                          </Box>
                        </a>
                        <a
                          className={styles.SocialIcon}
                          target="_blank"
                          href="https://api.whatsapp.com/send/?phone=919860672023&text=I%27m+interested+to+talk+with+you!&type=phone_number&app_absent=0"
                        >
                        <Box ml={10} className={styles.iconBox}>
                          <Flex justifyContent="center" alignItems="center">
                            <BsTelephoneFill
                              size={25}
                              style={{ marginRight: "10px" }}
                            />
                            <Text fontFamily="poppins" fontSize="22px">
                              9860672023
                            </Text>{" "}
                          </Flex>
                        </Box>
                        </a>
                      </Center>
                    </Flex>
                  </Box>
                </Center>
                <Center>
                  <form ref={form} onSubmit={sendEmail} className={styles.form}>
                    <Input
                      type="text"
                      value={input.user_name}
                      onChange={handleInputChange}
                      placeholder="Full Name"
                      isInvalid
                      name="user_name"
                      errorBorderColor="crimson"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    <Input
                      mt={5}
                      type="email"
                      value={input.user_email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      isInvalid
                      name="user_email"
                      errorBorderColor="crimson"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    
                    <Textarea
                      value={input.message}
                      onChange={handleInputChange}
                      mt={5}
                      placeholder="Type Your Message"
                      isInvalid
                      errorBorderColor="crimson"
                      name="message"
                      _placeholder={
                        colorMode === "light"
                          ? { opacity: 1, color: "black" }
                          : { opacity: 0.5, color: "white" }
                      }
                    />
                    <Input
                      w="100%"
                      type="submit"
                      value="Send"
                      bg="#dc143c"
                      color="white"
                      mt={5}
                      mb={10}
                      _hover={{ background: "#262f82" }}
                    />
                  </form>
                </Center>
              </Box>
            </Center>

            <Spacer />
            
            <Stack  w="70%" mt={10} >
               <Center>
                 <Box data-aos="zoom-in"  className={styles.img}>
                  {" "}
                </Box>
              </Center>
              {/* </Box> */}
            </Stack>
          </Stack>
          </Center>

          <Box w="85%"  m="auto">
            <Text className={styles.texts}  fontSize="13px">
              Designed and Developed by Amol Godse,© Copyright 2022. All rights
              reserved
            </Text>
          </Box>
        </Box>
      </Mobile>
    </>
  );
};
