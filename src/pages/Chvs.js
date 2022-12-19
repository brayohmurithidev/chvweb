import { Button } from "@mui/material";
import React, { useState } from "react";
import CustomModal from "../components/CustomModal";

const Chvs = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>Chvs List</h3>
        <Button
          onClick={handleOpen}
          variant="contained"
          size="medium"
          color="primary"
        >
          CREATE NEW
        </Button>
      </div>
      <CustomModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default Chvs;
