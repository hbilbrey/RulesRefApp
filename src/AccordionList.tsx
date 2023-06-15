import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import React from "react";

interface conditionsObject {
  title: string;
  description: string;
  penalties: {};
}

interface Props {
  conditions: conditionsObject[];
}

const AccordionList = ({ conditions }: Props) => {
  return (
    <Accordion m={2} defaultIndex={[0]}>
      {conditions.map((condition, index) => (
        <AccordionItem key={index} w={[300, 400, 800]}>
          <h3>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                {condition.title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h3>
          <AccordionPanel pb={4} textAlign={"left"}>
            {condition.description}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionList;
