import Footer from "@/components/footer";
import HeroAboutMeSection from "@/components/hero-about-me-section";
import HeroCallToActionSection from "@/components/hero-call-to-action-section";
import HeroProjectsSection from "@/components/hero-projects-section";
import HeroSection from "@/components/hero-section";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />

      <HeroSection />
      <HeroProjectsSection />
      <HeroAboutMeSection />
      <HeroCallToActionSection />

      <Footer />
    </div>
  );
}
