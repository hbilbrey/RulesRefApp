import {
  Button,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import filterParams from "./data/filterParams";
import React, { useState } from "react";
import VerticalChecklistComponent from "./VerticalChecklistComponent";

interface Props {
  onCloseModal: (filters: string[]) => void;
}

const FilterMenuComponent = ({ onCloseModal }: Props) => {
  const OverlayOne = () => <ModalOverlay backdropFilter="blur(3px)" />;

  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [selectedCheckboxes, setSelectedCheckboxes] = useState<string[]>([]);

  const updateSelectedCheckboxes = (newSelections: string[]) => {
    setSelectedCheckboxes(newSelections);
  };

  const closeModal = () => {
    onClose();
  };

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
      >
        {overlay}
        <ModalContent minWidth="fit-content" height="fit-content">
          <ModalHeader>Filter by:</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack align="top" spacing={3} padding={2}>
              {filterParams.map((item, index) => (
                <VerticalChecklistComponent
                  key={index}
                  title={item.title}
                  contents={item.contents}
                  selectedCheckboxes={selectedCheckboxes}
                  onBoxCheck={updateSelectedCheckboxes}
                />
              ))}
            </HStack>
            <Divider />
            <HStack align="top" spacing={3} padding={2}></HStack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={closeModal}>
              Save
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
            <Text>{selectedCheckboxes}</Text>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterMenuComponent;
