import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"

import { Product } from "../types";

type Props = {
  product: Product;
  onAddProduct: (product: Product) => void;
}

export const ProductDetailsModalTrigger = ({ product, onAddProduct }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { imageUrl, description, name, price } = product;

  const handleAddProduct = () => {
    onAddProduct(product);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>Details</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset='slideInBottom'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image
              src={imageUrl}
              alt={`${name} card`}
              borderRadius='lg'
            />
            <Stack mt='6' spacing='3'>
              <Text>{description}</Text>
              <Text color='blue.600' fontSize='2xl'>
                ${price / 100}
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter justifyContent="flex-end">
            <Button colorScheme='green' mr={3} onClick={handleAddProduct}>
              Add to Cart
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}