import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import MenuItem from "../../components/MenuItem";

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={styles.bodyWrapper}>
        <div style={styles.sideBar}>
          <MenuItem />
        </div>
        <div className="contentArea">
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
    width: "15%",
    height: "100vh",
    backgroundColor: "#053985",
    borderRight: "1px solid #777",
    padding: "10px 10px 10px 10px",
    boxSizing: "border-box",
  },
};
