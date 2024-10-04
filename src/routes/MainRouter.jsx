import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Category, Checkout, Home, Item } from "../pages";
import { Footer, NavBar } from "../components";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:id" element={<Item />} />
        <Route path="/category/:categoryId" element={<Category />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};