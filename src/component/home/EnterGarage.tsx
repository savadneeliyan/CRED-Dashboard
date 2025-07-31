"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";

function EnterGarage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewRef = useRef(null);
  const isInView = useInView(inViewRef, { once: true, margin: "-50px" });

  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      video.play();
    } else {
      video.pause();
    }

    const handleEnded = () => setVideoEnded(true);
    video.addEventListener("ended", handleEnded);

    return () => video.removeEventListener("ended", handleEnded);
  }, [isInView]);

  return (
    <section
      ref={inViewRef}
      className="h-screen relative bg-white dark:bg-[#161517] dark:text-white text-gray-800 overflow-hidden"
    >
      <motion.video
        ref={videoRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        muted
        playsInline
        className="h-screen w-screen object-cover"
      >
        <source src="/video/desktop-enter-garage-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </motion.video>

      {videoEnded && isInView && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-screen h-screen absolute left-0 top-0 flex flex-col items-center justify-center"
        >
          <h3 className="text-[66px] font-semibold mb-4">
            Welcome to the Garage
          </h3>

          <div className="relative">
            <div className="absolute -inset-5">
              <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
            </div>
            <button
              title=""
              className="relative z-10 inline-flex items-center justify-center w-full px-8 py-3 outline-0 duration-500 text-lg font-bold text-white cursor-pointer transition-all   border-2 border-[#ffffffa3] sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              role="button"
            >
              Discover More
            </button>
          </div>
        </motion.div>
      )}
    </section>
  );
}

export default EnterGarage;
