
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
