
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
                Experienced IT and Service Management Professional with 7+ years in IT operations, cloud computing, 
                and system administration, combined with another 7 years as a Relationship Manager in the banking industry.
              </p>
              <p>
                This unique blend of technical expertise and customer-facing experience has shaped a strong ability 
                to understand client needs, manage expectations, and deliver tailored solutions. Adept at enhancing 
                service delivery, streamlining support processes, and implementing secure, scalable systems.
              </p>
              <p>
                Throughout my career at Kenya Commercial Bank Group, I've held various roles of increasing responsibility, 
                from Service Desk Analyst to Technology Banking Operations Manager. I've demonstrated a proven ability to monitor 
                critical infrastructure, coordinate preventive maintenance, and generate detailed operational reports.
              </p>
              <p>
                I'm also committed to leveraging technology to solve real-world problems and enhance operational efficiency
                across industries. My background in both technical operations and customer relationship management enables
                me to bridge the gap between technical solutions and business objectives.
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
