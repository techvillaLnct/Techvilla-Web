"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

export const PromoPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    setShowPopup(true);
  }, []);

  const handleClose = () => setShowPopup(false);

  if (!showPopup) return null;

  // Update this link to your desired URL
  const hiringLink = "https://forms.gle/v9fpLB1UZJxpsxHZ7";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade-in">
      <div className="relative bg-gradient-to-br  to-black p-4 rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.2)] w-full max-w-md mx-auto flex flex-col items-center">
        {/* Cross Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-zinc-200 hover:text-white transition"
        >
          <X size={24} />
        </button>

        {/* Hiring Post Image */}
        <img
          src="/HIRING_POST.png"
          alt="We Are Hiring"
          className="w-full rounded-xl mb-4 shadow-lg"
        />

        {/* Call to Action */}
        <button
          onClick={() => {
            window.open(hiringLink, "_blank");
            handleClose();
          }}
          className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition-transform hover:scale-105 hover:shadow-orange-500/40 mt-2"
        >
          Apply Now
        </button>
      </div>
    </div>
  );
};
