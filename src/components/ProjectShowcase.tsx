
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
    logo: "data:image/png;base64,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"
  },
  {
    title: "CyberRisk Assessment Toolkit for SMEs",
    description: "A comprehensive cybersecurity toolkit designed specifically for small to medium-sized enterprises, providing affordable risk assessment frameworks and implementation guidance.",
    tags: ["Cybersecurity", "Risk Assessment", "SME", "Security Framework"],
    link: "https://github.com/imakena2/ASSESSMENT-TOOLKIT-FOR-SMES.git",
    logo: "data:image/png;base64,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"
  },
  {
    title: "Mwethe Clinic Booking System",
    description: "SQL-based clinic system managing patients, doctors, and appointments using foreign keys and advanced database relationships.",
    tags: ["MySQL", "Database Design", "Healthcare IT"],
    link: "#",
    logo: "data:image/png;base64,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"
  },
  {
    title: "EduConnect - STEM Parent Teacher App",
    description: "A text-based education management tool for parent-teacher collaboration and STEM learning designed to improve communication and student outcomes.",
    tags: ["Education Tech", "Communication", "STEM"],
    link: "#",
    logo: "data:image/jpeg;base64,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
  },
  {
    title: "COVID-19 Global Data Tracker",
    description: "A Python-based data analysis project tracking COVID-19 trends in Kenya, USA, India, and China with visualizations and statistical analysis.",
    tags: ["Python", "Data Analysis", "Visualization", "Statistics"],
    link: "#",
    logo: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIQEhUSExIWFRIXGBYWGRcVFxUXGBcYGBYWFhoXGhgbHSggGBolIBUXITEhJSorMC4uGh8zODMsNygtLisBCgoKDg0OGxAQGy0lICYtLS0tNS8tLS8tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xABIEAACAQMBBQYDBQQFCwkAAAABAgMABBEhBQYSMUEHIlFhcYETkaEUMkKSsSNigsFUcpKjsrPR8AYXM0Nzg7PC0vRTVJOU0//EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAA0EQACAgIBAgUDAwMCBwEAAAAAAQIDBBESITEFEyJBURQyYXGBkaFCgvGx0QYVIzNywfH/2gAMAwEAAhEDEQA/ALxoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFAKA655ljUu7BVUElicAAakk9BRLfQ8bSW2Vrt/tWCsUtIg4H+0lyFPogwcepHpU1GLm9IrZmZ5UNR7lZXPa9f8Wv2ePH+7Z/55qtfTx8Mx5eIX/wCtEUu9/b+/nDLcXJWJucUQETjyf7zD3P3asVY9cX0RVu8RyLF1lolWyd6tlbQsmt7qQy8BXgk9YkHOGPIMQBnPlnQ1XvxZw9RSw89Z0PC3RlWjbQtWMkl5FGIO6TZXP6Ulp18uBJclJwTNPT0MXrfQ9o9p2z0kll73DeYKLwOvmucnJ1GR0PnpW/my5caGpDEk7XHqWzaXKzIsqMGVgGVhqCCMgisxpp6ZrJpraO2h6KAUAoBQCgFAKAUAoBQCgFAKAUAoBQCgFARPtC2/9C2fNMu
  }
];

const ProjectShowcase = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
            <div className="bg-white p-4 flex items-center justify-center h-48">
              <img 
                src={project.logo} 
                alt={`${project.title} logo`} 
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <CardHeader className="pb-2">
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
      
      <div className="mt-16">
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
    </section>
  );
};

export default ProjectShowcase;
