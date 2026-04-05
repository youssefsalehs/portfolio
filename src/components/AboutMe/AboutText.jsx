import Highlight from "./Highlight";
export default function AboutText() {
  return (
    <div className="md:basis-[49.1%]  overflow-hidden font-semibold">
      <p className="lg:text-lg text-[--text-default] mb-4">
        I’m a <Highlight>Computer Engineering student</Highlight> and aspiring
        <Highlight> Frontend Developer</Highlight> passionate about building
        user-friendly web apps. I specialize in <Highlight>React</Highlight>,
        <Highlight>Tailwind CSS</Highlight>, and{" "}
        <Highlight>UX design</Highlight>, turning ideas into responsive,
        interactive products.
      </p>

      <p className="lg:text-lg mb-4">
        I bridge design and development to create applications that are visually
        engaging and technically sound, eager to contribute to projects that
        prioritize great user experiences.
      </p>

      <p className="lg:text-lg">
        I’m currently expanding into <Highlight>backend development</Highlight>{" "}
        with
        <Highlight> Node.js</Highlight>, working with databases,{" "}
        <Highlight>Socket.IO</Highlight>, and building full-stack applications.
      </p>
    </div>
  );
}
