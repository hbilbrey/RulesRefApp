import { Box, HStack, Heading, Input, Tag, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";
import conditions from "./data/conditions";
import ListComponent from "./ListComponent";
import React from "react";

const StatusBoxes = () => {
  const [selectedCondition, changeSelectedCondition] = useState(0);
  const [searchString, changeSearchString] = useState("");

  const selectCondition = (index: number) => {
    changeSelectedCondition(index);
  };

  const updateSearchString = (search: string) => {
    changeSearchString(search);
  };

  const processStringMods = (input: string) => {
    const regexNeg = /(-\d)/; // Matches "-4 word" pattern
    const regexPos = /(\+\d)/; // Matches "+4 word" pattern
    const regexAny = /((?:-|\+)\d+)/; // Matches either plus or minus
    const parts = input.split(" ");

    return (
      <Text mt={4} fontSize="lg">
        {parts.map((part, index) => {
          if (regexNeg.test(part)) {
            return (
              <React.Fragment key={index}>
                {" "}
                <Tag backgroundColor={"rgba(255, 118, 118, 0.678)"}>{part}</Tag>
              </React.Fragment>
            );
          } else if (regexPos.test(part)) {
            return (
              <React.Fragment key={index}>
                {" "}
                <Tag backgroundColor={"rgba(118, 255, 171, 0.596)"}>{part}</Tag>
              </React.Fragment>
            );
          }
          return <React.Fragment key={index}> {part}</React.Fragment>;
        })}
      </Text>
    );
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

        {processStringMods(conditions[selectedCondition].description)}
      </Box>
    </HStack>
  );
};

export default StatusBoxes;
