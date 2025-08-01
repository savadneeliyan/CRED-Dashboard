"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import { useRouter } from "next/navigation";

function EnterGarage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const inViewRef = useRef(null);
  const router = useRouter();
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

      {/* {videoEnded && isInView && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-screen h-screen absolute left-0 top-0 flex flex-col items-center justify-center"
        >
          <h3 className="text-[66px] text-white font-semibold mb-4">
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
      )} */}
      {videoEnded && isInView && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="w-screen h-screen absolute left-0 top-0 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[66px] text-white font-semibold mb-6 sm:mb-8 lg:mb-4 text-center leading-tight sm:leading-tight md:leading-tight lg:leading-tight max-w-4xl"
          >
            Welcome to the Garage
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="relative mt-4 sm:mt-6 lg:mt-8"
          >
            <div className="absolute -inset-3 sm:-inset-4 lg:-inset-5">
              <div className="w-full h-full max-w-xs sm:max-w-sm mx-auto lg:mx-0 opacity-20 sm:opacity-25 lg:opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600 rounded-xl"></div>
            </div>

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              title="Discover More"
              className="relative z-10 inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-8 lg:px-8 py-3 sm:py-3 lg:py-3 outline-0 duration-500 text-base sm:text-lg lg:text-lg font-bold text-white cursor-pointer transition-all border-2 border-[#ffffffa3] rounded-xl font-pj hover:bg-gray-600 hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:ring-offset-transparent min-w-[200px] sm:min-w-[240px] lg:min-w-auto"
              role="button"
              onClick={() => router.push("/dashboard")}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                Discover More
              </motion.span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="mt-8 sm:mt-12 lg:mt-16 text-center max-w-md sm:max-w-lg lg:max-w-xl px-4"
          >
            <p className="text-white/80 text-sm sm:text-base lg:text-lg leading-relaxed">
              Explore our innovative solutions and cutting-edge technology in a
              space designed for creativity and excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
            className="absolute bottom-8 sm:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-1 h-3 bg-white/60 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default EnterGarage;
