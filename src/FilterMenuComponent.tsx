import {
  Button,
  Divider,
  Flex,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tag,
  Text,
  Wrap,
  useDisclosure,
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
  const [masterCheckboxes, setMasterCheckboxes] = useState<string[]>([]);

  const updateSelectedCheckboxes = (newSelections: string[]) => {
    setSelectedCheckboxes(newSelections);
  };

  const closeModalSave = () => {
    setMasterCheckboxes(selectedCheckboxes);
    onClose();
  };

  const closeModalCancel = () => {
    setSelectedCheckboxes(masterCheckboxes);
    onClose();
  };

  const clickTag = (tagName: string) => {
    const updatedBoxes = masterCheckboxes.filter((item) => item !== tagName);
    setMasterCheckboxes(updatedBoxes);
    setSelectedCheckboxes(updatedBoxes);
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

      {masterCheckboxes.length > 0 ? (
        <>
          <Divider />
          <HStack>
            <Text width="30vh" fontSize="xl">
              Filtering by:
            </Text>
            <Wrap>
              {masterCheckboxes.map((item) => (
                <Tag key={item} onClick={(e) => clickTag(item)}>
                  {item}
                </Tag>
              ))}
            </Wrap>
          </HStack>
          <Divider />
        </>
      ) : null}

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
            <Button colorScheme="gray" mr={3} onClick={closeModalSave}>
              Save
            </Button>
            <Button variant="ghost" onClick={closeModalCancel}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FilterMenuComponent;
