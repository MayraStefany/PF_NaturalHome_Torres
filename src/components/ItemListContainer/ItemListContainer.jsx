import {
  Flex,
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
      <Box display="flex" flexWrap="wrap" justifyContent="center" p={6} bg="#1a202c" mb={40}>
        {products.map((product) => (
          <Card
            key={product.id}
            maxW="sm"
            margin="1rem"
            color="white"
            boxShadow="md"
            borderRadius="lg"
            overflow="hidden"
            transition="transform 0.2s"
            _hover={{ transform: "scale(1.02)", boxShadow: "lg" }}
            minH="400px"
            maxH="40px"
          >
            <CardBody display="flex" flexDirection="column" height="100%">
              <Image
                src={product.thumbnail}
                borderRadius="md"
                objectFit="cover"
                height="205px"
                width="100%"
              />
              <Stack mt="4" spacing="3" textAlign="center" flexGrow={1}>
                <Heading size="md" fontWeight="bold" color="#998189" isTruncated>
                  {product.title}
                </Heading>
                <Text color="red.300" fontSize="lg" fontWeight="bold">
                  ${product.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider borderColor="#4a55686e" />
            <CardFooter display="flex" justifyContent="space-between" alignItems="center">
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