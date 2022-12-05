import { faBell, faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "@mui/material";
import React from "react";
import Logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <div style={styles.headerArea}>
      <img src={Logo} alt="Logo" width="150" />
      <div style={styles.leftheader}>
        <FontAwesomeIcon
          icon={faCalendar}
          size="xs"
          style={{ color: "#fff" }}
        />
        <FontAwesomeIcon icon={faUser} size="xs" style={{ color: "#fff" }} />
        <FontAwesomeIcon icon={faBell} size="xs" style={{ color: "#fff" }} />
        <Avatar sx={{ bgcolor: "#333", height: 24, width: 24 }}>B</Avatar>
      </div>
    </div>
  );
};

export default Header;

// STYLES
const styles = {
  headerArea: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #fff",
    padding: "10px 20px",
    backgroundColor: "#042E6B",
  },
  leftheader: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
  },
};
