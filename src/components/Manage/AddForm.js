"use client";
import addProject from "@/lib/ProjectsActions/addProject";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function AddForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    subtitle: "",
    githubLink: "",
    liveLink: "",
    stack: "",
    status: "",
    technologies: [],
    year: "",
    duration: "",
    role: "",
    featured: false,
    overview: "",
    challenges: "",
    features: "",
    learnings: "",
  });
  const options = ["frontend", "backend", "fullstack"];

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      if (
        key === "technologies" ||
        key === "stack" ||
        key === "features" ||
        key === "challenges" ||
        key === "learnings"
      ) {
        formData.append(key, JSON.stringify(form[key].split(",")));
      } else {
        formData.append(key, form[key]);
      }
    });

    if (image) {
      formData.append("image", image);
    }

    const res = await addProject(formData);
    if (res.status === "success") {
      toast.success("Project is created successfully");
      router.push("/");
    } else {
      toast.error(res.message);
    }
    console.log(res);
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className=" space-y-5 ">
        <h2 className="text-3xl font-bold">Create Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4 bg-primary-900 bg-opacity-15 p-4 rounded-lg">
          <h3 className="text-xl font-bold col-span-full"> Main Details</h3>
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            className="input"
          />
          <input
            name="subtitle"
            placeholder="Subtitle"
            onChange={handleChange}
            className="input"
          />

          <input
            name="githubLink"
            placeholder="GitHub Link"
            onChange={handleChange}
            className="input"
          />

          <input
            name="liveLink"
            placeholder="Live Link"
            onChange={handleChange}
            className="input"
          />

          <input
            name="technologies"
            placeholder="React, Node, Tailwind"
            onChange={handleChange}
            className="input"
          />
          <textarea
            name="description"
            placeholder="description"
            onChange={handleChange}
            className="input"
          ></textarea>
          <input
            name="stack"
            placeholder="frontend, backend, fullstack"
            onChange={handleChange}
            className="input"
          />

          <input
            type="number"
            placeholder="year"
            name="year"
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            placeholder="duration"
            onChange={handleChange}
            name="duration"
            className="input"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="input"
          >
            <option value="" disabled hidden>
              Select status
            </option>

            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="planned">Planned</option>
          </select>

          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="input"
          >
            <option value="" disabled hidden>
              Select role
            </option>

            <option value="Frontend Developer">Frontend Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="Backend Developer">Backend Developer</option>
          </select>
          <div className="input flex items-center gap-6">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="featured"
                value="true"
                checked={form.featured === "true"}
                onChange={handleChange}
              />
              Featured
            </label>

            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="featured"
                value="false"
                checked={form.featured === "false"}
                onChange={handleChange}
              />
              Not Featured
            </label>
          </div>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="input col-span-full"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-4 bg-primary-900 bg-opacity-15 p-4 rounded-lg">
          <h3 className="text-xl font-bold col-span-full ">Sections</h3>

          <input
            type="text"
            name="overview"
            placeholder="overview"
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="features"
            placeholder="features"
            onChange={handleChange}
            className="input"
          />
          <input
            type="text"
            name="challenges"
            placeholder="challenges"
            onChange={handleChange}
            className="input "
          />
          <input
            type="text"
            name="learnings"
            placeholder="learnings"
            onChange={handleChange}
            className="input "
          />
        </div>
        <Button
          type="submit"
          sx={{ bgcolor: "secondary.dark", color: "whitesmoke" }}
        >
          create Project
        </Button>
      </form>
    </div>
  );
}
