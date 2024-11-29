import Image from "next/image"
import { Button } from "./Button"
export const PastEvents = () => {
    return <div className="w-full max-w-lg flex flex-col  gap-4 border p-6 rounded-md backdrop-blur-lg">
        <Image src={"/codebeta-winners.jpg"} className="rounded-md" width={500} height={1200} alt="" ></Image>
        <h1 className="text-center">Techvilla Orientation 2024-25</h1>
        <p>Join us for the session Packed Orienatation session for the Offical Coding Club of Lnct</p>

        <div className="flex flex-col gap-2">
            <div className="flex gap-2">
                <Image src={"/Location.svg"} alt="" width={28} height={28} ></Image>
                <p>LNCTE Auditorium</p>
            </div>
            <div className="flex gap-2">
                <Image src={"/date.svg"} alt="" width={28} height={28} ></Image>
                <p>23rd october</p>
            </div>
        </div>
        <Button>Register Now</Button>
    </div>
}