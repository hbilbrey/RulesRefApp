import { Box, HStack, Heading, Input, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import conditions from "./data/conditions";
import ListComponent from "./ListComponent";

const StatusBoxes = () => {
  const [selectedCondition, changeSelectedCondition] = useState(0);
  const [searchString, changeSearchString] = useState("");

  const selectCondition = (index: number) => {
    changeSelectedCondition(index);
  };

  const updateSearchString = (search: string) => {
    changeSearchString(search);
  };

  return (
    <HStack w="full" spacing={5} align="flex">
      <Box w="50%">
        <Input
          onChange={(event) => updateSearchString(event.target.value)}
          marginBottom={5}
          placeholder="Search by title or contents (i.e. 'Dexterity')"
          size="md"
        />
        <ListComponent
          conditions={conditions}
          onSelectCondition={selectCondition}
          searchQuery={searchString.toLowerCase()}
        />
      </Box>
      <Box p={5} shadow="md" borderWidth="1px" w="50%">
        <Heading fontSize="2xl">{conditions[selectedCondition].title}</Heading>
        <Text mt={4} fontSize="lg">
          {conditions[selectedCondition].description}
        </Text>
      </Box>
    </HStack>
  );
};

export default StatusBoxes;
