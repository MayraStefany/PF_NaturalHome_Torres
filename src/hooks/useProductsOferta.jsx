import React from "react";
import { getProductsByCategory } from "../services/products.service";

export const useProductsOferta = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getProductsByCategory("home-decoration")
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return { products, loading };
};