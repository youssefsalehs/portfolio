const items = [
  {
    title: "Frontend",
    desc: "Building modern, responsive apps using React, Tailwind, and clean UI/UX principles. Focused on performance and user experience.",
  },
  {
    title: "Backend Journey",
    desc: "Currently learning Node.js, APIs, and databases. Building full-stack projects to understand real-world systems.",
  },
  {
    title: "AI & ML",
    desc: "Exploring Python, Machine Learning, and AI concepts. Interested in combining AI with web applications.",
  },
];

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pb-10 lg:pb-0">
      {items.map((item, i) => (
        <div
          key={i}
          className="bg-primary-800 border-secondary-700 bg-opacity-10 p-6 rounded-lg flex flex-col gap-1 border hover:shadow-[0_0_15px_#c27cff65] transition-all duration-300 cursor-pointer h-full"
        >
          <span className="font-bold text-lg">{item.title}</span>

          <span className="text-sm font-semibold">{item.desc}</span>
        </div>
      ))}
    </div>
  );
}
