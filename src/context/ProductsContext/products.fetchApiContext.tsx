import { useState } from "react";
import productContext from "./products.createContext";
import axios from "axios";

// interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: object;
// }

const AllProducts = (props: any) => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      let response = await axios.get("https://fakestoreapi.com/products");
      if (response.status === 200) {
        console.log(response.data);
        setProducts(response.data);
      } else {
        console.log(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <productContext.Provider value={{ products, getProducts }}>
      {props.children}
    </productContext.Provider>
  );
};

export default AllProducts;
