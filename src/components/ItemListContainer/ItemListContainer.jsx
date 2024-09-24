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
  Text
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GiPopcorn } from "react-icons/gi";

export const ItemListContainer = ({ products }) => {
  return (
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
              height="205px"    //FIX - Tamaño imagen (altura)
              width="100%"
            />
            <Stack mt="4" spacing="3">
              <Heading size="md" fontWeight="bold" color="#998189">{product.title}</Heading>
              <Text fontSize="sm" color="gray.300">{product.description}</Text>
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
            <Box display="flex" alignItems="center">
              <GiPopcorn size="20px" color="#998189" />
            </Box>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};



/* ESTO ES LA BIENBENIDA A MI PROYECTO*/
/*import { Box, Text, keyframes, Icon, Stack } from "@chakra-ui/react";
import { GiPopcorn } from "react-icons/gi";
import { MdOutlineFastfood } from "react-icons/md";
import { FaBeer } from "react-icons/fa";

const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const ItemListContainer = ({ greeting }) => {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgGradient="linear(to-r, teal.500, blue.500, purple.500, pink.500)"
            backgroundSize="200% 200%"
            animation={`${gradientAnimation} 10s ease infinite`}
            p={8}
            borderRadius="md"
            boxShadow="lg"
            textAlign="center"
        >
            <Text
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
                color="white"
                mb={6}
            >
                {greeting}
            </Text>
            <Stack direction="row" spacing={8} mb={6}>
                <Icon as={GiPopcorn} w={10} h={10} color="white" />
                <Icon as={MdOutlineFastfood} w={10} h={10} color="white" />
                <Icon as={FaBeer} w={10} h={10} color="white" />
            </Stack>
            <Text fontSize={{ base: "md", md: "sm" }} color="white" mt={4}>
                Disfrutemos de unas palomitas
            </Text>
        </Box>
    );
}; 

*/