import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
// import SelectInput from "@mui/material/Select/SelectInput";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";

const CustomSelect = ({ selectItems, setPayload }) => {
  const [selectedItem, setSelectedItem] = useState("");
  // const handleChange = (event) => {
  //   // console.log(selectedItem);
  //   setPayload({
  //     module: selectedItem,
  //   });
  // };

  useEffect(() => {
    console.log(selectedItem);
    setPayload({
      module: selectedItem,
    });
  }, [selectedItem]);

  return (
    <Box sx={{ maxWidth: 150 }}>
      <FormControl fullWidth size="small">
        <InputLabel id="module">Module</InputLabel>
        <Select
          labelId="module"
          id="moduleSelect"
          value={selectedItem}
          label="Module"
          onChange={(e) => setSelectedItem(e.target.value)}
        >
          {selectItems.map((item) => (
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
