import Footer from "@/components/footer";
import HeroAboutMeSection from "@/components/hero-about-me-section";
import HeroCallToActionSection from "@/components/hero-call-to-action-section";
import HeroProjectsSection from "@/components/hero-projects-section";
import HeroSection from "@/components/hero-section";
import UniversalLayout from "@/components/margin";
import NavBar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <UniversalLayout>
        <HeroSection />
        <HeroProjectsSection />
        <HeroAboutMeSection />
      </UniversalLayout>
      <HeroCallToActionSection />

      <Footer />
    </div>
  );
}
