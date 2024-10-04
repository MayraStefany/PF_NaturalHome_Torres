import { ChakraProvider, Text } from '@chakra-ui/react';
import React from 'react';
import { MainRouter } from './routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from "./context";

function App() {
  return (
    <ChakraProvider>
      <CartProvider>
        <MainRouter />
      </CartProvider>
    </ChakraProvider>
  );
}

export default App;