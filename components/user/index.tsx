import { Avatar, Paper, Typography } from "@mui/material";
import React from "react";

function User({ name, profilePic }) {
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
    </Paper>
  );
}

export default User;
