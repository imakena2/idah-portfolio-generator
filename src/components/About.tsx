
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="w-full">
            {/* Professional Bio Section with Background */}
            <div className="bg-gradient-to-r from-slate-50 to-purple-100 p-10 rounded-xl shadow-lg mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">Professional Bio</h2>
              
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Versatile and solutions-driven IT professional with over 14 years of experience in technical operations, system support, and client-focused service delivery within demanding enterprise environments. I combine a strong foundation in IT infrastructure with a deep understanding of business processes to deliver secure, scalable, and customer-centric technology solutions.
                </p>
                <p>
                  My expertise spans managing enterprise systems across multiple regions, ensuring high operational uptime, securing digital environments, and converting data into actionable insights. Recently upskilled in cloud technologies (AWS Certified), Python programming, data analysis, cybersecurity, and DevSecOps, I am well-equipped to support modern digital ecosystems and drive continuous innovation with risk-aware growth.
                </p>
                <p>
                  <strong>Core strengths include:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Maintaining 99.7% uptime for critical platforms through proactive support and reliability practices</li>
                  <li>Automating workflows to reduce operational time by 13%</li>
                  <li>Enhancing digital trust via robust security controls and data protection</li>
                  <li>Simplifying complex technical concepts into user-friendly support and strategic value</li>
                </ul>
                <p className="font-semibold text-slate-800">
                  I excel in environments that require technical excellence, business insight, and a strong commitment to service delivery—consistently aligning technology outcomes with organizational goals.
                </p>
              </div>
            </div>

            {/* Value Proposition Section */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-10 rounded-xl shadow-lg mb-16">
              <h3 className="text-3xl font-bold mb-10 text-center">Value Addition to an Organization</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-100">🚀 Technology-Aligned Business Transformation</h4>
                  <p className="text-purple-50 leading-relaxed">
                    I specialize in bridging the gap between business operations and IT by driving digital transformation initiatives that streamline processes, reduce operational risk, and enhance service delivery.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-100">📊 Actionable Data & Insights</h4>
                  <p className="text-blue-50 leading-relaxed">
                    With expertise in MIS reporting, ETL optimization, and database management, I transform raw data into strategic insights that support timely decision-making and ensure regulatory compliance.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-purple-100">⚡ Seamless User Experience & IT Reliability</h4>
                  <p className="text-purple-50 leading-relaxed">
                    I empower teams through responsive technical support and enterprise collaboration tools, ensuring systems are secure, efficient, and aligned with user needs across departments and regions.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-100">🔮 Continuous Innovation & Future Readiness</h4>
                  <p className="text-blue-50 leading-relaxed">
                    Committed to lifelong learning, I stay ahead of evolving technology through upskilling in cloud, cybersecurity, and AI—bringing innovative, scalable, and secure solutions to modern business challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* What I Bring Section */}
            <div className="bg-white border-2 border-purple-200 rounded-xl p-10 shadow-lg">
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
