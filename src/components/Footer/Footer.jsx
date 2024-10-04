import { Box, Text, Center } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box 
      as="footer" 
      width="100%" 
      py={4} 
      bg="#2d3748"
      color="grey"
      position="relative"
      bottom={0}
    >
      <Center>
        <Text fontSize="sm">
          {`Natural Home © 2024 by Mayra Torres Munares`}
        </Text>
      </Center>
    </Box>
  );
};