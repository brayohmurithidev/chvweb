import { Grid, Paper } from "@mui/material";
import React from "react";
import CustomSelect from "./CustomSelect";

const ChvPerformance = () => {
  return (
    <Paper
      elevation={3}
      sx={{ minHeight: "150px", padding: "2px 20px 10px 20px" }}
    >
      <h3>CHV's Performance</h3>
      <Grid>
        <Grid item xs={12} sm={6}>
          <CustomSelect />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ChvPerformance;
