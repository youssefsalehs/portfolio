"use client";
import React, { useContext, useState } from "react";
import { Button, TextField } from "@mui/material";
import { IoIosSend } from "react-icons/io";
import { ThemeContext } from "@/context/ThemeContext";
import toast from "react-hot-toast";

export default function Form() {
  const { mode } = useContext(ThemeContext);
  const [state, setState] = useState({ name: "", message: "", email: "" });
  async function onSubmit(e) {
    e.preventDefault();

    const formData = {
      name: state.name,
      email: state.email,
      message: state.message,
    };

    const res = await fetch(
      `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORM_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    if (res.ok) {
      toast.success("Message sent!");
      setState({
        email: "",
        name: "",
        message: "",
      });
    } else {
      toast.error("Something went wrong.");
      console.log(res);
    }
  }
  return (
    <div className="w-full lg:w-[49%]  rounded-md overflow-hidden bg-primary-800 border border-secondary-700 bg-opacity-10 p-8 ">
      <form
        className="flex flex-col gap-6 h-full justify-between   "
        onSubmit={onSubmit}
      >
        <div className="w-full flex flex-col gap-2">
          <label className="text-lg font-semibold ">Name</label>
          <TextField
            variant="standard"
            type="text"
            name="name"
            value={state.name}
            onChange={(e) => setState({ ...state, name: e.target.value })}
            id="name"
            placeholder="Enter your name..."
            className="w-full   rounded-md outline-none px-4 py-2 border border-primary-800 focus:border-secondary-900"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-lg font-semibold">Email</label>
          <TextField
            variant="standard"
            type="email"
            name="email"
            id="email"
            value={state.email}
            onChange={(e) => setState({ ...state, email: e.target.value })}
            placeholder="Enter your email..."
            className="w-full   rounded-md outline-none px-4 py-2 border border-primary-800 focus:border-secondary-900"
          />
        </div>

        <div className="w-full flex flex-col gap-2">
          <label className="text-lg font-semibold">Message</label>
          <TextField
            variant="standard"
            name="message"
            id="message"
            placeholder="Write your message..."
            value={state.message}
            onChange={(e) => setState({ ...state, message: e.target.value })}
            className="w-full rounded-md outline-none px-4 py-2 resize-none border border-primary-800 focus:border-secondary-900"
            rows={5}
            multiline
          />
        </div>

        <Button
          sx={{
            bgcolor: "secondary.dark",
            color: mode !== "dark" ? "secondary.light" : "text.primary",
            "&:hover": {
              bgcolor: "primary.dark",
            },
          }}
          variant={"secondary"}
          type="submit"
        >
          <IoIosSend /> Send Message
        </Button>
      </form>
    </div>
  );
}
