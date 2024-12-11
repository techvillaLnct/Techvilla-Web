import Image from "next/image"
import { Button } from "@/components/Button"
import { useRouter } from "next/navigation"
import {inter} from '../app/fonts'
export const UpcomingEvent = () => {
    const router = useRouter()
    return <div className={` ${inter.className} max-w-sm md:max-w-xl flex flex-col  gap-4 border  rounded-md backdrop-blur-lg`}>

        <Image src={"/codebeta2.0.png"} className="rounded-md  " width={1500} height={0} alt=""  ></Image>
        <h1 className={` ${inter.className} text-center text-xl font-bold tracking-wider`}>CodeBeta 2.0</h1>
        <p className={` ${inter.className} text-center   px-4 text-lg font-medium`} >Join Us For Most Awaiting Coding Competition - CODEBETA 2.0</p>
        <div className="flex justify-between gap-2">
            <div className="flex gap-2 px-8">
                <Image src={"/Location.svg"} alt="" width={28} height={28} ></Image>
                <p>G-01 , LNCT</p>
            </div> 
            <div className="flex gap-2  px-8">
                <Image src={"/date.svg"} alt="" width={28} height={28} ></Image>
                <p>14th December</p>
            </div>
        </div>
        <div className=" p-2">
            <Button className="w-full text-lg hover:scale-[1.01] transition-transform" onClick={() => {
                router.push("/codebeta-2.0")
            }}
            >Register Now</Button>
        </div>
    </div>
}