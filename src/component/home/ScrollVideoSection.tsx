"use client";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

function ScrollVideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const scrollContainerRef = useRef(null);
  const isInView = useInView(scrollContainerRef, {
    once: false,
    margin: "10px",
  });
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start end", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    mass: 1,
  });

  const videoTime = useTransform(smoothScroll, [0, 1], [0, videoDuration]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setVideoDuration(video.duration);
      setVideoLoaded(true);
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      return () =>
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
    }
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoLoaded || !isInView) return;

    const lerp = (start: number, end: number, alpha: number) =>
      start + (end - start) * alpha;
    let frameId: number;

    let lastLogged = 0;

    const update = () => {
      const time = videoTime.get();
      const now = Date.now();
      if (now - lastLogged > 200) {
        lastLogged = now;
      }

      if (!video.seeking) {
        const current = video.currentTime;
        const target = Math.min(time, videoDuration);
        video.currentTime = lerp(current, target, 0.25);
      }
      frameId = requestAnimationFrame(update);
    };

    if (isInView) {
      update();
    }
    return () => cancelAnimationFrame(frameId);
  }, [videoTime, videoLoaded, videoDuration, isInView]);

  return (
    <div ref={scrollContainerRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 h-screen">
        <motion.video
          ref={videoRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          muted
          playsInline
          className="w-screen h-screen object-cover"
        >
          <source src="/video/car-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </div>
    </div>
  );
}

export default ScrollVideoSection;
