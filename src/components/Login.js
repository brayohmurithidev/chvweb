import { Button, FormControl, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

const Login = () => {
  const { user, signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [pass, setPass] = useState("");

  useEffect(() => {
    if (user != null) {
      <Navigate to="/" replace />;
    }
  }, [user]);

  // HANDLE LOGIN
  const handleLogin = async () => {
    if (email === "" || pass === "") {
      console.log("email and password cannot be null");
    } else {
      try {
        setIsLoading(true);
        await signIn(email, pass);
        window.location.pathname = "/";
        setEmail("");
        setPass("");
      } catch (error) {
        console.log(error);
      }
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
            id="pass"
            type="password"
            label="Password"
            variant="outlined"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <Button onClick={handleLogin} variant="contained">
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
