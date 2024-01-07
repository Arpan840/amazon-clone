import { Box, Button, Card } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const ResultFilterNav = () => {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding:'8px',
        borderBottom:"1px solid lightblue",
        
      }}
    >
      <Box>
        <p>1-16 of over 20,000 results</p>
      </Box>
      <Box>
        <Button
          variant="outlined"
          sx={{ display: "flex", alignItems: "center" }}
          endIcon={<ArrowDropDownIcon />}
        >
          Short by: Feartured
        </Button>
      </Box>
    </Card>
  );
};

export default ResultFilterNav;
