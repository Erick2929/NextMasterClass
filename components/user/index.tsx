import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";

function User({ name, profilePic, email }) {
  return (
    <Paper
      sx={{
        width: "300px",
        padding: "50px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar src={profilePic.thumbnail} />
      <Typography sx={{ marginLeft: 1 }} fontSize={25}>
        {" " + name.title + " " + name.first + " " + name.last}
      </Typography>
      <Typography sx={{ marginLeft: 1 }} fontSize={25}>
        {email}
      </Typography>
    </Paper>
  );
}

export default User;
