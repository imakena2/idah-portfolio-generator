
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ProjectShowcase from "@/components/ProjectShowcase";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Projects = () => {
  const [activeSection, setActiveSection] = useState("projects");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Projects & Ventures</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto opacity-90">
            Showcasing innovative solutions and technical expertise through real-world applications 
            and entrepreneurial ventures.
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <ProjectShowcase />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
