import type { Metadata } from "next";
// import { Michroma } from "next/font/google";
import { inter } from "./fonts";
import "./globals.css";
// import Link from "next/link"
import { Analytics } from '@vercel/analytics/next';

// const inter = Michroma({
//   weight: "400", 
//   subsets: ["latin"], 
// });


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
    <html lang="en" className={inter.className} >
      <head><link rel="icon" href="/favicon_io/favicon.ico" sizes="any"   /></head>
      <body
        className={` antialiased overflow-x-hidden`}
      >
        {/* <Link href={"/codebeta-2.0"} className="flex justify-center bg-[#FF8B12] text-black font-semibold py-1  p-8 w-screen ">
          Register For CodeBeta 2.0!!   Can be used for any new upcoming event
        </Link> */}
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
