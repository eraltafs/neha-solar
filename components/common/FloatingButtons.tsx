"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* WhatsApp */}

      <a
        href="https://wa.me/919717838367?text=Hi%20Neha%20Solar,%20I%20need%20a%20solar%20solution."
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed
          bottom-6
          right-6
          z-50
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-green-600
          text-white
          shadow-2xl
          transition
          hover:scale-110
          hover:bg-green-700
        "
      >
        <MessageCircle size={30} />
      </a>

      {/* Back To Top */}

      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed
            bottom-28
            right-6
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border
            border-slate-200
            bg-white
            shadow-xl
            transition
            hover:-translate-y-1
            hover:bg-green-600
            hover:text-white
          "
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}