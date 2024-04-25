import Resources from "@/components/sections/Resources/Resources";

const Page = ({ params }) => {
  const { categoryId } = params;

  return <Resources categoryId={categoryId} />;
};
export default Page