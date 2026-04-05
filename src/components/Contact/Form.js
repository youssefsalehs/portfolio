import React from "react";
import { TextField } from "@mui/material";
import { IoIosSend } from "react-icons/io";
import MyButton from "../Buttons/mybutton";

export default function Form() {
  return (
    <div className="w-full lg:w-[49%]  rounded-md overflow-hidden bg-primary-800 border border-secondary-700 bg-opacity-10 p-8 ">
      <form className="flex flex-col gap-6 h-full justify-between   ">
        <div className="w-full flex flex-col gap-2">
          <label className="text-lg font-semibold ">Name</label>
          <TextField
            variant="standard"
            type="text"
            name="name"
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
            className="w-full rounded-md outline-none px-4 py-2 resize-none border border-primary-800 focus:border-secondary-900"
            rows={5}
            multiline
          />
        </div>

        <MyButton variant={"secondary"}>
          <IoIosSend /> Send Message
        </MyButton>
      </form>
    </div>
  );
}
