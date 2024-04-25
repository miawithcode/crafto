"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { useAppContext } from "@/context/context";

const AddResourceButton = () => {
  const { openModal } = useAppContext();

  return (
    <button
      className="flex items-center gap-1 space-y-reverse rounded-md bg-bgBlack px-3 py-2 text-sm font-medium text-white shadow-lg transition hover:bg-bgBlackLight md:px-4 md:py-3 md:text-base"
      onClick={openModal}
    >
      <PlusIcon className="h-4 w-4 lg:h-6 lg:w-6" />
      Add a resource
    </button>
  );
};
export default AddResourceButton;
