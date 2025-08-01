"use client";

import Image from "next/image";
import logo from "@/assets/icons/cred-logo.svg";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

function Hero() {
  const { user, isAuthenticated, logout, loading } = useAuth();
  const router = useRouter();

  return (
    <section className="h-screen duration-500  relative bg-white dark:bg-[#161517] dark:text-white text-gray-800">
      <div className=" py-16 px-4 sm:px-8 md:px-16 lg:px-[130px] z-10 m-auto absolute left-0 right-0 flex justify-between items-center max-w-screen-xl w-full">
        <Image
          src={logo}
          alt="Logo"
          className="duration-500 w-[50px] h-auto md:w-[74px]"
          width={74}
          height={88}
        />
        <button
          className="px-4 py-2 sm:px-6 sm:py-2 md:px-8 md:py-3 flex items-center gap-2 sm:gap-3 bg-transparent border text-white font-semibold hover:bg-[#0d0d0d] transition duration-500 text-sm sm:text-base"
          onClick={() => router.push(isAuthenticated ? "/dashboard" : "/login")}
        >
          {isAuthenticated ? "View Dashboard" : "Login"}
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>

      <video
        autoPlay
        muted
        playsInline
        className="w-full h-screen object-cover "
        poster="https://web-images.credcdn.in/v2/_next/assets/images/garage_1/desktop/desktop-hero-fold-poster.png"
      >
        <source src="/video/desktop-hero-video.mp4" type="video/mp4"></source>
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
export default Hero;
