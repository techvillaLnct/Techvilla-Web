"use client"
import { Appbar } from "@/Components/Appbar";
import { Card } from "@/Components/Card";
import { Footer } from "@/Components/Footer";
import { Button2 } from "@/Components/Button2";
import { coreTeam } from "@/data/data";
import { useRouter } from "next/navigation"
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/Components/carousel"
import { Team } from "@/Components/Team";
import { UpcomingEvent } from "@/Components/UpcomingEvent";
const images = [
  "/glimpses/merch-launch.jpg",
  "/glimpses/codebeta-1.jpg",
  "/glimpses/codebeta-winners.jpg",
  "/glimpses/codebeta-2.jpg",
  "/glimpses/codebeta-3.jpg",
  "/glimpses/member-sync.jpg",
  "/glimpses/opensource-host.jpg",
  "/glimpses/opensource-team.jpg",
  "/glimpses/solidity.png",
  "/glimpses/merch-launch-2.jpg",
];

export default function Home() {
  const router = useRouter();
  return (
    <div className=" h-full bg-cover bg-center  text-white" style={{ backgroundImage: "url('/techvilla-bg.png')" }}>
      <div>
        <Appbar />
      </div>
      <div className="mt-20 flex flex-col gap-20">
        {/* Heading of website */}
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="space-y-3 mt-[10rem] ">
            <Image src="/techvilla-heading-logo.png" className="flex items-center" width={662} height={90} alt="" />
            <h2 className="text-center font-semibold">CODE . CREATE . CONTRIBUTE</h2>
          <div className="mt-2 space-y-4 flex flex-col items-center gap-8">
            <p className="text-center ">Empowering the Next Generation of Developers</p>
            <Button2 onClick={() => {
              router.push("https://tr.ee/Lgng69lmIE")
            }} text="Join Us" />
          </div>
          </div>
        </div>
        {/* Heading of website finishes */}

        {/* Vision Mission  */}
        <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 place-items-center p-4 gap-14">
          <div>
            <Card title="Vision" desc="Our Vision is to empower students with the power of coding and learning in public, that can unlock a world of infinite possibilities, and to alleviate the tech leaders of tommorow." />
          </div>
          <div>
            <Card title="About Us" desc="TechVilla, LNCT's Coding Club, is a dynamic haven for tech-enthusiasts.We offer skill development, project collaboration, and networking opportunities. Join us at TechVilla, where we code, create, and contribute together. " />
          </div>
          <div>
            <Card title="Mission" desc=" Our mission is to provide hands-on learning opportunities through workshops, coding challenges, and real-life projects. We believe that practical experience is key to mastering tech skills." />
          </div>
        </div>
        {/* Vision Mission ends  */}

        {/* Glimpses */}
        <div className="flex flex-col items-center gap-6 my-4">
          <h1 className="text-center text-xl">Glimpses</h1>
          <Carousel className="w-full max-w-7xl rounded-md">
            <CarouselContent className="rounded-md">
              {images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 flex justify-center w-[1300px] h-[650px]">
                    <Image
                      src={image}
                      className="rounded-md"
                      width={1300}
                      height={650}
                      alt={`Image ${index + 1}`}
                    />
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
        <h1 className="text-center text-xl mb-8 my-5">Upcoming Events</h1>
        <UpcomingEvent />
      </div>
      <div className="px-24">
        <h1 className="text-center text-xl mb-8 my-5">Meet Our Team</h1>
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 px-10 mx-auto">
          {coreTeam.map((data, index) => (
            <Team key={index} name={data.name} img={data.img} role={data.role} />
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

