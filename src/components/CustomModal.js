import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import CustomSelect from "./CustomSelect";
import { Button, Input, InputLabel } from "@mui/material";
import { useAuth } from "../providers/AuthProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  alignItems: "center",
};
const userRole = ["Admin", "Chv", "Chew"];

export default function CustomModal({ open, handleClose }) {
  const { signUp } = useAuth();
  const [customUserData, SetCustomUserData] = useState({
    name: "",
    email: "",
    user_type: "chv",
  });
  const [selectedItem, setSelectedItem] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    console.log(customUserData);
  }, [customUserData]);

  // Create new user
  const handleRegister = async () => {
    if (
      selectedItem !== "" ||
      (email !== "" && email < 5) ||
      (name !== "" && name < 5) ||
      (password !== "" && password < 4)
    ) {
      SetCustomUserData({
        name: name,
        email: email,
        user_type: selectedItem,
      });

      // SIGNUP USER

      const addUser = await signUp(email, password, customUserData);
    } else {
      console.log("Enter details");
    }
  };

  return (
    <div>
      <Modal open={open} aria-labelledby="modal-modal-title">
        <Box sx={style}>
          <Box sx={{ position: "absolute", left: "98%", top: "-6%" }}>
            <FontAwesomeIcon
              onClick={handleClose}
              icon={faClose}
              style={{ color: "#d21f3c", fontSize: "30px", cursor: "pointer" }}
            />
          </Box>
          {/* CREATE USER FORM */}
          <Box component="form" noValidate autoComplete="off">
            <h3 id="modal-modal-title">
              REGISTER NEW COMMUNITY HEALTH VOLUNTEER
            </h3>
            {/* ROW */}
            <div style={{ marginTop: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "30px" }}>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    placeholder="e.g Melavin Muthamaki"
                  />
                </div>
                <div>
                  <InputLabel htmlFor="email">Email</InputLabel>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    type="email"
                    placeholder="sample@gmail.com"
                  />
                </div>
              </Box>
            </div>
            {/* END ROW */}
            {/* ROW */}
            <div style={{ marginTop: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div style={{ marginRight: "30px" }}>
                  <InputLabel htmlFor="usertype">UserType</InputLabel>
                  <CustomSelect
                    id="usertype"
                    data={userRole}
                    name="UserType"
                    value={selectedItem}
                    setSelectedItem={setSelectedItem}
                  />
                </div>
                <div>
                  <InputLabel htmlFor="pass">Password</InputLabel>
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="pass"
                    placeholder="e.g *****"
                  />
                </div>
              </Box>
            </div>
            {/* END ROW */}
          </Box>
          <Button
            onClick={handleRegister}
            sx={{ width: "100%", backgroundColor: "#91be6d", marginTop: 3 }}
            variant="container"
            color="secondary"
          >
            REGISTER
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
