
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
              Idah Makena Ncooro
            </h1>
            <div className="mt-4">
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Technical Customer Support</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">IT Service Desk</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Customer Success Manager</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Cybersecurity</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Cloud (AWS)</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">DevSecOps</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Data Analysis</span>
              </div>
              <p className="text-md md:text-lg text-blue-700 font-medium mt-3">
                99.7% Uptime Expert | Driving Secure, Inclusive Digital Solutions | Empowering Global Teams & Digital Equity
              </p>
            </div>
            <div className="mt-6 bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg shadow-sm">
              <p className="text-slate-700 leading-relaxed">
                Well-rounded IT professional with a keen interest in Cloud Security, bringing a unique blend of 14+ years of experience spanning technical operations and customer relationship management in the banking sector. My background combines 7+ years in IT operations with 7 years in customer-facing roles, enhanced by recent upskilling in AWS Cloud (Certified Practitioner), Python programming, web development, data analysis, DevSecOps, and cybersecurity. This multifaceted expertise allows me to bridge technical solutions with business objectives, delivering scalable, secure systems while maintaining exceptional service levels. Known for achieving 99.7% uptime for critical systems, automating processes to reduce operational times by 13%, and implementing security protocols that protect sensitive financial data.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/experience">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  View Experience 
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <a href="#contact">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <AspectRatio ratio={1/1} className="rounded-lg overflow-hidden mb-4">
              <img 
                src="/lovable-uploads/48106636-bfe3-4c7a-8280-1b8035a035a8.png" 
                alt="Idah Makena Ncooro" 
                className="object-cover w-full h-full"
              />
            </AspectRatio>
            <div className="flex items-center justify-center space-x-4">
              <a href="https://www.linkedin.com/in/imakena/" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://github.com/imakena2" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="mailto:imakena@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </a>
              <a href="tel:+254722124963" className="text-slate-600 hover:text-blue-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
