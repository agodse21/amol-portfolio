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
import LovodoImg from "../../Assets/projectImg/lovodo.jpg";
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
                  src={LovodoImg}
                ></Image>
                <Heading mt={3} size="md">
                  Lovodo.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    LOVODA is a women's fashion brand for the newest & trending
                    fashion accessories and online shop that offered high
                    quality products at an affordable price.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    React js | Redux | Javascript | CSS3 | Firebase | HTML5
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collaborative project built by a team of 4 executed in 5
                    days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/vkrajput26/-crazy-science-2420"
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
                            href="https://lovoda-clone-three.vercel.app/"
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
                    Web application to show the current location's
                    weather,search city weather and upcoming week weather
                    forecast.showing the current map accourding to the location.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    React js | Redux | HTML5 | CSS3 | Chakra-UI | Javascript |
                    Weather-API
                  </Text>
                  {/* <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text> */}
                  <Center>
                    <Flex w="70%" mt="60px" p={2}>
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
                            href="https://netlify-thinks-agodse9-gmail-com-is-great-686c3.netlify.app/"
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
                    Bewakoof is Ecommerce site for the newest & trending fashion
                    accessories and online shop that offered high quality
                    products at an affordable price. You can shop
                    cloths,accessories.
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
                    <Flex w="70%" mt="36px" p={2}>
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
                  {/* <Text fontSize="13px" mt={3}>
                    A Individual project, built in 5 days.
                  </Text> */}
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
                  src={foodRecipeImg}
                ></Image>
                <Heading mt={3} size="md">
                  Food Recipe App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    This is an food recipe app, you can Search food recipes,See
                    different recipes,Recipe of the day
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  {/* <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text> */}
                  <Center>
                    <Flex w="70%" mt="75px" p={2}>
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
                    This a small mini project in that you can Search Star war
                    Character And read the description of searched character.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  {/* <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text> */}
                  <Center>
                    <Flex w="70%" mt="35px" p={2}>
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
                            href="https://unique-lolly-e04c94.netlify.app/"
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
                  src={LovodoImg}
                ></Image>
                <Heading mt={3} size="md">
                  Lovodo.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    LOVODA is a women's fashion brand for the newest & trending
                    fashion accessories and online shop that offered high
                    quality products at an affordable price.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    React js | Redux | Javascript | CSS3 | Firebase | HTML5
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collaborative project built by a team of 4 executed in 5
                    days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/vkrajput26/-crazy-science-2420"
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
                            href="https://lovoda-clone-three.vercel.app/"
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
                    Web application to show the current location's
                    weather,search city weather and upcoming week weather
                    forecast.showing the current map accourding to the location.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    React js | Redux | HTML5 | CSS3 | Chakra-UI | Javascript |
                    Weather-API
                  </Text>
                  {/* <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text> */}
                  <Center>
                    <Flex w="70%" mt="60px" p={2}>
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
                            href="https://netlify-thinks-agodse9-gmail-com-is-great-686c3.netlify.app/"
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
                    Bewakoof is Ecommerce site for the newest & trending fashion
                    accessories and online shop that offered high quality
                    products at an affordable price. You can shop
                    cloths,accessories.
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
                    <Flex w="70%" mt="36px" p={2}>
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
                  {/* <Text fontSize="13px" mt={3}>
                    A Individual project, built in 5 days.
                  </Text> */}
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
                  src={foodRecipeImg}
                ></Image>
                <Heading mt={3} size="md">
                  Food Recipe App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    This is an food recipe app, you can Search food recipes,See
                    different recipes,Recipe of the day
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  {/* <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text> */}
                  <Center>
                    <Flex w="70%" mt="75px" p={2}>
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
                    This a small mini project in that you can Search Star war
                    Character And read the description of searched character.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  {/* <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text> */}
                  <Center>
                    <Flex w="70%" mt="35px" p={2}>
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
                            href="https://unique-lolly-e04c94.netlify.app/"
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
                  src={LovodoImg}
                ></Image>
                <Heading mt={3} size="md">
                  Lovodo.com Clone
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    LOVODA is a women's fashion brand for the newest & trending
                    fashion accessories and online shop that offered high
                    quality products at an affordable price.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    React js | Redux | Javascript | CSS3 | Firebase | HTML5
                  </Text>
                  <Text fontSize="13px" mt={3}>
                    A collaborative project built by a team of 4 executed in 5
                    days.
                  </Text>
                  <Center>
                    <Flex w="70%" mt={9} p={2}>
                      <Box className={styles.liveIcons}>
                        <Center>
                          <a
                            className={styles.SocialIcon}
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/vkrajput26/-crazy-science-2420"
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
                            href="https://lovoda-clone-three.vercel.app/"
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
                    Web application to show the current location's
                    weather,search city weather and upcoming week weather
                    forecast.showing the current map accourding to the location.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    React js | Redux | HTML5 | CSS3 | Chakra-UI | Javascript |
                    Weather-API
                  </Text>
                  {/* <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text> */}
                  <Center>
                    <Flex w="70%" mt="60px" p={2}>
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
                            href="https://netlify-thinks-agodse9-gmail-com-is-great-686c3.netlify.app/"
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
                    Bewakoof is Ecommerce site for the newest & trending fashion
                    accessories and online shop that offered high quality
                    products at an affordable price. You can shop
                    cloths,accessories.
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
                    <Flex w="70%" mt="36px" p={2}>
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
                  {/* <Text fontSize="13px" mt={3}>
                    A Individual project, built in 5 days.
                  </Text> */}
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
                  src={foodRecipeImg}
                ></Image>
                <Heading mt={3} size="md">
                  Food Recipe App
                </Heading>
                <Box mt={3} textAlign="left">
                  <Text fontSize="15px">
                    This is an food recipe app, you can Search food recipes,See
                    different recipes,Recipe of the day
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  {/* <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text> */}
                  <Center>
                    <Flex w="70%" mt="75px" p={2}>
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
                    This a small mini project in that you can Search Star war
                    Character And read the description of searched character.
                  </Text>
                  <Text fontSize="15px" mt={3}>
                    <span style={{ color: "#dc143c", fontWeight: "bold" }}>
                      Tech Stack :
                    </span>{" "}
                    HTML5 | CSS3 | Javascript
                  </Text>
                  {/* <Text fontSize="13px" mt={3}>
                    A Solo project, built in 2 days.
                  </Text> */}
                  <Center>
                    <Flex w="70%" mt="35px" p={2}>
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
                            href="https://unique-lolly-e04c94.netlify.app/"
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
