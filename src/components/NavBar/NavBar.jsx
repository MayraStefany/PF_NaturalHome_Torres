import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { GiPopcorn } from 'react-icons/gi';
import { CartWidget } from '../CartWidget';
import { Link } from 'react-router-dom';
import { useCategory } from "../../hooks";
import { FiLayers } from 'react-icons/fi';
import "../../assets/styles/icons_category.css"

export const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  //Traer lista de categorias
  const { category } = useCategory();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box display="flex" alignItems="center">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Flex alignItems="center">
                <GiPopcorn size={24} style={{ marginRight: '8px' }} />
                <Text fontSize="lg" fontWeight="bold">Popcorn & Pics</Text>
              </Flex>
            </Link>
          </Box>
          <Menu>
            <MenuButton
              as={Button}
              rightIcon={<FiLayers className="icon-animation" />}
              variant="outline"
              size="sm"
              borderRadius="md"
              cursor="pointer"
              style={{ marginLeft: 30 }}
            >
              Categorías
            </MenuButton>
            <MenuList
              height="300px"
              overflowY="auto"
              boxShadow="md"
              borderWidth="1px"
              borderColor={useColorModeValue('gray.200', 'gray.700')}
            >
              {category.map((category) => (
                <MenuItem
                  key={category.slug}
                  as={Link}
                  to={`/category/${category.slug}`}
                  _hover={{ bg: useColorModeValue('gray.100', 'gray.600') }}
                >
                  <Text>{category.name}</Text>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>


          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <CartWidget />
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://avatars.dicebear.com/api/male/username.svg'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};