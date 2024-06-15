"use client";

import Container from "@/components/container/Container";
import LogoWhite from "@/components/icons/LogoWhite";
import { useAppContext } from "@/context/context";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Footer = () => {
  const { openModal } = useAppContext();

  return (
    <footer className="relative mt-8 bg-bgBlack py-16 text-white md:mt-16">
      <Container>
        <div className="flex flex-wrap justify-between gap-12 pb-6">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <LogoWhite />
              <p className="text-xl font-bold capitalize md:text-2xl">Crafto</p>
            </Link>
          </div>

          {/* About */}
          <div>
            <h4 className="pb-6 text-lg font-medium">About</h4>
            <div className="flex max-w-sm flex-col gap-2 text-white/70">
              <p className="hover:text-white">
                As a design engineer who have to do both design and code work, I
                often struggle to find quality design resources to make my
                website stand out.
              </p>
              <p className="hover:text-white">
                But as I build along the way, I&apos;ve gathered a bunch of
                useful resources, which I am excited to share, so you don&apos;t
                have to struggle like I used to :)
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="pb-6 text-lg font-semibold">Links</h4>
            <div className="flex flex-col gap-3 text-white/70">
              <button
                className="flex items-center gap-2 transition hover:text-white hover:underline"
                onClick={openModal}
              >
                Add a resource
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </button>
              <a
                href="https://github.com/miawithcode/crafto"
                className="flex items-center gap-2 transition hover:text-white hover:underline"
                target="_blank"
              >
                Contribute on GitHub
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a>
              {/* <a
                href="#"
                className="flex gap-2 items-center hover:text-white hover:underline transition"
                target="_blank"
              >
                Submit feedback
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a> */}
              {/* <a
                href="#"
                className="flex gap-2 items-center hover:text-white hover:underline transition"
                target="_blank"
              >
                Tweet about this
                <ArrowTopRightOnSquareIcon className="h-4 w-4" />
              </a> */}
            </div>
          </div>
        </div>
        <div className="border-t border-white/5 pt-6 text-textMuted">
          {" "}
          &copy; {new Date().getFullYear()} Made and curated by{" "}
          <a
            href="https://github.com/miawithcode"
            target="_blank"
            className="text-white hover:underline"
          >
            Mia
          </a>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
