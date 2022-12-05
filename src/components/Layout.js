import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import UserProfile from "./UserProfile";
import MenuItem from "./MenuItem";

const Layout = () => {
  return (
    <div>
      <Header />
      <div className="bodyWrapper">
        <div className="sideBar">
          <UserProfile />
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
