import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "@/components";
import type { Metadata } from "next";
import { Saira } from "next/font/google";
import { Providers } from "@/Providers";

const saira = Saira({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Caputeeno",
  description: "The best e-commerce in the world",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Providers>
          <Header />
          {children}
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
