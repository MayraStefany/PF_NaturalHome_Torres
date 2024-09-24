import { ChakraProvider, Text } from '@chakra-ui/react';
import React from 'react';
import { MainRouter } from './routes';

function App() {
  return (
    <ChakraProvider>
      <MainRouter />
    </ChakraProvider>
  );
}

export default App;