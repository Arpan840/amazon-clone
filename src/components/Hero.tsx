import { Box } from "@mui/material";
import { Slide } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import productContext from "../context/ProductsContext/products.createContext";
import { productInterface } from "../interfaces/productInterface";

const Hero = () => {
  const productsData = useContext(productContext);
  const { products, getProducts } = productsData;
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box position="relative">
      <Slide
        direction="left"
        in={true}
        timeout={{ enter: 2000 }}
        mountOnEnter
        unmountOnExit
      >
        <Box>
          <img
            style={{ width: "100%" }}
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fashion/GW/Jan/One/Unrec-PC-3000._CB585478602_.jpg"
            alt="hero"
          />

          <Box
            sx={{
              textAlign: "center",
              position: "absolute",
              top: "80%",
              left: "50%",
              transform: "translate(-50%, -15%)",
              width: "95vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "3%",
            }}
          >
            {products.map((product: productInterface) => (
              <Link
                key={product.id}
                to="/products"
                style={{ textDecoration: "none" }}
              >
                <ReviewCard {...product} />
              </Link>
            ))}
          </Box>
        </Box>
      </Slide>
    </Box>
  );
};

export default Hero;
