import { product } from "../interfaces/productInterface";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import { useState } from "react";

export default function ReviewCard({
  id,
  title,
  price,
  description,
  category,
  image,
  rating: {},
}: product) {
  return (
    <Card
      variant="outlined"
      sx={{
        maxWidth: 345,
        height: "45vh",
        width: "18vw",
        margin: "3%",
        overflow: "scroll",
      }}
    >
      <CardHeader title={title} />
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt="Paella dish"
        sx={{ width: "90%", margin: "auto" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
