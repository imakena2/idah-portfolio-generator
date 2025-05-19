
import Navbar from "@/components/Navbar";
import CertificationsContent from "@/components/Certifications";
import Footer from "@/components/Footer";
import { useState } from "react";
import Contact from "@/components/Contact";

const Certifications = () => {
  const [activeSection, setActiveSection] = useState("certifications");

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Certifications & Education</h1>
            <p className="text-lg md:text-xl text-center max-w-3xl mx-auto">
              A comprehensive overview of my qualifications, certifications and continuing education.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-6xl mx-auto">
            <CertificationsContent />
          </div>
        </div>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Certifications;
