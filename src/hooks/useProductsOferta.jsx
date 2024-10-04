import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const useProductsOferta = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  
  React.useEffect(() => {
    const customQuery = query(
      collection(db, "products"),
      where("category", "==", "home-decoration")
    );

    getDocs(customQuery)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  return { products };
};