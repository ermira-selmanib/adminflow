import React from "react";
import { Button, Stack, TextField } from "@mui/material";

export default function Login() {
  return (
    <>
      <Stack
        spacing={2}
        style={{ display: "flex", flexDirection: "column", padding: "5" }}
      >
        <TextField
          id="outlined-basic"
          label="Username"
          size="small"
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Password"
          variant="outlined"
          size="small"
        />
        <Button>Login</Button>
      </Stack>
    </>
  );
}
