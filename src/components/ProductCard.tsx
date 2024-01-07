import { Box, Card, CardContent } from "@mui/material";
import { product } from "../interfaces/productInterface";

const ProductCard = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}: product) => {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{ display: "flex", gap: "3%", alignItems: "center", height:'50vh' }}
      >
        <Box>
          <img src={image} alt={title} width="250px" />
        </Box>
        <Box>
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>{category}</h3>
          <h1>${price}</h1>
          <p>Ships to India</p>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductCard;
