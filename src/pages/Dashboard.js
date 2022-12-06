import { Box, Grid } from "@mui/material";
import axios from "axios";
import * as React from "react";
import { useState } from "react";
import ChvPerformance from "../components/ChvPerformance";

const Dashboard = () => {
  const [data, setData] = useState();
  const myHeaders = new Headers();

  myHeaders.append("Content-type", "application/json");
  myHeaders.append(
    "api-key",
    "hbJIV4ENJpSB8WeVSLmi0rJQAGsSL0ft4nMfUi1WQjuWEZ32v3hqliH3pcdlrDjM"
  );
  // myHeaders.get('Content-Type')
  const url =
    "https://data.mongodb-api.com/app/data-humon/endpoint/data/v1/action/aggregate";

  let body = {
    collection: "Result",
    database: "chvsDB",
    dataSource: "chvsApp",
    // projection: {},
    pipeline: [
      {
        $group: {
          _id: "$module",
          pre_test_score: { $sum: "$pre_test_score" },
        },
      },
    ],
  };

  React.useEffect(() => {
    // GET DATA
    axios.post(url, body, myHeaders).then((res) => setData(res.data.documents));
  }, []);

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
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <ChvPerformance />
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Grid>
        <Grid sx={{ backgroundColor: "#777" }} item xs={3}>
          {data?.map((item, i) => (
            <div key={i}>
              <p>{item.module}</p>
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
