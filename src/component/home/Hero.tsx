import Image from "next/image";
import logo from "@/assets/icons/cred-logo.svg";

function Hero() {
  return (
    <section className="h-screen duration-500  relative bg-white dark:bg-[#161517] dark:text-white text-gray-800">
      <div className="py-[70px] px-[130px] m-auto absolute left-0 right-0">
        <Image
          src={logo}
          alt="Logo"
          className="duration-500 "
          width={74}
          height={88}
        />
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
