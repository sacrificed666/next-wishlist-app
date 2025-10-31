import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "WishList App",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className="">
        <Header />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
