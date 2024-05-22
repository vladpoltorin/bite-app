import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Stack,
  Text,
  Image,
} from '@chakra-ui/react';
import type { Product } from './types';

type Props = {
  product: Product;
  onAddProduct: (product: Product) => void;
};

export const ProductCard = ({ product, onAddProduct }: Props) => {
  const { price, name, description, imageUrl } = product;

  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={imageUrl}
          alt={`${name} card`}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{name}</Heading>
          <Text>{description}</Text>
          <Text color='blue.600' fontSize='2xl'>
            ${price / 100}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2' justifyContent="space-between" w="full">
          <Button variant="outline" colorScheme='blue'>
            Details
          </Button>
          <Button variant='solid' colorScheme='blue' onClick={() => onAddProduct(product)}>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};