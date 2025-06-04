
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">My Professional Journey</h2>
            <div className="space-y-4 text-slate-600">
              <p className="text-lg">
                My career began in the dynamic world of banking technology at Kenya Commercial Bank Group, 
                where I discovered my passion for bridging the gap between complex technical systems and 
                business objectives. What started as curiosity about how technology drives financial services 
                evolved into a comprehensive expertise spanning multiple domains.
              </p>
              <p>
                Over the years, I've progressed through various roles that shaped my understanding of enterprise 
                systems - from hands-on technical support to strategic technology operations management. This 
                journey taught me that the most impactful solutions come from understanding both the technical 
                architecture and the human element that drives business success.
              </p>
              <p>
                During my recent professional development phase, I strategically expanded my skill set to stay 
                ahead of industry trends. I earned my AWS Cloud Practitioner certification, mastered Python 
                programming, and developed expertise in modern web technologies. My focus on cybersecurity and 
                DevSecOps practices stems from witnessing firsthand how critical security is in financial systems.
              </p>
              <p>
                What drives me is the opportunity to create secure, scalable digital solutions that make a real 
                difference. Whether it's achieving 99.7% uptime for critical systems, implementing automated 
                processes that save time and resources, or mentoring teams to excel in their roles, I'm passionate 
                about delivering excellence while fostering inclusive digital transformation.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg mt-6">
                <p className="text-purple-800 font-medium">
                  "Technology is most powerful when it serves people. My goal is to build solutions that not only 
                  meet technical requirements but also empower teams and enhance user experiences."
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/experience">
                <Button className="bg-purple-600 hover:bg-purple-700">Explore My Experience</Button>
              </Link>
              <Link to="/projects#contact">
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50"
                >
                  Let's Connect
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
