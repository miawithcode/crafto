import ResourceCardSkeleton from "./ResourceCardSkeleton";

const ResourcesSkeleton = () => {
  return (
    <div className="grid w-full gap-5 lg:grid-cols-2 xl:grid-cols-3">
      <ResourceCardSkeleton />
      <ResourceCardSkeleton />
      <ResourceCardSkeleton />
      <ResourceCardSkeleton />
      <ResourceCardSkeleton />
      <ResourceCardSkeleton />
    </div>
  );
}
export default ResourcesSkeleton