import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";

export default function SearchBar() {
  return (
    <Box
      component="form"
      sx={{  display: "flex", alignItems: "center", width:"100%", backgroundColor:'white' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, width: "100vw" }}
        placeholder=""
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Box
        sx={{
          p: "8px",
          backgroundColor: "#FF8A33",
          border: "none",
          display: "flex",
          alignItems: "center",
          color:'black'
        }}
        aria-label="search"
      >
        <SearchIcon />
      </Box>
     
    </Box>
  );
}
