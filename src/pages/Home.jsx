import React from 'react';
import { SliderImagesContainer } from "../components";
import { useProductsOferta } from '../hooks/useProductsOferta';

export const Home = () => {
  const { products, loading } = useProductsOferta();

  return (
    <SliderImagesContainer products={products} loading={loading} />
    /*return <ItemListContainer products={products}/>;*/
    /*return <ItemListContainer greeting="Bienvenidos a Popcorn & Pics!"/>;*/
  );
};