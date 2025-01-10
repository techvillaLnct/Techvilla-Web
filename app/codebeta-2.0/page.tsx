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
        <h1 id="events" className={`${inter.className} text-center text-3xl font-bold md:text-5xl text-white  rounded-2xl p-2 mt-10 md:mt-16`}>Winners Codebeta 2.0</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 mx-8 gap-4  mt-4 justify-items-center items-center">
          <Image src={"/codevita/2nd_codevita.png"} width={400} height={200} alt="" className="hover:scale-110 transition-transform" />
          <Image src={"/codevita/1st_ codevita.jpg"} width={450} height={250} alt="" className="hover:scale-125 transition-transform" />
          <Image src={"/codevita/3rd_codevita.png"} width={400} height={200} alt="" className="hover:scale-110 transition-transform" />
        </div>
        <h1 id="events" className={`${inter.className} text-center text-3xl font-bold md:text-5xl text-white  rounded-2xl p-2 mt-10 md:mt-16`}>Milestones</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8  py-4">
          <div className="flex flex-col gap-4 justify-center items-center mt-4">
            <h1 className={` text-2xl font-bold md:text-3xl ${inter.className}`}>Total Rounds</h1>
            <p className="text-5xl ">3</p>
            <p className="text-xl font-bold md:text-xl tracking-widest">Competitive Level</p>
          </div>
          
            <div className="flex flex-col gap-4 justify-center items-center mt-4">
              <h1 className={` text-2xl font-bold md:text-3xl ${inter.className}`}>Total Participations</h1>
              <p className="text-5xl ">150+</p>
              <p className="text-xl font-bold md:text-xl tracking-widest">Students</p>
            </div>
            
              <div className="flex flex-col gap-4 justify-center items-center mt-4">
                <h1 className={` text-2xl font-bold md:text-3xl ${inter.className}`}>Coding Platform</h1>
                <Image src={"/hackerearth.png"} alt="" width={70} height={70} />
                <p className="text-xl font-bold md:text-xl tracking-widest">Hackerearth</p>
            </div>

        </div>
        <h1 id="events" className={`${inter.className} text-center text-3xl font-bold md:text-5xl text-white  rounded-2xl p-2 mt-10 md:mt-16`}>Glimpses</h1>
        <Glimpses />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
