import BackButton from "@/components/Buttons/backbutton";
import Header from "@/components/Header/Header";
import CategoriesContainer from "@/components/Projects/CategoriesContainer";

export const metadata = {
  title: "Categories",
  description:
    "Explore different categories of projects built by Youssef Ashraf using modern technologies like React and Next.js.",
};
export default function Products() {
  return (
    <div className="flex flex-col    pt-20 gap-2  min-h-[90vh]">
      <div className="self-start">
        <BackButton text="Back To Home Page" to="/" />
      </div>
      <Header
        title={"Projects"}
        desc={
          "Browse my work by category to explore different types of projects"
        }
      />
      <CategoriesContainer />
    </div>
  );
}
