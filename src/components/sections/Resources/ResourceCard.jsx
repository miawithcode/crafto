import Image from "next/image";

const ResourceCard = ({ resource }) => {
  const { title, url, description, image } = resource;

  return (
    <a
      target="_blank"
      href={url}
      className="relative rounded-lg bg-bgGray px-5 py-4 shadow-sm transition hover:shadow-md"
    >
      <div className="relative h-[25vh] w-full lg:h-[20vh]">
        <Image
          className="rounded-xl object-cover object-center"
          src={`https:${image.fields.file.url}`}
          alt={title}
          fill  
        />
      </div>

      <div className="py-4">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="pt-2 text-sm tracking-tight text-textMuted">
          {description}
        </p>
      </div>
    </a>
  );
};
export default ResourceCard;
