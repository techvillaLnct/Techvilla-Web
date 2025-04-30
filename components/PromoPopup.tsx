"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export const PromoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => setShowPopup(false);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in">
      <div className="relative bg-gradient-to-br from-orange-400 to-black text-white p-8 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)] w-full max-w-md mx-auto animate-pulse-slow">
        {/* Cross Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-zinc-200 hover:text-white transition"
        >
          <X size={24} />
        </button>

        {/* Confetti Emoji */}
        <div className="text-5xl mb-2 animate-bounce text-center">🎉</div>

        {/* Title */}
        <h2 className="text-3xl font-bold text-cyan-300 tracking-wide drop-shadow-lg text-center">
          Codeverse Is Here!
        </h2>

        {/* Description */}
        <p className="text-md text-gray-200 mt-3 mb-6 text-center">
          Battle your peers to find out who’s the ultimate coder. Don’t miss
          LNCT’s wildest coding showdown!
        </p>

        {/* Call to Action */}
        <button
          onClick={() => {
            router.push("#upcomingEvent");
            handleClose();
          }}
          className="w-full py-2 px-4 bg-gradient-to-r from-blue-800 to-purple-800 hover:bg-pink-700 text-white font-bold rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-pink-500/40"
        >
          View Event
        </button>
      </div>
    </div>
  );
};
