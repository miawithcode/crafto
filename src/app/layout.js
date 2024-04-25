import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/context";

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
      <body className={inter.className}>
        <AppProvider>
          <main>{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
