import AboutSection from "@app/components/AboutSection";
import EmailSection from "@app/components/EmailSection";
import Footer from "@app/components/Footer";
import HeroSection from "@app/components/HeroSection";
import NavBar from "@app/components/NavBar";
import ExperienceSection from "./components/ExperienceSection";
import ProjectSection from "./components/ProjectSection";
import Body from "./components/Body";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <Body>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <EmailSection />
      </Body>
      <Footer />
    </main>
  );
}
