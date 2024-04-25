import { getCategories, getResourceCountsByCategory } from "@/lib/data";
import Category from "./Category";

const Categories = async () => {

    const { categories } = await getCategories();
    const { counts } = await getResourceCountsByCategory();

  return (
    <div className="no-scrollbar flex flex-row items-start justify-start overflow-x-auto md:flex-col md:justify-center">
      {categories.map((category) => {
        return (
          <Category key={category.sys.id} category={category} counts={counts} />
        );
      })}
    </div>
  );
}
export default Categories