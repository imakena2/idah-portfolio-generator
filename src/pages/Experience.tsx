
import Navbar from "@/components/Navbar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import Footer from "@/components/Footer";
import { useState } from "react";

const Experience = () => {
  const [activeSection, setActiveSection] = useState("experience");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Professional Experience</h1>
          <p className="text-lg md:text-xl text-center max-w-3xl mx-auto opacity-90">
            Over 14 years of progressive career growth in banking technology and IT operations, 
            driving digital transformation across multiple countries and platforms.
          </p>
        </div>
      </div>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <ExperienceTimeline />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Experience;
