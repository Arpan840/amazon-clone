import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function ReviewCard() {
  return (
    <Card sx={{ maxWidth: 345, height: "45vh", width: "18vw" }}>
      <CardHeader title="Gaming Accessories" />
      <CardMedia
        component="img"
        height="200"
        image="https://cdn.shopify.com/s/files/1/0078/8715/9367/files/EFFYSETUP_-_Christina_astronuggie_Executive_Office_L-Shaped_Desk_480x480.jpg?v=1631259234"
        alt="Paella dish"
        sx={{ width: "90%", margin: "auto" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Shop Now
        </Typography>
      </CardContent>
    </Card>
  );
}
