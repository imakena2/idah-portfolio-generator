
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  {
    name: "Development, Security and Operations (DevSecOps)",
    issuer: "Innovate Systems",
    year: "2024",
    type: "certification"
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "AWS",
    year: "2024",
    type: "certification"
  },
  {
    name: "Certificate in Web Development",
    issuer: "E-mobilis Technology Institute",
    date: "September 2024 - December 2024",
    awardDate: "February 6, 2025",
    year: "2025",
    type: "certification"
  },
  {
    name: "Data Analytics",
    issuer: "Women Techsters",
    year: "2024",
    type: "certification"
  },
  {
    name: "Software Engineering with specialization in Software Testing",
    issuer: "PLP Academy",
    date: "February 2025 - August 2025",
    year: "2025",
    type: "training",
    status: "Ongoing"
  },
  {
    name: "Development, Security and Operations (DevSecOps)",
    issuer: "Strathmore",
    year: "2025",
    type: "training",
    status: "Ongoing"
  },
  {
    name: "Cyber Security & Ethical Hacking Internship Program",
    issuer: "Edureka",
    year: "2025",
    type: "training",
    status: "Ongoing"
  },
  {
    name: "Cybersecurity and Emerging Technologies Awareness Training",
    issuer: "ICT Authority, Kenya in collaboration with Capabuil",
    year: "2025",
    type: "certification"
  },
  {
    name: "AWS Solutions Architect",
    issuer: "Edureka",
    year: "2025",
    type: "training",
    status: "Ongoing"
  },
  {
    name: "Cybersecurity Training for Financial Institutions",
    issuer: "",
    year: "2023",
    type: "training"
  },
  {
    name: "ITIL Foundation",
    issuer: "",
    year: "2022",
    type: "training"
  },
  {
    name: "Administering System Center Configuration Manager",
    issuer: "",
    year: "2019",
    type: "training"
  },
  {
    name: "A+ (Hardware & Software)",
    issuer: "",
    year: "2005",
    type: "training"
  }
];

const Certifications = () => {
  return (
    <div className="space-y-12">
      <section className="py-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-10 text-center">Professional Certifications & Training</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${cert.status === "Ongoing" ? "border-l-4 border-amber-500 bg-amber-50" : cert.type === "certification" ? "border-l-4 border-purple-600 bg-white" : "border-l-4 border-blue-500 bg-blue-50"}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">
                      {cert.name}
                      {cert.status && <span className="ml-3 text-xs px-3 py-1 bg-amber-100 text-amber-700 rounded-full font-medium">{cert.status}</span>}
                    </h3>
                    {cert.issuer && <p className="text-base text-slate-600 mb-1">{cert.issuer}</p>}
                    {cert.date && <p className="text-sm text-slate-500">{cert.date}</p>}
                    {cert.awardDate && <p className="text-xs text-slate-400 mt-1">Awarded: {cert.awardDate}</p>}
                  </div>
                  <span className="text-sm font-bold px-3 py-2 rounded-full bg-purple-100 text-purple-700 ml-4">{cert.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="py-12 bg-gradient-to-r from-purple-50 to-white rounded-2xl p-8">
        <h3 className="text-2xl font-bold text-purple-800 mb-8 text-center">Educational Background</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-t-4 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <h4 className="text-xl font-bold text-slate-800 mb-3">BSc. Information Technology</h4>
              <p className="text-base text-slate-600">Jomo Kenyatta University of Agriculture & Technology</p>
              <p className="text-sm text-purple-600 font-semibold mt-2">2004</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <h4 className="text-xl font-bold text-slate-800 mb-3">Diploma in Information Technology</h4>
              <p className="text-base text-slate-600">Jomo Kenyatta University of Agriculture & Technology</p>
              <p className="text-sm text-purple-600 font-semibold mt-2">Dec 2000</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
