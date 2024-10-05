import {
  Box,
  Image,
  Center,
  SimpleGrid,
  Spinner,
  Card,
  CardBody,
  Stack,
  Heading,
  Text,
  CardFooter,
  ButtonGroup,
  Button,
  Divider,
  Badge
} from "@chakra-ui/react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "../../assets/styles/button_home.css";

const sliderImages = [
  { id: 1, src: "../../src/assets/img/img_portadas/HomeDecorationbuy_1.jpeg", alt: "Imagen 1", buttonText: "ARTÍCULOS DE DECORACIÓN CON ALMA", link: "/category/home-decoration" },
  { id: 2, src: "../../src/assets/img/img_portadas/Furniture_buy_2.jpeg", alt: "Imagen 2", buttonText: "DESCUBRE MUEBLES DE ESTILO Y CALIDEZ", link: "/category/furniture" },
  { id: 3, src: "../../src/assets/img/img_portadas/KitchenAccesoriesBuy_3.jpeg", alt: "Imagen 3", buttonText: "EQUIPA TU COCINA", link: "/category/kitchen-accessories" },
  { id: 4, src: "../../src/assets/img/img_portadas/Fondo_sunglasses_4.jpeg", alt: "Imagen 4", buttonText: "VE EL MUNDO CON ESTILO", link: "/category/sunglasses" }
];

export const SliderImagesContainer = ({ products, loading }) => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      {/* Sección del deslizador */}
      <Box w="100%" maxW="1400px" mx="auto" mt={8} mb={8}>
        <Slider {...sliderSettings}>
          {sliderImages.map((image) => (
            <Box key={image.id} position="relative">
              <Image
                src={image.src}
                alt={image.alt}
                objectFit="cover"
                width="100%"
                borderRadius="md"
              />
              <Center position="absolute" bottom="100px" left="150px">
                <Link to={image.link}>
                  <button className="slider-button">
                    {image.buttonText}
                  </button>
                </Link>
              </Center>
            </Box>
          ))}
        </Slider>
      </Box>

      {/* Título de la sección de ofertas */}
      <Box textAlign="center" mt={40}>
        <Heading size="lg" color="rgb(252 129 121)" fontWeight="bold">
          ¡Productos en Oferta!
        </Heading>
      </Box>

      {/* Tarjetas de categoría "home-decoration" */}
      <Box p={6} bg="#1a202c" mb={40}>
        {loading ? (
          <Center>
            <Spinner />
          </Center>
        ) : (
          <Box display="flex" flexWrap="wrap" justifyContent="center" p={6}>
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
                  <Badge colorScheme="red" position="absolute" top="10px" right="10px">Oferta</Badge>
                  <Stack mt="4" spacing="3">
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
        )}
      </Box>
    </>
  );
};