import React from "react";
import ContactInfo from "./ContactInfo";
import Header from "../Header/Header";
import Form from "./Form";

export default function Contact() {
  return (
    <div className="flex flex-col justify-center   pt-20 gap-4 pb-8">
      <Header
        title={"Contact"}
        desc={" Your next project starts with a message"}
      />
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        <ContactInfo />
        <Form />
      </div>
    </div>
  );
}
