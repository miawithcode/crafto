import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/context";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import Container from "@/components/container/Container";
import Categories from "@/components/sections/Categories/Categories";

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
            <div className="flex-1 flex-grow">
              <Hero />
              <section className="relative h-full py-8 md:pb-32 md:pt-16">
                <Container>
                  <div className="gap-8 md:flex lg:gap-10 xl:gap-12">
                    <div className="sticky bottom-0 top-0 z-50 bg-bgBody py-4 md:static md:flex-shrink-0 md:bg-transparent md:py-0">
                      <Categories />
                    </div>
                    <div className="md:flex-grow">{children}</div>
                  </div>
                </Container>
              </section>
            </div>
            {/* <Footer /> */}
          </main>
        </AppProvider>
      </body>
    </html>
  );
}
