import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/context";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://crafto.dev"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
    },
  },
  title: "Crafto - Empowering frontend developers to build aesthetic websites.",
  description:
    "Handpicked high-quality design resources that assist you in developing stunning websites, even without a designer in team.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          "relative h-full bg-bgBody text-textBlack antialiased",
          inter.className,
        )}
      >
        <AppProvider>
          <main className="relative flex min-h-screen flex-col">
            <Navbar />
            <div className="flex-grow flex-1">
              <Hero />
              <section>{children}</section>
            </div>
            {/* <Footer /> */}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
