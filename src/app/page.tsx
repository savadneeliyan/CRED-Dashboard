import Footer from "@/component/common/Footer";
import EnterGarage from "@/component/home/EnterGarage";
import BenefitsCards from "@/component/home/BenefitsCards";
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
          <BenefitsCards />
          <ScrollVideoSection />
          <EnterGarage />
          <Footer />
        </div>
      </main>
    </>
  );
}
