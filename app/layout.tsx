import type { Metadata } from "next";
// import localFont from "next/font/local";
import { Michroma } from "next/font/google";
import "./globals.css";
import Link from "next/link"

const michroma = Michroma({
  weight: "400", // Specify the font weight you need
  subsets: ["latin"], // Character subset
});


export const metadata: Metadata = {
  title: "TechVilla",
  description: "Techvilla is Coding Club created in 2023 in LNCT 1994 to empower coding among students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={michroma.className} >
      <body
        className={` antialiased`}
      >
        <Link href={"https://lu.ma/f6pqfzl8"} className="flex justify-center bg-[#FF8B12] font-semibold py-1  ">
          JOIN US FOR OUR ORIENTATION 2024-25 !!
        </Link>
        {children}
      </body>
    </html>
  );
}
