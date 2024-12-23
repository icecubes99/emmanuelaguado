import HeroProjectsSection from "@/components/hero-projects-section";
import HeroSection from "@/components/hero-section";
import UniversalLayout from "@/components/margin";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <UniversalLayout className="">
        <HeroSection />
        <HeroProjectsSection />
      </UniversalLayout>
    </div>
  );
}
