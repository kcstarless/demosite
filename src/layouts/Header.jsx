import { useState } from "react";
import { useNavigate } from "react-router-dom"; // If you're using React Router for navigation
import { Select, MenuItem, FormControl, InputLabel, Box } from "@mui/material";

export const Header = () => {
  const [demo, setDemo] = useState("");
  const navigate = useNavigate(); // React Router's navigate function

  // Handle dropdown change
  const handleSelectChange = (event) => {
    const selectedDemo = event.target.value;
    setDemo(selectedDemo);
    navigate(selectedDemo); // Navigate to the selected demo page
  };

  return (
    <header>
      <h4>DAVID GIM TECH DEMO</h4>
      <Box>
        <FormControl variant="outlined" size="small">
          <InputLabel>Select a demo</InputLabel>
          <Select value={demo} onChange={handleSelectChange}>
            <MenuItem value="/demo1">CSS Responsive Text with Clamp</MenuItem>
            <MenuItem value="/demo2">Demo 2</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </header>
  );
};
