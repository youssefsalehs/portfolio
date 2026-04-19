"use client";
import updateProject from "@/lib/ProjectsActions/updateProject";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function EditForm({ project }) {
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    description: "",
    subtitle: "",
    githubLink: "",
    liveLink: "",
    stack: "",
    status: "",
    technologies: "",
    year: "",
    duration: "",
    role: "",
    featured: false,
    overview: "",
    challenges: "",
    features: "",
    learnings: "",
  });

  useEffect(() => {
    if (project) {
      setForm({
        title: project.title || "",
        description: project.description || "",
        subtitle: project.subtitle || "",
        githubLink: project.githubLink || "",
        liveLink: project.liveLink || "",
        stack: project.stack?.join(",") || "",
        status: project.status || "",
        technologies: project.technologies?.join(",") || "",
        year: project.year || "",
        duration: project.duration || "",
        role: project.role || "",
        featured: project.featured || false,
        overview: project.overview || "",
        challenges: project.challenges?.join(",") || "",
        features: project.features?.join(",") || "",
        learnings: project.learnings?.join(",") || "",
      });
    }
  }, [project]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...form,
      technologies: form.technologies
        ? form.technologies
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean)
        : [],

      stack: form.stack
        ? form.stack
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean)
        : [],

      features: form.features
        ? form.features
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean)
        : [],

      challenges: form.challenges
        ? form.challenges
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean)
        : [],

      learnings: form.learnings
        ? form.learnings
            .split(",")
            .map((v) => v.trim())
            .filter(Boolean)
        : [],
    };

    const res = await updateProject(project._id, payload);

    if (res.status === "success") {
      toast.success("Project updated successfully");
      router.push("/");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <h2 className="text-3xl font-bold">Edit Project</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-primary-900 bg-opacity-15 p-4 rounded-lg">
        <h3 className="text-xl font-bold col-span-full">Main Details</h3>

        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="input"
        />

        <input
          name="subtitle"
          value={form.subtitle}
          onChange={handleChange}
          placeholder="Subtitle"
          className="input"
        />

        <input
          name="githubLink"
          value={form.githubLink}
          onChange={handleChange}
          placeholder="GitHub Link"
          className="input"
        />

        <input
          name="liveLink"
          value={form.liveLink}
          onChange={handleChange}
          placeholder="Live Link"
          className="input"
        />

        <input
          name="technologies"
          value={form.technologies}
          onChange={handleChange}
          placeholder="React, Node, Tailwind"
          className="input"
        />

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Description"
          className="input"
        />

        <input
          name="stack"
          value={form.stack}
          onChange={handleChange}
          placeholder="frontend, backend, fullstack"
          className="input"
        />

        <input
          type="number"
          name="year"
          value={form.year}
          onChange={handleChange}
          placeholder="Year"
          className="input"
        />

        <input
          type="text"
          name="duration"
          value={form.duration}
          onChange={handleChange}
          placeholder="Duration"
          className="input"
        />

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="input"
        >
          <option value="" disabled>
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
          <option value="" disabled>
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
              checked={String(form.featured) === "true"}
              onChange={handleChange}
            />
            Featured
          </label>

          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="featured"
              value="false"
              checked={String(form.featured) === "false"}
              onChange={handleChange}
            />
            Not Featured
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-primary-900 bg-opacity-15 p-4 rounded-lg">
        <h3 className="text-xl font-bold col-span-full">Sections</h3>

        <input
          name="overview"
          value={form.overview}
          onChange={handleChange}
          placeholder="Overview"
          className="input"
        />

        <input
          name="features"
          value={form.features}
          onChange={handleChange}
          placeholder="Features"
          className="input"
        />

        <input
          name="challenges"
          value={form.challenges}
          onChange={handleChange}
          placeholder="Challenges"
          className="input"
        />

        <input
          name="learnings"
          value={form.learnings}
          onChange={handleChange}
          placeholder="Learnings"
          className="input"
        />
      </div>

      <Button
        type="submit"
        sx={{ bgcolor: "secondary.dark", color: "whitesmoke" }}
      >
        Update Project
      </Button>
    </form>
  );
}
