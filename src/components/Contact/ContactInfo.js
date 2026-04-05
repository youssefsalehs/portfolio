import { socialLinks } from "@/constants/constants";

const GithubIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.37 .5 0 5.87 0 12.5c0 5.29 3.438 9.77 8.207 11.36.6.11.793-.26.793-.577 0-.285-.01-1.04-.016-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.107-.774.42-1.306.762-1.606-2.665-.304-5.466-1.333-5.466-5.933 0-1.31.468-2.38 1.235-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.655 1.653.242 2.873.12 3.176.77.84 1.234 1.91 1.234 3.22 0 4.61-2.804 5.625-5.476 5.922.431.37.815 1.096.815 2.21 0 1.596-.014 2.885-.014 3.275 0 .32.19.694.8.576C20.565 22.27 24 17.79 24 12.5 24 5.87 18.627.5 12 .5z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg width="24" height="24" viewBox="0 0 448 512" fill="currentColor">
    <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.08 108 0 83.92 0 54.14 0 24.24 24.2 0 53.84 0c29.68 0 53.88 24.24 53.88 54.14 0 29.78-24.2 53.86-53.88 53.86zM447.9 448h-92.68V302.4c0-34.7-12.4-58.4-43.48-58.4-23.7 0-37.8 15.9-44 31.3-2.3 5.5-2.9 13.2-2.9 20.9V448h-92.68s1.2-236.6 0-261.1h92.68v37c-.2.3-.5.7-.7 1h.7v-1c12.3-19 34.3-46 83.3-46 60.8 0 106.4 39.7 106.4 125.1V448z" />
  </svg>
);

const GmailIcon = () => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="currentColor"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg
    fill="currentColor"
    width="24px"
    height="24px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M11.42 9.49c-.19-.09-1.1-.54-1.27-.61s-.29-.09-.42.1-.48.6-.59.73-.21.14-.4 0a5.13 5.13 0 0 1-1.49-.92 5.25 5.25 0 0 1-1-1.29c-.11-.18 0-.28.08-.38s.18-.21.28-.32a1.39 1.39 0 0 0 .18-.31.38.38 0 0 0 0-.33c0-.09-.42-1-.58-1.37s-.3-.32-.41-.32h-.4a.72.72 0 0 0-.5.23 2.1 2.1 0 0 0-.65 1.55A3.59 3.59 0 0 0 5 8.2 8.32 8.32 0 0 0 8.19 11c.44.19.78.3 1.05.39a2.53 2.53 0 0 0 1.17.07 1.93 1.93 0 0 0 1.26-.88 1.67 1.67 0 0 0 .11-.88c-.05-.07-.17-.12-.36-.21z" />
    <path d="M13.29 2.68A7.36 7.36 0 0 0 8 .5a7.44 7.44 0 0 0-6.41 11.15l-1 3.85 3.94-1a7.4 7.4 0 0 0 3.55.9H8a7.44 7.44 0 0 0 5.29-12.72zM8 14.12a6.12 6.12 0 0 1-3.15-.87l-.22-.13-2.34.61.62-2.28-.14-.23a6.18 6.18 0 0 1 9.6-7.65 6.12 6.12 0 0 1 1.81 4.37A6.19 6.19 0 0 1 8 14.12z" />
  </svg>
);

export default function ContactInfo() {
  const renderIcon = (icon) => {
    switch (icon) {
      case "Github":
        return <GithubIcon />;
      case "Linkedin":
        return <LinkedinIcon />;
      case "Gmail":
        return <GmailIcon />;
      case "Whatsapp":
        return <WhatsappIcon />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full lg:w-[49%] rounded-md border border-secondary-700 h-full p-8 bg-primary-800 bg-opacity-10 overflow-hidden">
      <h3 className="text-2xl font-bold mb-6">Let’s connect.</h3>
      <ul className="flex flex-col gap-4">
        {socialLinks.map((link, i) => (
          <li key={i}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <div className="flex gap-4 text-lg px-4 py-4 border border-secondary-700 rounded-md font-semibold hover:-translate-y-2 hover:shadow-[0_0_15px_#c27cff65] transition-all duration-300 bg-[#c27cff12]">
                <span className="p-2 bg-secondary-300 bg-opacity-35 rounded-md text-xl">
                  {renderIcon(link.name)}
                </span>
                {link.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
