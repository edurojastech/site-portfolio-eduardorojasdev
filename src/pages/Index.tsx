import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ClientsSection from "@/components/ClientsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import "@/assets/css/zap.css";
import zap from "@/assets/whatsapp.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AnimatedBackground />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ClientsSection />
      {/* <ProjectsSection /> */}
      <ContactSection />
      <Footer />

      <a
        href="https://api.whatsapp.com/send?phone=5534991157227"
        target="_blank"
        className="zap"
      >
        <img src={zap} alt="Contato" loading="lazy" width="72" height="72" />
      </a>
    </div>
  );
};

export default Index;
