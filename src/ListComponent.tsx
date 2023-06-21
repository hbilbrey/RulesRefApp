import { Divider, Link, List, ListItem } from "@chakra-ui/react";
import React from "react";

interface conditionsObject {
  title: string;
  description: string;
  penalties: {};
}

interface Props {
  conditions: conditionsObject[];
  searchQuery: string;
  onSelectCondition: (condition: number) => void;
}

const ListComponent = ({
  conditions,
  searchQuery,
  onSelectCondition,
}: Props) => {
  return (
    <List
      h="calc(75vh)"
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
      {conditions.map((condition, index) =>
        condition.title.toLowerCase().includes(searchQuery) ||
        condition.description.toLowerCase().includes(searchQuery) ? (
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
        ) : null
      )}
    </List>
  );
};

export default ListComponent;
