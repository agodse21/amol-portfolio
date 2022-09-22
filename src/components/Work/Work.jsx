import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Spacer,
  Text,
  useColorMode,
} from "@chakra-ui/react";

import styles from "./work.module.css";
import { GrGithub } from "react-icons/gr";
import { GoLinkExternal } from "react-icons/go";
import bewakoofImg from "../../Assets/projectImg/bewakoof.jpg";
import foodRecipeImg from "../../Assets/projectImg/foodRecipe.jpg";
import shopImg from "../../Assets/projectImg/shop.com.jpg";
import StarWarImg from "../../Assets/projectImg/star war.jpg";
import WeatherImg from "../../Assets/projectImg/weatherApp.jpg";
import { MDBRipple } from "mdb-react-ui-kit";
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
export const Work = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      {" "}
      <Desktop>
        <Box
          fontFamily="poppins"
          mt="-250px"
          pt={10}
          pb={20}
          bg={colorMode === "light" ? "#edf2f8" : "#0f1624"}
          textAlign="center"
        >
          <Heading
            data-aos="fade-up"
            className={styles.Heading}
            size="2xl"
            fontFamily="poppins"
          >
            {" "}
            Some <span style={{ color: "#dc143c" }}>things</span> I've Built
          </Heading>
          <Center>
            <SimpleGrid
              data-aos="fade-up"
              w="75%"
              ml={20}
              mt={20}
              mr={10}
              columns={[1, 2, 3]}
              spacing="60px"
            >
              <Box
                className={styles.boxes}
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={bewakoofImg}
                ></Image>
                <Heading mt={3} size="md">
                  Bewakoof.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Bewakoof is Ecommerce site,You can shop
                    cloths,accessories.Fully functional bewakoof clone made with
                    the help of HTML,CSS and Javascript.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collabrative project, built in 5 days by a team of 4
                    members.Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/Bewakoof.com"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://shiny-elf-f3e67f.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={shopImg}
                ></Image>
                <Heading mt={3} size="md">
                  Shop.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    A cloned Full Stack Web application of Shop.com is All in
                    one Ecommerce site,You can shop all type of
                    accessories,nutrition,cloths etc.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | React Js | Chakra UI | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Individual project, built in 5 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={7} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/super-donkey-7341"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://isnt-agodse9-gmail-com-awesome-0c048.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={WeatherImg}
                ></Image>
                <Heading mt={3} size="md">
                  Weather App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    You can see your current Weather or you can weather search
                    by your city.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript | weather API
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="70px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/weather-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://singular-florentine-142a57.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>{" "}
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={foodRecipeImg}
                ></Image>
                <Heading mt={3} size="md">
                  Food Recipe App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Search food recipes,see different recipes,Recipe of the day
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/Food-Recipe-App"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://silver-marigold-989f09.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={StarWarImg}
                ></Image>
                <Heading mt={3} size="md">
                  Star War Character Search App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Search And see Star war Character description
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/Star-war-character-search-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://starlit-boba-47f65b.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>
      </Desktop>
      <Tablet>
        <Box
          fontFamily="poppins"
          pt={5}
          pb={20}
          // mt="10px"
          bg={colorMode === "light" ? "#edf2f8" : "#0f1624"}
          textAlign="center"
        >
          <Heading
            data-aos="fade-up"
            className={styles.TabHeading}
            size="xl"
            fontFamily="poppins"
          >
            Some <span style={{ color: "#dc143c" }}>things</span> I've Built
          </Heading>
          <Center>
            <SimpleGrid
              data-aos="fade-up"
              w="75%"
              mt={20}
              columns={2}
              spacing="60px"
            >
              <Box
                className={styles.boxes}
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={bewakoofImg}
                ></Image>
                <Heading mt={3} size="md">
                  Bewakoof.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Bewakoof is Ecommerce site,You can shop
                    cloths,accessories.Fully functional bewakoof clone made with
                    the help of HTML,CSS and Javascript.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collabrative project, built in 5 days by a team of 4
                    members.Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/Bewakoof.com"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://shiny-elf-f3e67f.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={shopImg}
                ></Image>
                <Heading mt={3} size="md">
                  Shop.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    A cloned Full Stack Web application of Shop.com is All in
                    one Ecommerce site,You can shop all type of
                    accessories,nutrition,cloths etc.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | React Js | Chakra UI | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Individual project, built in 5 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/super-donkey-7341"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://isnt-agodse9-gmail-com-awesome-0c048.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={WeatherImg}
                ></Image>
                <Heading mt={3} size="md">
                  Weather App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    You can see your current Weather or you can weather search
                    by your city.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript | weather API
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="70px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/weather-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://singular-florentine-142a57.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>{" "}
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={foodRecipeImg}
                ></Image>
                <Heading mt={3} size="md">
                  Food Recipe App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Search food recipes,see different recipes,Recipe of the day
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/Food-Recipe-App"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://silver-marigold-989f09.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={StarWarImg}
                ></Image>
                <Heading mt={3} size="md">
                  Star War Character Search App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Search And see Star war Character description
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/Star-war-character-search-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://starlit-boba-47f65b.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>
      </Tablet>
      <Mobile>
        <Box
          fontFamily="poppins"
          pt={5}
          pb={20}
          bg={colorMode === "light" ? "#edf2f8" : "#0f1624"}
          textAlign="center"
        >
          <Heading
            data-aos="fade-up"
            className={styles.MobHeading}
            size="xl"
            fontFamily="poppins"
          >
            Some <span style={{ color: "#dc143c" }}>things</span> I've Built
          </Heading>
          <Center>
            <SimpleGrid
              data-aos="fade-up"
              w="75%"
              mt={25}
              columns={1}
              spacing="60px"
            >
              <Box
                className={styles.boxes}
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={bewakoofImg}
                ></Image>
                <Heading mt={3} size="md">
                  Bewakoof.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Bewakoof is Ecommerce site,You can shop
                    cloths,accessories.Fully functional bewakoof clone made with
                    the help of HTML,CSS and Javascript.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collabrative project, built in 5 days by a team of 4
                    members.Team lead by me.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/Bewakoof.com"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://shiny-elf-f3e67f.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={shopImg}
                ></Image>
                <Heading mt={3} size="md">
                  Shop.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    A cloned Full Stack Web application of Shop.com is All in
                    one Ecommerce site,You can shop all type of
                    accessories,nutrition,cloths etc.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | React Js | Chakra UI | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Individual project, built in 5 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={7} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/super-donkey-7341"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://isnt-agodse9-gmail-com-awesome-0c048.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={WeatherImg}
                ></Image>
                <Heading mt={3} size="md">
                  Weather App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    You can see your current Weather or you can weather search
                    by your city.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript | weather API
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="70px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/weather-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://singular-florentine-142a57.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>{" "}
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={foodRecipeImg}
                ></Image>
                <Heading mt={3} size="md">
                  Food Recipe App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Search food recipes,see different recipes,Recipe of the day
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/Food-Recipe-App"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://silver-marigold-989f09.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
              <Box
                borderRadius={5}
                p={5}
                bg={colorMode === "light" ? "#0f1624" : "#edf2f8"}
                color={colorMode === "light" ? "#edf2f8" : "#0f1624"}
                height="auto"
                className={styles.boxes}
              >
                <Image
                  m="auto"
                  w="300px"
                  borderRadius={5}
                  h="150px"
                  src={StarWarImg}
                ></Image>
                <Heading mt={3} size="md">
                  Star War Character Search App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    Search And see Star war Character description
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt="80px" p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/agodse21/Star-war-character-search-app"
                          >
                            <GrGithub size="30px" />
                          </a>
                        </Center>
                      </Box>

                      <Spacer />
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://starlit-boba-47f65b.netlify.app/"
                          >
                            <GoLinkExternal size="30px" />
                          </a>
                        </Center>
                      </Box>
                    </Flex>
                  </Center>
                </Box>
              </Box>
            </SimpleGrid>
          </Center>
        </Box>
      </Mobile>
    </>
  );
};
