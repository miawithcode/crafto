import { cn } from "@/lib/utils";

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

const ResourceCardSkeleton = () => {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg bg-bgGray px-5 py-4 shadow-sm",
        shimmer,
      )}
    >
      <div className="relative h-[30vh] w-full rounded-xl bg-white lg:h-[20vh]"></div>
      <div className="py-4">
        <div className="h-6 w-28 rounded-md bg-bgLightGray"></div>
        <div className="mt-3 truncate">
          <div className="h-4 w-full rounded-md bg-bgLightGray"></div>
          <div className="mt-1 h-4 w-1/2 rounded-md bg-bgLightGray"></div>
        </div>
      </div>
    </div>
  );
};
export default ResourceCardSkeleton;
