"use client"
import { Appbar } from "@/components/Appbar";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Button2 } from "@/components/Button2";
import { coreTeam,glimpses } from "@/data/data";
import { useRouter } from "next/navigation"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/Carousel"
import { Team } from "@/components/Team";
import { UpcomingEvent } from "@/components/UpcomingEvents";
import {inter} from '../app/fonts'

export default function Home() {
  const router = useRouter();
  return (
    <div className=" h-full  w-screen  bg-center bg-cover  text-white  " style={{ backgroundImage: "url('/techvilla-bg.png')" }}>
      <div >
        <Appbar />
      </div>
      <div className="mt-20 flex flex-col md:gap-2 gap-20 ">
        {/* Heading of website */}
        <div className="flex flex-col items-center justify-center gap-6 w-11/12 md:w-full relative left-4">
          <div className="md:mt-[10rem]  flex flex-col items-center justify-center gap-4  mx-auto ">
            <div className="w-80  md:w-full">
            <Image src="/techvilla-heading-logo.png" className="flex justify-center items-center" width={662} height={90} alt="" />

            </div>
            <h2 className="text-center font-semibold text-sm md:text-lg">CODE . CREATE . CONTRIBUTE</h2>
            <div className="mt-2 space-y-4 flex flex-col items-center w-full gap-8">
              <p className=" text-center text-sm font-semibold mx-auto">Empowering the Next Generation of Developers</p>
              <Button2 onClick={() => {
                router.push("https://tr.ee/Lgng69lmIE")
              }} text="Join Us" />
            </div>
          </div>
        </div>
        {/* Heading of website finishes */}

        {/* Vision Mission  */}
        <div className="grid grid-cols-1 md:grid-cols-2    lg:grid-cols-3 place-items-center  p-4  gap-14">
          <div className="px-8">
            <Card title="Vision" desc="Our Vision is to empower students with the power of coding and learning in public, that can unlock a world of infinite possibilities, and to alleviate the tech leaders of tommorow." />
          </div>
          <div>
            <Card title="About Us" desc="TechVilla, LNCT's Coding Club, is a dynamic heven.We offer skill development, project collaboration, and networking opportunities. Join us at TechVilla, where we code, create, and contribute together. " />
          </div>
          <div>
            <Card title="Mission" desc=" Our mission is to provide hands-on learning opportunities through workshops, coding challenges, and real-life projects. We believe that practical experience is key to mastering tech skills." />
          </div>
        </div>
        {/* Vision Mission ends  */}

        {/* Glimpses */}
        <div className="flex flex-col items-center gap-4 my-1 px-5">
          <h1 className="text-center text-xl">Glimpses</h1>
          <Carousel className="w-full max-w-7xl rounded-md">
            <CarouselContent className="rounded-md">
              {glimpses.map((data, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 mx-auto flex flex-col justify-center items-center md:w-5/6 w-full  gap-6">
                    <div className="relative w-full h-0 pb-[50%] md:pb-[50%]">
                      <Image
                        src={data.img}
                        className="rounded-md object-cover absolute inset-0 w-full h-full"
                        fill
                        alt={`Image ${index + 1}`}
                      />
                    </div>
                    <p className={`${inter.className} text-xl text-center`}>{data.desc}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
        {/* Glimpses end hota hai*/}
        <div className="flex flex-col items-center">
          <h1 id="events" className="text-center text-xl mb-8 my-5 pt-4">Upcoming Events</h1>
          <UpcomingEvent />
        </div>
        <div id="team" className="px-24">
          <h1 className="text-center text-xl mb-8 my-5">Meet Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 px-10 mx-auto">
            {coreTeam.map((data, index) => (
              <Team
                key={index}
                name={data.name}
                img={data.img}
                role={data.role}
                links={data.links} // Pass the links prop
              />
            ))}
          </div>
        </div>
      </div>


      {/* CORE TEAM */}

      <div>
        <Footer />
      </div>

    </div>
  );
}

