"use client";

import Link from "next/link";

import LogoBlack from "@/components/svgs/LogoBlack";
import { useAppContext } from "@/context/context";
import Container from "@/components/container/Container";
import AddResourceButton from "@/components/buttons/AddResourceButton";
import AddResourceModal from "@/components/modals/AddResourceModal";

const Navbar = () => {
  const { isOpen } = useAppContext();

  return (
    <nav>
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <LogoBlack />
            <p className="text-xl font-bold capitalize md:text-2xl">Crafto</p>
          </Link>
          <div>
            <AddResourceButton />
            {isOpen && <AddResourceModal />}
          </div>
        </div>
      </Container>
    </nav>
  );
};
export default Navbar;
