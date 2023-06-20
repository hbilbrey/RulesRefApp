import { Divider, Link, List, ListItem } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";

interface conditionsObject {
  title: string;
  description: string;
  penalties: {};
}

interface Props {
  conditions: conditionsObject[];
  onSelectCondition: (condition: number) => void;
}

const ListComponent = ({ conditions, onSelectCondition }: Props) => {
  const [conditionIndex, setConditionIndex] = useState(0);

  return (
    <List
      h="calc(80vh)"
      overflow={"auto"}
      colorScheme="system"
      sx={{
        "&::-webkit-scrollbar": {
          width: "12px",
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: `rgba(0, 0, 0, 0.05)`,
        },
      }}
      spacing={3}
    >
      {conditions.map((condition, index) => (
        <React.Fragment key={index}>
          <ListItem key={index}>
            <Link
              fontSize="lg"
              key={index}
              onClick={() => onSelectCondition(index)}
            >
              {condition.title}
            </Link>
          </ListItem>
          <Divider />
        </React.Fragment>
      ))}
    </List>
  );
};

export default ListComponent;
