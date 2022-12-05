import { Button, FormControl, TextField } from "@mui/material";
import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pass, setPass] = useState("");

  // HANDLE LOGIN
  const handleLogin = async () => {
    try {
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="Login">
      <div className="loginWrapper">
        <h3 className="formTitle">Admin Login</h3>
        <FormControl className="formControl">
          <TextField
            id="email"
            label="Username/ Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id="email"
            type="password"
            label="Password"
            variant="outlined"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button islo onClick={handleLogin} variant="contained">
            Login
          </Button>
        </FormControl>
        <p>
          Forgot password ? <span>Reset</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
