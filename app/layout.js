import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const myFont = localFont({ src: "../public/ShareTechMono-Regular.ttf" });

export const metadata = {
  title: "Solar System",
  description: "Developed by Nadim Chowdhury",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={myFont.className}>{children}</body>
    </html>
  );
}
