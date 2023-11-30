import { useTranslations } from "next-intl";
import AboutSection from "@app/[locale]/components/AboutSection";
import EmailSection from "@app/[locale]/components/EmailSection";
import Footer from "@app/[locale]/components/Footer";
import HeroSection from "@app/[locale]/components/HeroSection";
import NavBar from "@app/[locale]/components/NavBar";
import ExperienceSection from "@app/[locale]/components/ExperienceSection";
import ProjectSection from "@app/[locale]/components/ProjectSection";
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
