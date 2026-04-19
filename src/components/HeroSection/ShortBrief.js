import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/constants/constants";
import { Typography } from "@mui/material";
import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";
import { MdWork } from "react-icons/md";
import MyButton from "../Buttons/mybutton";
const icons = {
  FaGithub: <FaGithub />,
  FaLinkedinIn: <FaLinkedinIn />,
  SiGmail: <SiGmail />,
  FaWhatsapp: <FaWhatsapp />,
};
export default function ShortBrief() {
  return (
    <div className="basis-[49.1%]  flex  flex-col  gap-2 overflow-hidden">
      <Typography
        component={"h3"}
        sx={{
          color: "primary.main",
        }}
        className=" !text-center lg:!text-left !font-extrabold !text-2xl lg:!text-3xl"
      >
        MERN Stack Developer
      </Typography>

      <h1 className="text-4xl text-center lg:text-left lg:text-6xl font-bold mb-3 ">
        YOUSSEF<span className="-ml-5"> ASHRAF</span>
      </h1>
      <p className=" w-full md:w-[60%] lg:w-[85%]  self-center lg:self-start text-center lg:!text-left font-semibold  ">
        Computer & Control Systems Engineering student and MERN developer,
        passionate about building modern, user-friendly web apps with Next,
        React, Tailwind CSS, and UX design. Currently exploring backend
        development and databases while contributing to real-world projects.
      </p>
      <div className="flex flex-col md:items-center lg:items-start  gap-6 py-2">
        <div className="flex gap-4 items-center  justify-center lg:justify-start flex-wrap">
          <a href="/resume.pdf" download>
            <MyButton variant="expand">
              <span className="bgExpand"></span>
              <Typography className="flex gap-1 items-center content !font-bold">
                Download CV <HiOutlineDownload size={20} />
              </Typography>
            </MyButton>
          </a>

          <Link href={"/projects"}>
            <MyButton variant={"expand"}>
              <span className="bgExpand"></span>
              <Typography className="flex gap-1 items-center content !font-bold">
                View All Projects
                <MdWork size={20} />
              </Typography>
            </MyButton>
          </Link>
        </div>
      </div>
      <div className="flex gap-4">
        {socialLinks.map((link, i) => (
          <Typography
            component="a"
            key={i}
            aria-label={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: 1,
              bgcolor: "#c27cff22",
              borderColor: "secondary.main",
              borderRadius: 1,
              p: 1.5,
              fontSize: "1.25rem",
              textDecoration: "none",
              color: "inherit",
              transition: "all 0.3s ease",
              "&:hover": {
                bgcolor: "secondary.main",
                borderColor: "secondary.dark",

                boxShadow: "0 0 15px #c27cff65",
              },
            }}
          >
            {icons[link.icon]}
          </Typography>
        ))}
      </div>
    </div>
  );
}
