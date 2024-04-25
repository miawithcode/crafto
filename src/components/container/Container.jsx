import { cn } from "@/lib/utils";

const Container = ({ children, className }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-screen-2xl px-6 md:px-16 lg:px-24",
        className,
      )}
    >
      {children}
    </div>
  );
};
export default Container