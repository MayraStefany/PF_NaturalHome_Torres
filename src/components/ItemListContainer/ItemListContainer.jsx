import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Image,
  Text,
  Center
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "../../assets/styles/button_home.css";

export const ItemListContainer = ({ products }) => {

  return (
    <>
      {/* Sección de productos */}
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        p={6}
        minHeight="100vh"
      >
        {products.map((product) => (
          <Card
            key={product.id}
            maxW="sm"
            margin="1rem"
            maxH="lg"
            color="white"
            boxShadow="md"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
          >
            <CardBody>
              <Image
                src={product.thumbnail}
                alt={product.name}
                borderRadius="md"
                objectFit="cover"
                height="205px"
                width="100%"
              />
              <Stack mt="4" spacing="3">
                <Heading size="md" fontWeight="bold" color="#998189">
                  {product.title}
                </Heading>
                <Text fontSize="sm" color="gray.300">
                  {product.description}
                </Text>
                <Text color="red.300" fontSize="lg" fontWeight="bold">
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider borderColor="#4a55686e" />
            <CardFooter
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <ButtonGroup spacing="2">
                <Button size="sm" variant="solid" colorScheme="red">
                  Comprar
                </Button>
                <Link to={`/item/${product.id}`}>
                  <Button size="sm" variant="outline" colorScheme="red">
                    Ver Detalle
                  </Button>
                </Link>
              </ButtonGroup>
            </CardFooter>
          </Card>
        ))}
      </Box>
    </>
  );
};