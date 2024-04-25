"use client";

import { cn } from "@/lib/utils";
import {
  CodeBracketIcon,
  CursorArrowRaysIcon,
  DocumentTextIcon,
  EyeDropperIcon,
  PuzzlePieceIcon,
  SparklesIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Category = ({ category, counts }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { label, categoryId } = category.fields;
  const count = counts[categoryId];

  const [currentPath, setCurrentPath] = useState("web-inspiration");

  useEffect(() => {
    setCurrentPath(pathname.split("/")[1] || "web-inspiration");
  }, [pathname]);

  return (
    <button
      className={cn(
        "relative flex items-center justify-center whitespace-nowrap px-3 py-2 text-sm font-medium capitalize tracking-tight md:h-11 md:w-52 md:justify-start md:px-0 md:py-0 md:text-base",
        {
          "text-white": categoryId === currentPath,
        },
      )}
      onClick={() => router.push(`/${categoryId}`, { scroll: false })}
    >
      <div className="flex items-center gap-x-1 md:ml-6">
        {categoryId === "web-inspiration" && (
          <SparklesIcon className="h-6 w-6 pr-1" />
        )}
        {categoryId === "ui-kit" && (
          <SquaresPlusIcon className="h-6 w-6 pr-1" />
        )}
        {categoryId === "ui-elements" && (
          <CodeBracketIcon className="h-6 w-6 pr-1" />
        )}
        {categoryId === "icon" && <PuzzlePieceIcon className="h-6 w-6 pr-1" />}
        {categoryId === "svg" && (
          <CursorArrowRaysIcon className="h-6 w-6 pr-1" />
        )}
        {categoryId === "color" && <EyeDropperIcon className="h-6 w-6 pr-1" />}
        {categoryId === "typography" && (
          <DocumentTextIcon className="h-6 w-6 pr-1" />
        )}
        {categoryId === "toolkit" && (
          <SquaresPlusIcon className="h-6 w-6 pr-1" />
        )}
        {label}
        {count && (
          <span className="flex items-center text-xs text-textMuted mix-blend-exclusion md:text-sm">
            {`(${count})`}
          </span>
        )}
      </div>
      {categoryId === currentPath && (
        <motion.span
          className="absolute inset-0 -z-10 rounded-md bg-bgBlack"
          layoutId="currentPath"
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        ></motion.span>
      )}
    </button>
  );
};
export default Category;
