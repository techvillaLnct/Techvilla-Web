import { Appbar } from "@/components/Appbar";
import { inter } from '../fonts'
import Image from "next/image";
import { Glimpses } from "@/components/Glimpses";
import { Footer } from "@/components/Footer";
export default function Codebeta() {
  return (
    <div className="h-full  w-screen  bg-center bg-cover  text-white  " style={{ backgroundImage: "url('/techvilla-bg.png')" }}>
      <div >
        <Appbar />
      </div>
      <div>
        <h1 id="events" className={`${inter.className} text-center text-5xl text-white  rounded-2xl p-2 mt-10 md:mt-16`}>Winners Codebeta 2.0</h1>
        <div className="flex gap-10 mt-4 justify-center items-center">
          <Image src={"/codevita/2nd_codevita.png"} width={400} height={200} alt="" className="hover:scale-110 transition-transform" />
          <Image src={"/codevita/1st_ codevita.jpg"} width={450} height={250} alt="" className="hover:scale-125 transition-transform" />
          <Image src={"/codevita/3rd_codevita.png"} width={400} height={200} alt="" className="hover:scale-110 transition-transform" />
        </div>
        <h1 id="events" className={`${inter.className} text-center text-5xl text-white  rounded-2xl p-2 mt-10 md:mt-16`}>Milestones</h1>
        <div className="flex flex-col gap-4 justify-center items-center mt-4">
          <h1 className={` text-3xl ${inter.className}`}>Total Participations</h1>
          <p className="text-5xl ">150+</p>
          <p className="text-2xl tracking-widest">Students</p>
        </div>
        <h1 id="events" className={`${inter.className} text-center text-2xl text-white  rounded-2xl p-2 mt-10 md:mt-16`}>Glimpses</h1>
        <Glimpses/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}
