"use client";
import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";

function CustomTabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default function ProjectTabs({ sections, tech }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary.dark"
        variant="scrollable"
        sx={{
          bgcolor: "background.tertiary",
        }}
      >
        <Tab key={0} label={"Technologies"} sx={{ fontWeight: 900 }} />
        {sections.map((section, index) => (
          <Tab key={index + 1} label={section.title} sx={{ fontWeight: 900 }} />
        ))}
      </Tabs>
      <CustomTabPanel key={0} value={value} index={0}>
        <ul className="flex gap-2 items-center flex-wrap pb-2 ">
          {tech.map((tech) => (
            <li
              className="text-sm px-4 py-1 rounded-full font-bold border border-secondary-500 bg-primary-800 bg-opacity-20"
              key={tech}
            >
              {tech}
            </li>
          ))}
        </ul>
      </CustomTabPanel>
      {sections.map((section, index) => (
        <CustomTabPanel key={index + 1} value={value} index={index + 1}>
          {section.content && <p>{section.content}</p>}

          {section.list && (
            <ul className="list-disc pl-5 space-y-1">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}

          {section.items && (
            <div className="space-y-3">
              {section.items.map((item, i) => (
                <div key={i}>
                  <p>
                    <span className="font-semibold">Problem:</span>{" "}
                    {item.problem}
                  </p>
                  <p>
                    <span className="font-semibold">Solution:</span>{" "}
                    {item.solution}
                  </p>
                </div>
              ))}
            </div>
          )}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
