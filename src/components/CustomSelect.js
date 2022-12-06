import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import SelectInput from "@mui/material/Select/SelectInput";
import { Box } from "@mui/system";
import React, { useState } from "react";

const CustomSelect = () => {
  const [selectedItem, setSelectedItem] = useState("");
  const handleChange = (event) => {
    setSelectedItem(event.target.value);
  };
  return (
    <Box sx={{ m: 1, minWidth: 60 }}>
      <FormControl fullWidth>
        <InputLabel id="module">Module</InputLabel>
        <Select
          labelId="module"
          id="moduleSelect"
          value="module"
          label="Module"
          onChange={handleChange}
        >
          <MenuItem value="1">Nutrition</MenuItem>
          <MenuItem value="2">Nutrition</MenuItem>
          <MenuItem value="3">Nutrition</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
