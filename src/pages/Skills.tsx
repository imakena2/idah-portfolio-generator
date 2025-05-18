
import Navbar from "@/components/Navbar";
import SkillsContent from "@/components/Skills";
import Footer from "@/components/Footer";
import { useState } from "react";

const Skills = () => {
  const [activeSection, setActiveSection] = useState("skills");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-800">Skills & Expertise</h1>
        <div className="max-w-4xl mx-auto">
          <SkillsContent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
