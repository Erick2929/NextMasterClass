import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Logo from "../../public/assets/images/Ternium_Logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    console.log("email: ", email);
  }, [email]);
  useEffect(() => {
    console.log("Password: ", password);
  }, [password]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "whitesmoke",
      }}
    >
      <Paper
        sx={{
          width: "400px",
          padding: "50px",
        }}
      >
        <Stack spacing={2}>
          <Image
            src={Logo}
            height={80}
            alt='Logo-termiun'
            style={{ alignSelf: "center" }}
          />
          <TextField
            label='Correo Electronico'
            type='email'
            id='email'
            onChange={handleEmailChange}
          />
          <TextField
            label='Password'
            type='password'
            onChange={handlePasswordChange}
          />
          <Button
            variant='contained'
            sx={{ width: "80%", height: 52, alignSelf: "center" }}
            onClick={() =>
              console.log("email: ", email, "Passwoprd: ", password)
            }
          >
            Continuar
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Login;
