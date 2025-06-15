
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50" id="about">
      <div className="container mx-auto px-6">
        <div className="flex flex-col max-w-6xl mx-auto">
          <div className="w-full">
            {/* Professional Journey Section with Background */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-100 p-10 rounded-xl shadow-lg mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-12 text-center">My Professional Story</h2>
              
              <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
                <p>
                  Some journeys begin with a single spark. Mine began behind a teller's counter—serving people, listening to stories, solving real problems. In that space, I discovered something deeper than routine transactions: the power of systems, the value of trust, and the role technology plays in both.
                </p>
                <p>
                  Over the years, I moved from counters to commands—from the front lines of banking to the intricate back end of digital infrastructure. I learned to speak the language of both people and machines, translating business pain points into reliable, secure, and scalable solutions. As I supported systems that served millions, I never lost sight of the individual behind each click, each ticket, each alert.
                </p>
                <p>
                  I've spent over 14 years navigating this intersection: seven years immersed in technical operations—supporting enterprise applications, securing platforms, managing systems across borders—and another seven years on the customer side, understanding user needs, building relationships, and turning problems into progress.
                </p>
                <p>
                  Along the way, I've made a deliberate investment in growth. I earned cloud certifications. I studied Python, data, cybersecurity, and DevSecOps—not as trends, but as tools to build stronger, safer, and smarter digital environments. I've seen what happens when systems go down, and I've helped keep them running—with 99.7% uptime, streamlined processes, and automation that saves hours every day.
                </p>
                <p>
                  I believe in quiet impact. In secure systems that just work. In dashboards that tell the truth. In teams that trust IT not just to fix, but to foresee.
                </p>
                <p className="font-semibold text-slate-800">
                  This is the value I bring: a deep understanding of how technology empowers people, protects data, and propels organizations forward. I don't just support systems—I support the vision behind them.
                </p>
              </div>
            </div>

            {/* Value Proposition Section */}
            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-10 rounded-xl shadow-lg mb-16">
              <h3 className="text-3xl font-bold mb-10 text-center">Value Addition to an Organization</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-100">🚀 Technology-Aligned Business Transformation</h4>
                  <p className="text-blue-50 leading-relaxed">
                    I specialize in bridging the gap between business operations and IT by driving digital transformation initiatives that streamline processes, reduce operational risk, and enhance service delivery.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-cyan-100">📊 Actionable Data & Insights</h4>
                  <p className="text-cyan-50 leading-relaxed">
                    With expertise in MIS reporting, ETL optimization, and database management, I transform raw data into strategic insights that support timely decision-making and ensure regulatory compliance.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-blue-100">⚡ Seamless User Experience & IT Reliability</h4>
                  <p className="text-blue-50 leading-relaxed">
                    I empower teams through responsive technical support and enterprise collaboration tools, ensuring systems are secure, efficient, and aligned with user needs across departments and regions.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-cyan-100">🔮 Continuous Innovation & Future Readiness</h4>
                  <p className="text-cyan-50 leading-relaxed">
                    Committed to lifelong learning, I stay ahead of evolving technology through upskilling in cloud, cybersecurity, and AI—bringing innovative, scalable, and secure solutions to modern business challenges.
                  </p>
                </div>
              </div>
            </div>

            {/* What I Bring Section */}
            <div className="bg-white border-2 border-blue-200 rounded-xl p-10 shadow-lg">
              <h3 className="text-3xl font-bold text-blue-800 mb-8 text-center">Proven Track Record of Excellence</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
                  <div className="text-sm text-blue-700 font-medium">System Uptime Achievement</div>
                </div>
                <div className="text-center p-6 bg-cyan-50 rounded-lg">
                  <div className="text-3xl font-bold text-cyan-600 mb-2">100%</div>
                  <div className="text-sm text-cyan-700 font-medium">Process Efficiency Improvement</div>
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

            <div className="bg-blue-50 border-l-4 border-blue-600 p-10 rounded-r-lg mt-12">
              <p className="text-blue-800 font-medium text-xl leading-relaxed">
                <strong>The Bottom Line:</strong> I'm not just a technical expert—I'm a business-minded technology strategist who understands that every IT solution must drive measurable business value. My unique combination of operational excellence, customer relationship expertise, and cutting-edge technical skills positions me to be an immediate contributor who can lead digital initiatives, optimize processes, and deliver results that matter to your bottom line.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-6">
              <Link to="/experience">
                <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-10 py-4">Explore My Experience</Button>
              </Link>
              <Link to="/projects#contact">
                <Button 
                  variant="outline" 
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 text-lg px-10 py-4"
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
