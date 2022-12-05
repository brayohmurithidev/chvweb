// import {
//   faBookMedical,
//   faFile,
//   faFileExport,
//   faHouse,
//   faUsers,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ name, to, icons }) => {
  return (
    <div style={styles.container}>
      {/* <FontAwesomeIcon
        // icon={icons}
        style={{ color: "#fff", marginRight: "10px" }}
      /> */}
      <Link style={styles.link} to={to}>
        {name}
      </Link>
    </div>
  );
};

export default MenuItem;

const styles = {
  container: {
    padding: "0px",
    borderBottom: "1px solid #333",
    marginBottom: "20px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",

    color: "#E4DDDC",
    fontSize: 20,
    fontFamily: "Open Sans, sans-serif",
  },
};
