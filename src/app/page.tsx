import AboutSection from "@src/components/AboutSection";
import EmailSection from "@src/components/EmailSection";
import HeroSection from "@src/components/HeroSection";
import NavBar from "@src/components/NavBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <EmailSection />
      </div>
    </main>
  );
}
