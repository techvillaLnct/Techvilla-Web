import Image from "next/image"
import Link from "next/link"
export const Footer = () => {
    return <div className="flex flex-col gap-4 my-3 backdrop-blur-lg py-10">
        <div className="flex mx-16 justify-between">
            <div className="flex items-center gap-4">
                <p className="text-xl" >Join Us:</p>
                <div className="flex gap-2">
                    <Link href={"https://www.instagram.com/techvilla_lnct/"} >
                        {/* Instagram */}
                        <Image src="/insta.svg" width="50" height="50" alt="" />
                    </Link>
                    <Link href={""}>
                        {/* X */}
                        <Image src="/X.svg" width="50" height="50" alt="" />
                    </Link>
                    <Link href={""}>
                        {/* Github */}
                        <Image src="/github.svg" width="50" height="50" alt="" />
                    </Link>
                    <Link href={""}>
                        {/* LinkedIn */}
                        <Image src="/linkedin.svg" width="50" height="50" alt="" />
                    </Link>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div>
                    Contact us:
                </div>
                <div>
                    <div className="flex items-center gap-2">
                        <Image src="/email.svg" width="25" height="25" alt="" />
                        <p>codingclub@lnct.ac.in</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <Image src="/email.svg" width="25" height="25" alt="" />
                        <p>techvillalnct@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="text-center text-x5">
            Copyrights 2024 by <span className="text-semibold" >TECHVILLA LNCT</span>. All rights reserved.
        </div>
    </div>
}