import {
  Divider,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";

interface conditionsObject {
  title: string;
  description: string;
  penalties: {};
}

interface Props {
  conditions: conditionsObject[];
}

const ListComponent = ({ conditions }: Props) => {
  return (
    <List spacing={3}>
      {conditions.map((condition, index) => (
        <>
          <ListItem key={index}>
            <Link>{condition.title}</Link>
          </ListItem>
          <Divider />
        </>
      ))}
    </List>
  );
};

export default ListComponent;
