import Footer from "@/component/common/Footer";
import EnterGarage from "@/component/home/EnterGarage";
import Garage from "@/component/home/Garage";
import Hero from "@/component/home/Hero";
import ScrollVideoSection from "@/component/home/ScrollVideoSection";

export const metadata = {
  title: "CRED garage",
  icons: {
    icon: "/logo.webp",
  },
};

export default function Home() {
  return (
    <>
      <main>
        <div>
          <Hero />
          <Garage />
          <ScrollVideoSection />
          <EnterGarage />
          <Footer />
        </div>
      </main>
    </>
  );
}
