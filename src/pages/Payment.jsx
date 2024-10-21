import { Flex, Button, Input, Stack, Heading } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { CartContext } from "../context";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export const Payment = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { cartState } = useContext(CartContext);
  const total = cartState.reduce(
    (acc, item) => acc + item.price * item.qtyItem,
    0
  );

  const handleCreateOrder = () => {
    const orderObj = {
      buyer: {
        name: name,
        lastName: lastName,
        email: email,
      },
      items: cartState.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          quantity: item.qtyItem,
        };
      }),
      total: total,
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, orderObj).then(({ id }) => {
      alert("Se creó la orden con id: " + id);
    });
  };

  return (
    <Flex justify="center" align="center" height="100vh">
      <Stack
        spacing={4}
        p={8}
        boxShadow="lg"
        borderRadius="md"
        bg="white"
        color="black"
      >
        <Heading as="h3" size="lg" textAlign="center" color="teal.500">
          Crear Orden
        </Heading>
        <Input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          focusBorderColor="teal.500"
          bg="gray.50"
          _placeholder={{ color: "gray.500" }} // Color del placeholder
          color="black" // Color del texto ingresado
        />
        <Input
          type="text"
          placeholder="Apellido"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          focusBorderColor="teal.500"
          bg="gray.50"
          _placeholder={{ color: "gray.500" }}
          color="black"
        />
        <Input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          focusBorderColor="teal.500"
          bg="gray.50"
          _placeholder={{ color: "gray.500" }}
          color="black"
        />
        <Button colorScheme="teal" size="lg" onClick={handleCreateOrder}>
          Crear Orden
        </Button>
      </Stack>
    </Flex>
  );
};