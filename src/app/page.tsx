import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PortfolioAssistant from "@/components/PortfolioAssistant";

export default function Home() {
  return (
    <div className="bg-[#052F40] min-h-screen text-[#EAF6FA] selection:bg-[#79C7D9]/30">
      {" "}
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#79C7D9]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#79C7D9]/10 blur-3xl rounded-full" />{" "}
      </div>
      <Header />
      <main aria-label="Portfolio Content">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <PortfolioAssistant />
    </div>
  );
}
