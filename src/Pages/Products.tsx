import { Box } from "@mui/material";
import ProductCard from "../components/ProductCard";
import ResultFilterNav from "../components/ResultFilterNav";
import { useContext, useEffect } from "react";
import productContext from "../context/ProductsContext/products.createContext";


const Products = () => {
  const productsData = useContext(productContext);
  const { products, getProducts } = productsData;

  useEffect(() => { 
    getProducts();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <ResultFilterNav />
      <Box>
        {products.map((product: any) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </Box>
  );
};

export default Products;
