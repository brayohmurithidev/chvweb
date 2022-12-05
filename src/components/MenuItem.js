import {
  faFile,
  faFileClipboard,
  faGraduationCap,
  faTableColumns,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, NavLink } from "react-router-dom";

const MenuItem = ({ name, to }) => {
  let activeStyle = {
    textDecoration: "none",
    borderLeft: "3px solid #fff",
    padding: "0 0 0 10px",
    color: "#E4DDDC",
    fontSize: 16,
    fontFamily: "",
    display: "flex",
    alignItems: "center",
    gap: 10,
  };

  return (
    <nav>
      <ul style={styles.container}>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? activeStyle : styles.link)}
          >
            <FontAwesomeIcon icon={faTableColumns} size={60} />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/chvs"
            style={({ isActive }) => (isActive ? activeStyle : styles.link)}
          >
            <FontAwesomeIcon icon={faUsers} size={60} />
            <span>All Chvs</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/events"
            style={({ isActive }) => (isActive ? activeStyle : styles.link)}
          >
            <FontAwesomeIcon icon={faFileClipboard} size={60} />
            <span>Events Plan</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/exams"
            style={({ isActive }) => (isActive ? activeStyle : styles.link)}
          >
            <FontAwesomeIcon icon={faGraduationCap} size={60} />
            <span>Exams</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resources"
            style={({ isActive }) => (isActive ? activeStyle : styles.link)}
          >
            <FontAwesomeIcon icon={faFile} size={60} />
            <span>Resources</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MenuItem;

const styles = {
  container: {
    cursor: "pointer",
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  link: {
    textDecoration: "none",
    padding: "0 0 0 10px",
    color: "#E4DDDC",
    fontSize: 16,
    fontFamily: "",
    display: "flex",
    alignItems: "center",
    gap: 10,
  },
};
