"use client"
import { Button2 } from "./Button2";
import Image from "next/image";
import { useRouter } from "next/navigation"
import {geistVF} from '../app/fonts'
interface Roadmaps {
    img: string,
    title: string,
    desc: string,
    link: string
}

export const Roadmaps = ({ title, desc, img, link }: Roadmaps) => {
    const router = useRouter()
    return (
        <div className="relative w-80 md:w-96 md:h-96 overflow-hidden rounded-lg p-[1px]  backdrop-blur-2xl shadow-2xl border border-white ">
            <div className="relative flex h-full w-full flex-col gap-2 rounded-lg bg-black">
                <Image alt="" src={img} width={500} height={500} className="rounded-b-sm object-cover w-full h-48 " />
                <p className="font-semibold text-center text-white">{title}</p>
                <div className="p-4">
                    <p className={`${geistVF.className} text-lg text-left text-white`}>{desc}</p>
                    <div className="flex justify-center mt-4 ">
                        <Button2 onClick={() => {
                            router.push(link)
                        }} text="Learn" />
                    </div>
                </div>
            </div>
        </div>
    );
};
