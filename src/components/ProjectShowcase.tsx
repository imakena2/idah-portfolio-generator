
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Database, Shield, PieChart, GraduationCap, Stethoscope, Cloud } from "lucide-react";

const projects = [
  {
    title: "Support Pulse",
    description: "A full-stack web application simulating a real-world IT service desk environment. Built using Django (Python), SQL, HTML, and CSS with functionality for ticket logging, categorization, SLA tracking, and issue resolution monitoring.",
    tags: ["Python", "Django", "SQL", "HTML", "CSS", "ITIL"],
    link: "https://github.com/imakena2/supportPulse",
    logo: "/lovable-uploads/0a5182f7-522c-4034-bc7d-3fddd22f0c03.png"
  },
  {
    title: "AWS S3 Static Website Hosting",
    description: "A cloud infrastructure project demonstrating how to host a static website using Amazon S3, implementing cost-effective and scalable hosting solutions with proper security configurations.",
    tags: ["AWS", "S3", "Cloud Computing", "DevOps", "IaC"],
    link: "https://github.com/imakena2/Hosting-Static-Website-using-AWS-S3.git",
    icon: <Cloud className="h-16 w-16 text-orange-500" />
  },
  {
    title: "CyberRisk Assessment Toolkit for SMEs",
    description: "A comprehensive cybersecurity toolkit designed specifically for small to medium-sized enterprises, providing affordable risk assessment frameworks and implementation guidance.",
    tags: ["Cybersecurity", "Risk Assessment", "SME", "Security Framework"],
    link: "https://github.com/imakena2/ASSESSMENT-TOOLKIT-FOR-SMES.git",
    icon: <Shield className="h-16 w-16 text-blue-700" />
  },
  {
    title: "Mwethe Clinic Booking System",
    description: "SQL-based clinic system managing patients, doctors, and appointments using foreign keys and advanced database relationships.",
    tags: ["MySQL", "Database Design", "Healthcare IT"],
    link: "#",
    icon: <Stethoscope className="h-16 w-16 text-green-600" />
  },
  {
    title: "EduConnect - STEM Parent Teacher App",
    description: "A text-based education management tool for parent-teacher collaboration and STEM learning designed to improve communication and student outcomes.",
    tags: ["Education Tech", "Communication", "STEM"],
    link: "#",
    icon: <GraduationCap className="h-16 w-16 text-blue-600" />
  },
  {
    title: "COVID-19 Global Data Tracker",
    description: "A Python-based data analysis project tracking COVID-19 trends in Kenya, USA, India, and China with visualizations and statistical analysis.",
    tags: ["Python", "Data Analysis", "Visualization", "Statistics"],
    link: "#",
    icon: <Database className="h-16 w-16 text-red-600" />
  }
];

const ProjectShowcase = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
            <div className="bg-white p-4 flex items-center justify-center h-44">
              {project.logo ? (
                <img 
                  src={project.logo} 
                  alt={`${project.title} logo`} 
                  className="max-h-full max-w-full object-contain"
                />
              ) : project.icon ? (
                project.icon
              ) : (
                <img 
                  src="/placeholder.svg" 
                  alt={`${project.title} logo`} 
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>
            <CardHeader className="pb-1 pt-2">
              <CardTitle className="text-xl text-blue-700">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2 flex-grow">
              <p className="text-slate-600 text-sm">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">View Project</Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 mb-16">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Professional Tools</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Cloud & DevOps</h3>
              <ul className="space-y-2 text-slate-600">
                <li>AWS CLI, Amazon S3, EC2, IAM</li>
                <li>Cloud Formation, Cloudwatch</li>
                <li>Docker, Jenkins, Ansible</li>
                <li>Kubernetes, GitLab CI, GitHub Actions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">Data & Analytics</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Hadoop, Apache Spark</li>
                <li>PowerBI, Tableau</li>
                <li>SQL, Python</li>
                <li>Monitoring and Logging tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-600 mb-3">IT Management</h3>
              <ul className="space-y-2 text-slate-600">
                <li>ITSM, Security tools</li>
                <li>O365 Administration</li>
                <li>Linux, HTML, CSS</li>
                <li>Google Workspace, Trello, Slack, Zoom</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-slate-100 rounded-lg p-8 shadow-sm">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-6">Testimonial</h2>
        
        <div className="flex flex-col items-center text-center">
          <div className="bg-white rounded-full p-4 shadow-sm mb-4">
            <PieChart className="h-16 w-16 text-blue-600" />
          </div>
          
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Tech Ace Solutions</h3>
          <p className="text-slate-600 italic mb-6 max-w-2xl">
            "Working with Idah has been a transformative experience for our IT operations. 
            Her deep technical knowledge combined with exceptional communication skills helped 
            streamline our infrastructure and improve our service delivery processes."
          </p>
          
          <div className="flex items-center justify-center">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;
