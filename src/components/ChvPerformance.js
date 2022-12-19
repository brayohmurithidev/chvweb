import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAuth } from "../providers/AuthProvider";

import CustomSlider from "./SLider";

const ChvPerformance = ({ selectItems }) => {
  const { user } = useAuth();
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  // FETCH DATA ON FILTER
  const [payload, setPayload] = useState({});
  // TRY REALM WEB
  useEffect(() => {
    user.functions.get_all_results();
    // LOGIN USER
    const fetchdata = async () => {
      try {
        const allResults = await user.functions.get_all_results();
        console.log(allResults);
        setFilteredResults(allResults);
      } catch (error) {
        console.error(error);
      }
    };
    fetchdata();
    console.log(payload);
  }, [payload]);

  // fETCH INITIAL DATA
  useEffect(() => {
    user.functions
      .get_all_results()
      .then((res) => {
        let modules = res.map((a) => a.module);
        let uniqueModules = [...new Set(modules)];
        setResults(uniqueModules);
      })
      .catch((error) => console.error(error));
    console.log(results);
  }, []);

  return (
    <Paper
      elevation={3}
      sx={{ minHeight: "150px", padding: "2px 20px 10px 20px" }}
    >
      <h3>CHV's Performance</h3>
      {results.length >= 1 && (
        <Grid container>
          <Grid item xs={12} sm={12}>
            {/* <CustomSelect selectItems={results} setPayload={setPayload} /> */}
            <Table sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell align="left">Name</TableCell>
                  <TableCell align="left">Pre-test</TableCell>
                  <TableCell align="left">Post test</TableCell>
                  <TableCell align="left">support score</TableCell>
                  <TableCell align="left">Final score</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredResults.map((filteredResult) => {
                  let pre_test_score = 0;
                  let post_test_score = 0;
                  let support_supervision_score = 0;
                  let final_assessment_score = 0;
                  for (let i = 0; i < filteredResult.userResults.length; i++) {
                    pre_test_score +=
                      filteredResult.userResults[i].pre_test_score;
                    support_supervision_score +=
                      filteredResult.userResults[i].support_supervision_score;
                    post_test_score +=
                      filteredResult.userResults[i].post_test_score;
                    final_assessment_score +=
                      filteredResult.userResults[i].final_assessment_score;
                  }
                  return (
                    <TableRow
                      key={filteredResult._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {filteredResult.name}
                      </TableCell>
                      {pre_test_score !== 0 && (
                        <TableCell>
                          {(
                            pre_test_score / filteredResult.userResults.length
                          ).toFixed(1)}
                        </TableCell>
                      )}
                      {post_test_score !== 0 && (
                        <TableCell>
                          {(
                            post_test_score / filteredResult.userResults.length
                          ).toFixed(1)}
                        </TableCell>
                      )}
                      {support_supervision_score !== 0 && (
                        <TableCell>
                          {support_supervision_score.toFixed(1)}
                        </TableCell>
                      )}
                      {final_assessment_score !== 0 && (
                        <TableCell>
                          {final_assessment_score.toFixed(1)}
                        </TableCell>
                      )}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      )}
    </Paper>
  );
};

export default ChvPerformance;
