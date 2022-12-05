import { faBell, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@mui/material";
import React from "react";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div style={styles.headerArea}>
      <div style={styles.headercontent}>
        <img src={Logo} alt="Logo" width="150" />
        <div style={styles.leftheader}>
          <FontAwesomeIcon
            icon={faCalendar}
            size="md"
            style={{ color: "#fff", cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faUser}
            size="md"
            style={{ color: "#fff", cursor: "pointer" }}
          />
          <FontAwesomeIcon
            icon={faBell}
            size="md"
            style={{ color: "#fff", cursor: "pointer" }}
          />
          <Avatar sx={{ bgcolor: "#333", height: 24, width: 24 }}>B</Avatar>
        </div>
      </div>
    </div>
  );
};

export default Header;

// STYLES
const styles = {
  headerArea: {
    zIndex: 10,
    left: 0,
    right: 0,
    top: 0,
    width: "100%",
    borderBottom: "1px solid #fff",
    backgroundColor: "#042E6B",
    position: "fixed",
  },
  headercontent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 30px",
  },
  leftheader: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
};
