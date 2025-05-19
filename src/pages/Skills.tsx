
import Navbar from "@/components/Navbar";
import SkillsContent from "@/components/Skills";
import Footer from "@/components/Footer";
import { useState } from "react";
import Contact from "@/components/Contact";

const Skills = () => {
  const [activeSection, setActiveSection] = useState("skills");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Skills & Expertise</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
              A comprehensive overview of my technical capabilities and specialized knowledge areas.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <SkillsContent />
          </div>
        </div>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
