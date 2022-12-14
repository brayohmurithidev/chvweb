import { Avatar } from "@mui/material";
import React from "react";
import Prof from "../assets/images/bm.png";

const UserProfile = () => {
  return (
    <div style={styles.container}>
      <Avatar src={Prof} sx={{ width: 60, height: 60 }}>
        B
      </Avatar>
      <span style={{ color: "#fff" }}>Hello, Brian</span>
    </div>
  );
};

export default UserProfile;

const styles = {
  container: {
    width: "100%",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
};
