"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/Button"
import { useState } from "react";

export const Appbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex items-center justify-between px-5 py-3 backdrop-blur-sm text-white text-xl">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Image src="/Logo.svg" width={50} height={10} alt="Logo" />
            </div>

            {/* Mobile Menu Button */}
            <button onClick={toggleMenu} className="md:hidden focus:outline-none" aria-label="Toggle Menu"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                    )}
                </svg>
            </button>

            {/* Navigation Links */}
            <div
                className={`${isOpen ? "block" : "hidden"
                    } absolute top-16 left-0 w-full bg-gray-800 md:bg-transparent md:static md:flex md:items-center md:gap-5 md:w-auto`}
            >
                <div className="flex flex-col md:flex-row md:items-center gap-6 px-4 py-2 md:p-0">
                    <Link href="/" className="hover:text-gray-300 hover:scale-110 transition-transform">
                        Home
                    </Link>
                    <Link href="/resources" className="hover:text-gray-300 hover:scale-110 transition-transform">
                        Resources
                    </Link>
                    <Link href="/codebeta-2.0" className="hover:text-gray-300 hover:scale-110 transition-transform">
                        CodeBeta 2.0
                    </Link>
                    <Link href="#team" className="hover:text-gray-300 hover:scale-110 transition-transform">
                        Our Team
                    </Link>
                    <Link href="#events" className="hover:text-gray-300 hover:scale-110 transition-transform">
                        Events
                    </Link>
                    <Button variant="outline" className="mt-2 md:mt-0 hover:scale-110 transition-transform">
                        Login
                    </Button>
                </div>
            </div>
        </div>
    );
};
