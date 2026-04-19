"use client";
import React from "react";
import { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: false,
      callbackUrl: "/",
    });
    console.log(res);
    if (res.ok) {
      toast.success("logged in successfully");
      window.location.href = "/manage";
    } else {
      toast.error(res.error);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center    pt-20 gap-2  min-h-[90vh]">
      <Container maxWidth="sm">
        <Paper elevation={3} sx={{ padding: 4, marginTop: 8 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Login
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              name="email"
              type="email"
              fullWidth
              autoComplete="email"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <TextField
              label="Password"
              name="password"
              type="password"
              fullWidth
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              required
              autoComplete="current-password"
            />

            <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}
