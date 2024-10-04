import { ChakraProvider, Text } from '@chakra-ui/react';
import React from 'react';
import { MainRouter } from './routes';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <ChakraProvider>
      <MainRouter />
    </ChakraProvider>
  );
}

export default App;