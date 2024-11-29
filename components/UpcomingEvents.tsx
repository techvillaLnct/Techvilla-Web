import Image from "next/image"
import { Button } from "@/Components/Button"
import { useRouter } from "next/navigation"
export const UpcomingEvent = () => {
    const router = useRouter()
    return <div id="events" className="w-full max-w-md flex flex-col  gap-4 border  rounded-md backdrop-blur-lg">

        <Image src={"/orientation.png"} className="rounded-md w-full " width={500} height={0} alt=""  ></Image>
        <h1 className="text-center font-semibold ">Techvilla Orientation 2024-25</h1>
        <p className="font-extralight px-4" >Join us for the session Packed Orientation session for the Offical Coding Club of Lnct</p>
        <div className="flex flex-col gap-2">
            <div className="flex gap-2 px-8">
                <Image src={"/Location.svg"} alt="" width={28} height={28} ></Image>
                <p>LNCTE Auditorium</p>
            </div>
            <div className="flex gap-2  px-8">
                <Image src={"/date.svg"} alt="" width={28} height={28} ></Image>
                <p>23rd october</p>
            </div>
        </div>
        <div className=" p-2">
            <Button className="w-full" onClick={() => {
                router.push("https://lu.ma/f6pqfzl8")
            }}
            >Register Now</Button>
        </div>
    </div>
}