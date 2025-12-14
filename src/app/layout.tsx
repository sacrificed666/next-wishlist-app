import { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "WishList",
  description: "WishList",
  keywords: ["WishList"],
  authors: [{ name: "Illia Movchko", url: "https://github.com/sacrificed666" }],
  creator: "Illia Movchko",
  publisher: "Illia Movchko",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="min-h-svh center flex-col text-center">
        <Header />
        <main className="max-w-7xl w-full center flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
