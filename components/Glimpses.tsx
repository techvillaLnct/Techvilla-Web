"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";

export function Glimpses() {
  return (
    <div className="h-screen  w-full ">
      <LayoutGrid cards={cards} />
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        The House
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Team, Coordinators, Participants !
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Time To Check-in
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        {/* Perched high above the world, this house offers breathtaking views and a
        unique living experience. It&apos;s a place where the sky meets home,
        and tranquility is a way of life. */}
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Our Prizes and Swags
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        From Prizes to swags to meals we covered everything
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Coding Session Begins
      </p>
      <p className="font-normal text-base text-white">Round-1</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Round 1 was of 45 min with basic DSA questions.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Coding Session Continues
      </p>
      <p className="font-normal text-base text-white">Round-2</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Round 2 was of 60 min with medium level DSA questions.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Final Coding Round
      </p>
      <p className="font-normal text-base text-white">Round-3</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Round 3 was of 60 min with Hard level DSA questions focusing Competitive Programming.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Fun Session
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Interactive Fun sessions to keep everyone fresh !
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2 cursor-pointer",
    thumbnail:
      "/codevita/codevita-1.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1 cursor-pointer",
    thumbnail:
      "/codevita/codevita-checkin.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1 cursor-pointer",
    thumbnail:
      "/codevita/codevita-prizes.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2 cursor-pointer",
    thumbnail:
      "/codevita/codevita-test-4.jpg",
  },
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1 cursor-pointer",
    thumbnail:
      "/codevita/codevita-test-3.jpg",
  },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1 cursor-pointer",
    thumbnail:
      "/codevita/codevita-test-2.png",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-1 cursor-pointer",
    thumbnail:
      "/codevita/codevita-fun-1.png",
  },

];
