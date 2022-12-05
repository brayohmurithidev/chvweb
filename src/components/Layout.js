import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import UserProfile from "./UserProfile";
import MenuItem from "./MenuItem";

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={styles.bodyWrapper}>
        <div style={styles.sideBar}>
          <UserProfile />
          <MenuItem />
        </div>
        <div style={styles.contentArea}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

const styles = {
  bodyWrapper: {
    width: "100%",
    margin: "58px auto 20px auto",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: " space-between",
  },
  sideBar: {
    minWidth: "210px",
    margin: 0,
    padding: 0,
    maxWidth: "210px",
    top: "58px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#053985",
    borderRight: "1px solid #777",
    boxSizing: "border-box",
    position: "sticky",
  },
  contentArea: {
    width: "100%",
    height: "1000vh",
    padding: "20px",
  },
};
