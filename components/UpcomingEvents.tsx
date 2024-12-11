import Image from "next/image"
import { Button } from "@/components/Button"
import { useRouter } from "next/navigation"
export const UpcomingEvent = () => {
    const router = useRouter()
    return <div id="events" className=" max-w-md flex flex-col  gap-4 border  rounded-md backdrop-blur-lg">

        <Image src={"/codebeta2.0.png"} className="rounded-md  " width={1000} height={0} alt=""  ></Image>
        <h1 className="text-center font-semibold ">CodeBeta 2.0</h1>
        <p className="font-extralight px-4" >Join us for most awaiting LNCT Coding Competition - CODEBETA 2.0</p>
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 px-8">
                <Image src={"/Location.svg"} alt="" width={28} height={28} ></Image>
                <p>LNCTE Auditorium</p>
            </div>
            <div className="flex gap-2  px-8">
                <Image src={"/date.svg"} alt="" width={28} height={28} ></Image>
                <p>14th December</p>
            </div>
        </div>
        <div className=" p-2">
            <Button className="w-full" onClick={() => {
                router.push("/codebeta")
            }}
            >Register Now</Button>
        </div>
    </div>
}