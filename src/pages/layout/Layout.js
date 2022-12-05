import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import MenuItem from "../../components/MenuItem";
import UserProfile from "../../components/UserProfile";

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
    display: "flex",
    gap: "15px",
  },
  sideBar: {
    minWidth: "210px",
    maxWidth: "210px",
    top: "58px",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#053985",
    borderRight: "1px solid #777",
    boxSizing: "border-box",
    position: "fixed",
  },
  contentArea: {
    minHeight: "calc(100vh-56px)",
  },
};
