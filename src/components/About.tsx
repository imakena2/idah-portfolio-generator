
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-white to-purple-50" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col">
          <div className="w-full">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">My Professional Journey</h2>
            <div className="space-y-4 text-slate-600">
              <p className="text-lg">
                My career began at the forefront of digital transformation in the banking sector, where I played a pivotal role in transitioning operations from traditional paper-based systems to cutting-edge digital platforms. This experience provided me with invaluable insights into change management, process optimization, and the critical importance of seamless technology adoption in enterprise environments.
              </p>
              <p>
                Starting as a Teller and Credit Officer, I developed a deep understanding of customer-centric operations and financial risk assessment. My dedication to excellence and operational efficiency earned me a promotion to Relationship Manager, where I successfully managed comprehensive customer service operations and oversaw a substantial branch loan portfolio. This role honed my skills in stakeholder management, portfolio optimization, and strategic customer relationship building.
              </p>
              <p>
                A defining moment in my career came during a major core banking system upgrade, which reignited my passion for technology and propelled my transition into IT operations. I advanced through progressive technical roles, beginning as a Service Desk Analyst and quickly progressing to Level 2 Support Specialist. In this capacity, I provided mission-critical support for core banking systems across an extensive multi-national operation spanning Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Burundi—managing complex, high-availability systems serving diverse geographical markets.
              </p>
              <p>
                My technical expertise continued to evolve as I moved into a Desktop Support Specialist role, where I managed enterprise-scale Microsoft technologies including Exchange Server, Office 365, Mobile Device Management (MDM), and collaborative platforms such as Microsoft Teams. This position strengthened my proficiency in enterprise infrastructure management and user experience optimization.
              </p>
              <p>
                My role in the Close of Business (COB) operations team marked a significant milestone in my career development. Here, I managed critical daily operations, executed complex data extraction processes, and optimized Extract, Transform, Load (ETL) workflows. This experience sparked my passion for data analytics and business intelligence, revealing the transformative power of data-driven decision making in enterprise environments.
              </p>
              <p>
                This data-centric experience became the catalyst for my strategic career development initiative. Recognizing the evolving demands of the modern corporate landscape, I embarked on an intensive upskilling journey focused on cloud technologies, software engineering, artificial intelligence, and cybersecurity. This proactive approach to professional development reflects my commitment to staying at the forefront of technological innovation and delivering maximum value to organizational objectives.
              </p>
              <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-lg mt-6">
                <p className="text-purple-800 font-medium">
                  "My unique combination of operational excellence, customer relationship management, and cutting-edge technical expertise positions me to drive digital transformation initiatives while ensuring seamless business continuity and exceptional stakeholder experiences."
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
