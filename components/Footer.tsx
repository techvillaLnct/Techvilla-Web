import Image from "next/image";
import Link from "next/link";
import {inter} from '../app/fonts'

export const Footer = () => {
    return (
        <div className="flex flex-col gap-6 my-3 bg-black py-8 px-4 md:px-16">
            <div className={`${inter.className} flex flex-col md:flex-row items-center md:justify-between gap-6`}>
                {/* Join Us Section */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <p className="text-lg md:text-xl font-medium">Join Us:</p>
                    <div className="flex gap-4">
                        <Link href={"https://www.instagram.com/techvilla_lnct/"} target="_blank"   >
                            <Image src="/insta.svg" width="40" height="40" alt="Instagram" className="hover:scale-125 transition-transform" />
                        </Link>
                        <Link href={"https://x.com/Techvilla_"} target="_blank" >
                            <Image src="/X.svg" width="40" height="40" alt="X" className="hover:scale-150 transition-transform" />
                        </Link>
                        <Link href={"https://github.com/techvillaLnct"} target="_blank" >
                            <Image src="/github.svg" width="40" height="40" alt="GitHub" className="hover:scale-[1.7] transition-transform" />
                        </Link>
                        <Link href={"https://www.linkedin.com/in/tech-villa-660a8a290"} target="_blank" >
                            <Image src="/linkedin.svg" width="40" height="40" alt="LinkedIn" className="hover:scale-[1.8] transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Contact Us Section */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <p className="text-lg md:text-xl font-medium">Contact Us:</p>
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                            <Image src="/email.svg" width="20" height="20" alt="Email" />
                            <p className="text-sm md:text-base">codingclub@lnct.ac.in</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image src="/email.svg" width="20" height="20" alt="Email" />
                            <p className="text-sm md:text-base">techvillalnct@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className={`${inter.className}  text-center text-xl   md:text-base`}>
                <p className="text-lg">Copyright © 2024 by <span className="font-semibold ">TECHVILLA LNCT</span>. All rights reserved.</p>

            </div>
        </div>
    );
};
