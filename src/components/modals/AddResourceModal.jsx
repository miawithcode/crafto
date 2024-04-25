"use client"

import { useAppContext } from "@/context/context"
import { EnvelopeIcon, XMarkIcon } from "@heroicons/react/24/outline";

const AddResourceModal = () => {
  const { closeModal } = useAppContext();

  return (
    <div className="fixed inset-0 z-[99] grid h-full w-full place-content-center bg-white/30 backdrop-blur-md">
      <div className="relative w-[60vw] max-w-[600px] rounded-lg bg-white p-8 shadow-lg">
        <div className="flex w-full justify-end">
          <button onClick={closeModal}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <h2 className="text-3xl font-bold">Add a resource</h2>

        <p className="pt-4">Thanks for contributing to Crafto!</p>
        <p className="pt-4">
          You can click the button below to add resource via email.
        </p>
        <p className="pt-4">It would be nice if you can include:</p>
        <ul className="list-disc pb-4 pl-4 text-textMuted">
          <li>What the resource is</li>
          <li>The resource link</li>
          <li>Why you would like to recommend it</li>
        </ul>

        <div className="relative flex items-center gap-3 pb-4 pt-4">
          <div className="flex items-center gap-2">
            <EnvelopeIcon className="h-4 w-4" />
            <p className="font-semibold">hello@crafto.dev</p>
          </div>
          <a
            className="rounded-md bg-bgBlack px-2 py-1 text-sm text-white shadow-sm"
            href="mailto:hello@crafto.dev"
          >
            Send email
          </a>
        </div>
      </div>
    </div>
  );
}
export default AddResourceModal