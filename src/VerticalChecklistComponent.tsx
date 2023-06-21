import {
  VStack,
  Divider,
  CheckboxGroup,
  Checkbox,
  Text,
} from "@chakra-ui/react";

interface Props {
  title: string;
  contents: string[];
}

const VerticalChecklistComponent = ({ title, contents }: Props) => {
  return (
    <VStack>
      <Text>{title}</Text>
      <Divider />
      <CheckboxGroup colorScheme="gray">
        <VStack spacing={[1, 5]} direction={["column", "row"]} align="left">
          {contents.map((item, index) => (
            <Checkbox value={item} key={index} size="sm">
              {item}
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
    </VStack>
  );
};

export default VerticalChecklistComponent;
