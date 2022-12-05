import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import MenuItem from "../../components/MenuItem";

const menuItem = [
  {
    name: "Dashboard",
    to: "/dashboard",
    key: "ass",
    menuIcon: "faHouse",
  },
  {
    name: "Assessments",
    to: "assessments",
    key: "asp",
    menuIcon: "faFile",
  },
  {
    name: "Resources",
    to: "resources",
    key: "res",
    menuIcon: "faBookMedical",
  },
  {
    name: "Users",
    to: "users",
    key: "usrs",
    menuIcon: "faUsers",
  },
  {
    name: "Reports",
    to: "reports",
    key: "reps",
    menuIcon: "faFileExport",
  },
];

const Layout = () => {
  return (
    <div>
      <Header />
      <div style={styles.bodyWrapper}>
        <div style={styles.sideBar}>
          {menuItem.map((item) => (
            <div key={item.key}>
              <MenuItem name={item.name} to={item.to} icons={item.menuIcon} />
            </div>
          ))}
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
