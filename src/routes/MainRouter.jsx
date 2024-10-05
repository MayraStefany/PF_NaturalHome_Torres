import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category, Checkout, Home, Item, Payment } from "../pages";
import { Footer, NavBar } from "../components";
import { Flex } from '@chakra-ui/react';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Flex direction="column" minHeight="100vh">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:id" element={<Item />} />
          <Route path="/category/:categoryId" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
        <Footer />
      </Flex>
    </BrowserRouter>
  );
};