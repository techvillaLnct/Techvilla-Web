import Image from "next/image";
import Link from "next/link";
import {geistVF} from '../app/fonts'

export const Footer = () => {
    return (
        <div className="flex flex-col gap-6 my-3 bg-black py-8 px-4 md:px-16">
            <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
                {/* Join Us Section */}
                <div className="flex flex-col items-center md:items-start gap-4">
                    <p className="text-lg md:text-xl font-medium">Join Us:</p>
                    <div className="flex gap-4">
                        <Link href={"https://www.instagram.com/techvilla_lnct/"}>
                            <Image src="/insta.svg" width="40" height="40" alt="Instagram" />
                        </Link>
                        <Link href={""}>
                            <Image src="/X.svg" width="40" height="40" alt="X" />
                        </Link>
                        <Link href={""}>
                            <Image src="/github.svg" width="40" height="40" alt="GitHub" />
                        </Link>
                        <Link href={""}>
                            <Image src="/linkedin.svg" width="40" height="40" alt="LinkedIn" />
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
            <div className="text-center text-sm md:text-base">
                Copyright © 2024 by <span className="font-semibold">TECHVILLA LNCT</span>. All rights reserved.
            </div>
        </div>
    );
};
