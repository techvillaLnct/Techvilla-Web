import { Appbar } from "@/components/Appbar";
import { inter } from '../fonts'
import Image from "next/image";
export default function Codebeta() {
  return (
    <div className="h-full  w-screen  bg-center bg-cover  text-white  " style={{ backgroundImage: "url('/techvilla-bg.png')" }}>
      <div >
        <Appbar />
      </div>
      <div>
        <h1 id="events" className={`${inter.className} text-center text-xl text-white  rounded-2xl p-2 mt-10 md:mt-16`}>Winners Codebeta 2.0</h1> 
        <div className="flex gap-10 mt-4 justify-center items-center">
        <Image src={"/codevita/1st_ codevita.jpg"} width={400} height={200} alt="" className="hover:scale-110 transition-transform"  />
        <Image src={"/codevita/1st_ codevita.jpg"} width={450} height={250} alt="" className="hover:scale-125 transition-transform" />
        <Image src={"/codevita/1st_ codevita.jpg"} width={400} height={200} alt="" className="hover:scale-110 transition-transform" />

        </div>


      </div>
    </div>
  );
}
