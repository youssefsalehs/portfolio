import { categories } from "@/constants/constants";
import CategoryCard from "./CategoryCard";
export default function CategoriesContainer() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      {categories.map((category, i) => (
        <CategoryCard category={category} key={i} />
      ))}
    </div>
  );
}
