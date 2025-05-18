
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">About Me</h2>
            <div className="space-y-4 text-slate-600">
              <p>
                Experienced IT and Service Management Professional combining 7+ years in IT operations with 7+ years
                in customer relationship management roles. My technical foundation has been significantly enhanced
                during my recent career break, where I focused on strengthening end-to-end IT competencies.
              </p>
              <p>
                I've expanded my skill set with AWS Cloud certification as a Certified Cloud Practitioner, developed 
                programming skills in Python, and gained web development experience with HTML, CSS, JavaScript, and Django. 
                Additionally, I've built expertise in data analysis, DevSecOps practices, and cybersecurity principles.
              </p>
              <p>
                Throughout my career at Kenya Commercial Bank Group, I've held various roles of increasing responsibility, 
                from Service Desk Analyst to Technology Banking Operations Manager. I've demonstrated a proven ability to monitor 
                critical infrastructure, coordinate preventive maintenance, and generate detailed operational reports,
                consistently achieving 99.7% uptime for critical financial systems.
              </p>
              <p>
                My unique ability to bridge technical solutions with business objectives allows me to deliver secure, 
                scalable systems while maintaining exceptional service levels. I excel at implementing security protocols, 
                automating processes, and enhancing customer experiences across diverse enterprise environments.
              </p>
            </div>
            <div className="mt-8">
              <Link to="/experience">
                <Button className="bg-blue-600 hover:bg-blue-700">View My Experience</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
