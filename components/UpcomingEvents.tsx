// for temporary to make it dynamic
import Image from "next/image";
import { Button } from "@/components/Button";
import { inter } from "../app/fonts";
import {
  CalendarDays,
  ClipboardList,
  Clock,
  MapPin,
  // PenBoxIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import { formatDate } from "@/lib/utils";

interface UpcomingEvents {
  title: string;
  desc: string;
  venue: string;
  date: string;
  link: string;
}

const targetDate = new Date("2025-05-03T10:00:00");
function getTimeLeft() {
  const now = new Date();
  const diff = targetDate.getTime() - now.getTime();

  if (diff <= 0) return "00:00:00";

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}`;
}

export const UpcomingEvents = ({
  title,
  desc,
  venue,
  date,
  link,
}: UpcomingEvents) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());
  // "2025-05-03T10:00:00"

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div
      className={` ${inter.className} w-[20rem] bg-gradient-to-r from-black to-zinc-700 md:w-1/2 flex flex-col  gap-4 border  rounded-md backdrop-blur-lg`}
    >
      <Image
        src={"/beyondDsa.jpg"}
        className="rounded-md  "
        width={1500}
        height={0}
        alt=""
      ></Image>
      <h1
        className={` ${inter.className} text-center text-xl font-bold tracking-wider underline `}
      >
        {title}
      </h1>
      <p
        className={` ${inter.className} text-center   px-4 text-md font-medium`}
      >
        {desc}
      </p>
      <div className="flex flex-col md:flex-row justify-center md:justify-between gap-2">
        <div className="flex items-center gap-2 px-8">
          <MapPin className="text-zinc-400" size={24} />
          <p className="w-auto">{venue}</p>
        </div>
        <div className="flex gap-2  px-8">
          <CalendarDays className="text-zinc-400" size={24} />
          <p>{formatDate(date)}</p>
        </div>
        <div className="flex items-center gap-2  px-8">
          <Clock className="text-zinc-400" size={24} />
          <p>{timeLeft}</p>
        </div>
      </div>
      <div className=" p-2 space-y-2">
        <Button
          className="flex items-center justify-center gap-2 py-2 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow hover:opacity-90 transition-opacity"
          onClick={() => {
            window.open(link,"_blank")
          }}
        >
          <ClipboardList size={32} />
          Register Now!
        </Button>
        {/* <Button
          className="flex items-center justify-center gap-2 py-2 w-full bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow hover:opacity-90 transition-opacity"
          onClick={() => {
            router.push("https://p.hck.re/ciom");
          }}
        >
          <PenBoxIcon size={32} />
          Try Mock Test
        </Button> */}
      </div>
    </div>
  );
};
