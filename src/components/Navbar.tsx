import { Box, Button } from "@mui/material";

import logo from "../assets/Amazon-Emblem.jpg";
import "../Style/style.css";
import SearchBar from "../Controller/SearchBar";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

const Navbar = () => {
  return (
    <Box
      position="sticky"
      sx={{
        backgroundColor: "black",
        color: "white",
        display: "flex",
        gap: "3%",
        paddingLeft: "2%",
        alignItems: "center",
        top:'10'
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <img className="logo" src={logo} alt="logo" />
        <h3>.in</h3>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "1.5%",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Box sx={{ width: "900px" }}>
          <SearchBar />
        </Box>
        <Box>
          <p style={{ textDecoration: "underline" }}>
            Hello arpandas020498@gmail.com
          </p>
          <Button sx={{ color: "white", p: "0" }}>
            <h3>Sign Out</h3>
          </Button>
        </Box>
        <Box>
          <p style={{ textDecoration: "underline" }}>Returns</p>
          <Button sx={{ color: "white", p: "0" }}>
            <h3>& Orders</h3>
          </Button>
        </Box>
        <Box>
          <p>Your</p>
          <Button sx={{ color: "white", p: "0" }}>
            <h3>Prime</h3>
          </Button>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "3px" }}>
          <ShoppingBasketIcon />
          <p>0</p>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
