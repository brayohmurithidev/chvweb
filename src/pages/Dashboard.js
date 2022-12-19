import { Box, Grid } from "@mui/material";
import React from "react";
import ChvPerformance from "../components/ChvPerformance";

const Dashboard = () => {
  // GET TODAY DATE
  const today = new Date();
  const year = today.getFullYear();
  let month = today.toLocaleString("default", { month: "long" });
  let day = today.getDate();
  if (day < 10) day = "0" + day;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={9} sx={{ padding: "20px" }}>
          <h1>Tutor's Dashboard</h1>
          {`${day} ${month} ${year}`}
          {/* MAIN CONTAINER */}
          <Grid container mt={2} spacing={2}>
            <Grid item xs={12}>
              <ChvPerformance />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
        <Grid sx={{ backgroundColor: "#777" }} item xs={3}></Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
