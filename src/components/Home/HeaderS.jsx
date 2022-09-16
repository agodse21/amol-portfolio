import { Box, Circle, Image, Stack } from "@chakra-ui/react";
import styles from "./Home.module.css"

function HeaderSection(){
    return (
<Stack  z-index="-1" ml={250} mt="280px"
  direction={['column','row']}
  >
    <Circle  position="absolute" bg="#dc143c" opacity="0.9" w="350px" h="350px" alignSelf="flex-end" >
<Box mt={3} className={styles.profilePicture}>

</Box>
    </Circle>
    </Stack>
    )
}
export default HeaderSection;