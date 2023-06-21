import {
  Button,
  HStack,
  VStack,
  Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Divider,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import filterParams from "./data/filterParams";
import React from "react";
import VerticalChecklistComponent from "./VerticalChecklistComponent";

// We want to adv filter by...
// Type
// Rank
// Time
// Components
// Area (Y/N)
// Duration
// Save (type)

const FilterMenuComponent = () => {
  const OverlayOne = () => <ModalOverlay backdropFilter="blur(3px)" />;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Advanced Filter
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
        size="xl"
      >
        {overlay}
        <ModalContent>
          <ModalHeader>Filter by:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack align="top" spacing={3}>
              {filterParams.map((item, index) => (
                <VerticalChecklistComponent
                  key={index}
                  title={item.title}
                  contents={item.contents}
                />
              ))}
            </HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterMenuComponent;
