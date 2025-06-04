
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-purple-50" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">My Professional Journey</h2>
            <div className="space-y-4 text-slate-600">
              <p className="text-lg">
                My journey began with computerizing the bank, transitioning from paperwork to digital 
                systems. I started as a teller and credit officer, where I learned the fundamentals 
                of banking operations and customer service. This foundation proved invaluable as I 
                was promoted to relationship manager, where I managed customer service and the branch 
                loan portfolio.
              </p>
              <p>
                A pivotal moment came during the core banking system upgrade, which sparked my transition 
                back to technology. I served as a service desk analyst, then advanced to Level 2 support, 
                where I supported core banking systems across multiple locations spanning Kenya, Uganda, 
                Tanzania, Rwanda, South Sudan, and Burundi. This experience gave me a deep understanding 
                of enterprise-scale operations across diverse geographical environments.
              </p>
              <p>
                My role evolved to Desktop Support Specialist, where I supported users on Microsoft 
                Exchange, O365, MDM, and collaborative tools like Teams. From there, I moved to the 
                COB (Close of Business) team, where I managed daily operations, handled data extraction, 
                and worked extensively with ETL processes. It was during this period that I developed 
                a keen interest in data analytics and its potential.
              </p>
              <p>
                This passion for data became the catalyst for my motivation to learn more about cloud 
                technology, software engineering, AI, and cybersecurity. Immediately after my career 
                break began, I embarked on mastering these cutting-edge skills. It's been an incredibly 
                rewarding journey, and I've learned so much about the intersection of technology, 
                security, and business innovation.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg mt-6">
                <p className="text-purple-800 font-medium">
                  "Learning never ends. My diverse background from banking operations to modern technology 
                  gives me a unique perspective on creating solutions that truly serve both business needs 
                  and user experiences."
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
