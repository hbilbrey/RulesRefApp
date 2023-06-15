import conditions from "./data/conditions";
import StatusBoxes from "./StatusBoxes";
import {
  useColorMode,
  Box,
  Input,
  Text,
  useMediaQuery,
  IconButton,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import AccordionList from "./AccordionList";

function App() {
  const [isMobileL] = useMediaQuery("(max-width: 600px)", {
    ssr: true,
    fallback: false, // return false on the server, and re-evaluate on the client side
  });

  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <>
      <Box m={2}>
        <Text fontSize={isMobileL ? "4xl" : "5xl"}>
          Naruto d20 Rules Reference
        </Text>
        <Text fontSize={"3xl"}>Status Conditions</Text>

        <Input m={2} w={[300, 400, 800]} placeholder="Search" size="md" />
        {isMobileL ? (
          <AccordionList conditions={conditions} />
        ) : (
          <StatusBoxes />
        )}
      </Box>
      <IconButton
        rounded="full"
        aria-label="change theme"
        size="xs"
        position="absolute"
        top={4}
        right={4}
        onClick={toggleColorMode}
        icon={colorMode === "dark" ? <FaSun /> : <FaMoon />}
      />
    </>
  );
}

export default App;