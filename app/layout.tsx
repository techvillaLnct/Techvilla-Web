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
        <Link href={"https://lu.ma/ncvzi4pj"} className="flex justify-center bg-[#FF8B12] font-semibold py-1  ">
          Register For CodeBeta 2.0 before 5th December Time Running Out !!
        </Link>
        {children}
      </body>
    </html>
  );
}
