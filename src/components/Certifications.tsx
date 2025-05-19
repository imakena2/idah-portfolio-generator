
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
    <div>
      <section className="py-12">
        <h2 className="text-2xl font-bold text-purple-800 mb-8 text-center">Certifications & Training</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <Card key={index} className={`hover:shadow-lg transition-duration-300 ${cert.status === "Ongoing" ? "border-l-4 border-amber-500" : cert.type === "certification" ? "border-l-4 border-purple-600" : "border-l-4 border-blue-500"}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-slate-800">
                      {cert.name}
                      {cert.status && <span className="ml-2 text-xs px-2 py-0.5 bg-amber-100 text-amber-700 rounded-full">{cert.status}</span>}
                    </h3>
                    {cert.issuer && <p className="text-sm text-slate-500">{cert.issuer}</p>}
                    {cert.date && <p className="text-sm text-slate-500">{cert.date}</p>}
                    {cert.awardDate && <p className="text-xs text-slate-400">Awarded: {cert.awardDate}</p>}
                  </div>
                  <span className="text-xs font-medium px-2 py-1 rounded-full bg-purple-100 text-purple-700">{cert.year}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
      
      <section className="py-12 bg-gradient-to-r from-purple-50 to-white rounded-xl my-8 p-6">
        <h3 className="text-xl font-bold text-purple-800 mb-6 text-center">Education</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card className="border-t-4 border-purple-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-medium text-slate-800 text-lg">BSc. Information Technology</h4>
              <p className="text-sm text-slate-500">Jomo Kenyatta University of Agriculture & Technology | 2004</p>
            </CardContent>
          </Card>
          <Card className="border-t-4 border-purple-500 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <h4 className="font-medium text-slate-800 text-lg">Diploma in Information Technology</h4>
              <p className="text-sm text-slate-500">Jomo Kenyatta University of Agriculture & Technology | Dec 2000</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
