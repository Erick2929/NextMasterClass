import User from "@/components/user";
import { Avatar, Button, Paper, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useEffect, useState } from "react";

const generarUsuario = async () => {
  const url = "https://randomuser.me/api/?results=5";
  const respuesta = await fetch(url);
  const data = await respuesta.json();
  console.log("data: ", data?.results);
  return data?.results;
};

const RandomUser = () => {
  const [userRandomData, setUserRandomData] = useState([]);

  useEffect(() => {
    const hola = async () => {
      const userData = generarUsuario();
      setUserRandomData(await userData);
    };

    hola();
  }, []);

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
      <Stack spacing={2}>
        {userRandomData?.map((value) => {
          return (
            <User
              key={value.id.value}
              name={value.name}
              profilePic={value.picture}
              email={value.email}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default RandomUser;
