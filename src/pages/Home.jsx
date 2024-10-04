import React from "react";
import { SliderImagesContainer } from "../components";
import { useProductsByCategory } from '../hooks/useProductsByCategory';

export const Home = () => {
  const { products, loading } = useProductsByCategory("home-decoration");

  return (
    <SliderImagesContainer products={products} loading={loading} />
    /*return <ItemListContainer products={products}/>;*/
    /*return <ItemListContainer greeting="Bienvenidos a Popcorn & Pics!"/>;*/
  );
};