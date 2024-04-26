import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ResourceCard = ({ resource }) => {
  const { title, url, description, image } = resource;

  return (
    <a
      target="_blank"
      href={url}
      className="group group relative rounded-lg bg-bgGray px-5 py-4 shadow-sm transition hover:shadow-md"
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

      {/* Hover Overlay */}
      <div className="absolute bottom-0 left-0 hidden h-1/6 w-full rounded-b-lg bg-bgBlack text-white group-hover:flex group-hover:justify-center group-hover:items-center">
        Visit site <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2" />
      </div>
    </a>
  );
};
export default ResourceCard;
