import {
  faFile,
  faFileClipboard,
  faGraduationCap,
  faTableColumns,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ name, to }) => {
  return (
    <div style={styles.container}>
      {/* MenuItem */}
      <Link to="/dashboard" style={styles.link}>
        <FontAwesomeIcon icon={faTableColumns} size={60} />
        <span>Dashboard</span>
      </Link>
      <Link to="/chvs" style={styles.link}>
        <FontAwesomeIcon icon={faUsers} size={60} />
        <span>All Chvs</span>
      </Link>
      <Link to="/events" style={styles.link}>
        <FontAwesomeIcon icon={faFileClipboard} size={60} />
        <span>Events Plan</span>
      </Link>
      <Link to="/exams" style={styles.link}>
        <FontAwesomeIcon icon={faGraduationCap} size={60} />
        <span>Exams</span>
      </Link>
      <Link to="/resources" style={styles.link}>
        <FontAwesomeIcon icon={faFile} size={60} />
        <span>Resources</span>
      </Link>
      {/* end */}
    </div>
  );
};

export default MenuItem;

const styles = {
  container: {
    padding: "0px",
    marginBottom: "20px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  link: {
    textDecoration: "none",
    color: "#E4DDDC",
    fontSize: 20,
    fontFamily: "Open Sans, sans-serif",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
};
