import { getResourcesByCategory } from "@/lib/data";
import ResourceCard from "./ResourceCard";

const Resources = async ({categoryId}) => {
  const { resources } = await getResourcesByCategory(categoryId);

  return (
    <div className="grid w-full gap-5 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {resources.map((resource) => (
        <ResourceCard key={resource.sys.id} resource={resource.fields} />
      ))}
    </div>
  );
}
export default Resources