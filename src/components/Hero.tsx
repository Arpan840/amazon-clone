
import { Box } from "@mui/material";
import { Slide } from "@mui/material";
import ReviewCard from "./ReviewCard";
import { Link } from "react-router-dom";

const Hero = () => {
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
              transform: "translate(-50%, -50%)",             
              width: "95vw",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap:'wrap'
            }}
          >
             <Link to="/products">
            <ReviewCard />
            </Link>
          </Box>
          
        </Box>
      </Slide>
    </Box>
  );
};

export default Hero;
