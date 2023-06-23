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
  selectedCheckboxes: string[];
  onBoxCheck: (newSelections: string[]) => void;
}

const VerticalChecklistComponent = ({
  title,
  contents,
  selectedCheckboxes,
  onBoxCheck,
}: Props) => {
  return (
    <VStack>
      <Text>{title}</Text>
      <Divider />
      <CheckboxGroup colorScheme="gray">
        <VStack spacing={[1, 5]} direction={["column", "row"]} align="left">
          {contents.map((item, index) => (
            <Checkbox
              value={item}
              key={index}
              onChange={(e) => {
                e.target.checked
                  ? onBoxCheck([...selectedCheckboxes, item])
                  : onBoxCheck(
                      selectedCheckboxes.filter((myItem) => myItem !== item)
                    );
              }}
              size="sm"
            >
              {item}
            </Checkbox>
          ))}
        </VStack>
      </CheckboxGroup>
    </VStack>
  );
};

export default VerticalChecklistComponent;
