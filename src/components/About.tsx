import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="w-full">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">My Professional Journey</h2>
            
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p className="text-lg">
                My career began at the forefront of digital transformation, spearheading the computerization of banking operations from traditional paper-based workflows to sophisticated digital platforms. This foundational experience in change management and process digitization established my expertise in driving organizational transformation while maintaining operational excellence.
              </p>
              <p>
                Starting as a Teller and Credit Officer, I developed comprehensive knowledge of financial operations, risk assessment, and customer service excellence. My proven track record in relationship building and operational efficiency earned me a promotion to Relationship Manager, where I successfully orchestrated customer service operations and managed substantial branch loan portfolios, directly impacting revenue generation and customer satisfaction metrics.
              </p>
              <p>
                The pivotal moment came during a major core banking system upgrade, where I recognized the strategic importance of technology leadership and transitioned into IT operations. As a Service Desk Analyst, I quickly advanced to Level 2 Support Specialist, providing mission-critical support for core banking systems across six countries—Kenya, Uganda, Tanzania, Rwanda, South Sudan, and Burundi. This role demanded exceptional problem-solving skills, cultural sensitivity, and the ability to maintain 24/7 system availability for diverse international markets.
              </p>
              <p>
                My evolution continued as a Desktop Support Specialist, where I mastered enterprise Microsoft technologies including Exchange Server, Office 365, Mobile Device Management (MDM), and Microsoft Teams. This position strengthened my expertise in user experience optimization and enterprise collaboration platforms, directly enhancing organizational productivity.
              </p>
              <p>
                The transition to the Close of Business (COB) operations team marked a defining chapter in my career. Managing critical daily operations, executing complex data extraction processes, and optimizing ETL workflows ignited my passion for data analytics and business intelligence. This hands-on experience with data transformation and process automation revealed the immense potential of data-driven decision making in corporate environments.
              </p>
              <p>
                This data-centric revelation became the catalyst for my strategic professional development journey. Upon career transition, I immediately embarked on an intensive upskilling initiative focused on cloud technologies, software engineering, artificial intelligence, and cybersecurity. This deliberate investment in emerging technologies reflects my commitment to staying ahead of industry trends and delivering cutting-edge solutions.
              </p>
            </div>

            {/* Value Proposition Section */}
            <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-10 rounded-xl shadow-lg">
              <h3 className="text-3xl font-bold mb-10 text-center">Corporate Value Proposition</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-100">🚀 Digital Transformation Catalyst</h4>
                  <p className="text-purple-50 leading-relaxed">
                    I bridge the gap between business operations and technology innovation, leveraging 14+ years of cross-functional experience to drive seamless digital transformation initiatives that enhance efficiency, reduce costs, and accelerate growth.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-100">🛡️ Risk-Aware Technology Leader</h4>
                  <p className="text-blue-50 leading-relaxed">
                    My banking background combined with cybersecurity expertise ensures robust, compliant solutions that protect organizational assets while enabling innovation. I understand regulatory requirements and implement security-first approaches.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-100">☁️ Cloud-Native Problem Solver</h4>
                  <p className="text-purple-50 leading-relaxed">
                    AWS-certified with hands-on DevSecOps experience, I architect scalable, cost-effective cloud solutions that drive operational excellence. My approach integrates security, automation, and performance optimization from day one.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-100">📊 Data-Driven Decision Enabler</h4>
                  <p className="text-blue-50 leading-relaxed">
                    I transform raw data into actionable business intelligence, implementing ETL processes, analytics dashboards, and AI-powered insights that empower leadership to make informed strategic decisions and identify new revenue opportunities.
                  </p>
                </div>
              </div>
            </div>

            {/* What I Bring Section */}
            <div className="mt-16 bg-white border-2 border-purple-200 rounded-xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-purple-800 mb-8 text-center">Proven Track Record of Excellence</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                  <div className="text-sm text-purple-700 font-medium">System Uptime Achievement</div>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                  <div className="text-sm text-blue-700 font-medium">Process Efficiency Improvement</div>
                </div>
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">6</div>
                  <div className="text-sm text-green-700 font-medium">Countries Successfully Supported</div>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                  <div className="text-sm text-orange-700 font-medium">Mission-Critical Support</div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-10 rounded-r-lg mt-12">
              <p className="text-purple-800 font-medium text-xl leading-relaxed">
                <strong>The Bottom Line:</strong> I'm not just a technical expert—I'm a business-minded technology strategist who understands that every IT solution must drive measurable business value. My unique combination of operational excellence, customer relationship expertise, and cutting-edge technical skills positions me to be an immediate contributor who can lead digital initiatives, optimize processes, and deliver results that matter to your bottom line.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link to="/experience">
                <Button className="bg-purple-600 hover:bg-purple-700 text-lg px-10 py-4">Explore My Experience</Button>
              </Link>
              <Link to="/projects#contact">
                <Button 
                  variant="outline" 
                  className="border-purple-600 text-purple-600 hover:bg-purple-50 text-lg px-10 py-4"
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
