import { FormControl, MenuItem, Select } from "@mui/material";
// import SelectInput from "@mui/material/Select/SelectInput";
import { Box } from "@mui/system";
import React from "react";

const CustomSelect = ({ data, value, setSelectedItem }) => {
  return (
    <Box>
      <FormControl
        variant="standard"
        fullWidth
        size="small"
        sx={{ minWidth: 120 }}
      >
        <Select
          // id={name}
          value={value}
          onChange={(e) => setSelectedItem(e.target.value)}
        >
          {data.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CustomSelect;
