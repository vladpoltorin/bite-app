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

export const ProductCard = ({ price, name, description, imageUrl }: Product) => {
  return (
    <Card maxW='sm'>
      <CardBody>
        <Image
          src={imageUrl}
          alt={`${name} card`}
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Living room Sofa</Heading>
          <Text>{description}</Text>
          <Text color='blue.600' fontSize='2xl'>
            ${price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2' justifyContent="space-between" w="full">
          <Button variant="outline" colorScheme='blue'>
            Details
          </Button>
          <Button variant='solid' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};