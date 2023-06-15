import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import conditions from "./data/conditions";
import ListComponent from "./ListComponent";

const StatusBoxes = () => {
  const [selectedCondition, changeSelectedCondition] = useState(0);

  function selectCondition(index: number) {
    changeSelectedCondition(index);
  }

  return (
    <HStack w="full" paddingX={40} spacing={5} align="flex">
      <Box w="50%">
        {/* <TableComponent conditions={conditions}/> */}
        <ListComponent conditions={conditions} />
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" w="50%">
        <Heading fontSize="xl">{conditions[selectedCondition].title}</Heading>
        <Text mt={4}>{conditions[selectedCondition].description}</Text>
      </Box>
    </HStack>
  );
};

export default StatusBoxes;
