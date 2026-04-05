import AboutText from "./AboutText";
import Cards from "./Cards";
import Header from "../Header/Header";
export default function AboutMe() {
  return (
    <div className="flex flex-col justify-center  pt-20  gap-2">
      <Header
        title={"About Me"}
        desc={
          "A passionate developer focused on building meaningful user experiences"
        }
      />
      <div className="grid grid-cols-2  gap-8 ">
        <div className="col-span-2 md:col-span-1">
          <AboutText />
        </div>
        <div className=" col-span-2 md:col-span-1">
          <Cards />
        </div>
      </div>
    </div>
  );
}
