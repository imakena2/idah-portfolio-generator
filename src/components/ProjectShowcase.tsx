
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
    title: "Tech Ace Solutions",
    description: "Company website showcasing IT infrastructure management, cloud migration, cybersecurity consulting, and custom software development services offered by the company.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://imakena2.github.io/techace-website/index.html",
    logo: "/lovable-uploads/704c97b6-2b36-4210-b9d4-da25146deef8.png"
  },
  {
    title: "AWS S3 Static Website Hosting",
    description: "A cloud infrastructure project demonstrating how to host a static website using Amazon S3, implementing cost-effective and scalable hosting solutions with proper security configurations.",
    tags: ["AWS", "S3", "Cloud Computing", "DevOps", "IaC"],
    link: "https://github.com/imakena2/Hosting-Static-Website-using-AWS-S3.git",
    logo: ""
  },
  {
    title: "CyberRisk Assessment Toolkit for SMEs",
    description: "A comprehensive cybersecurity toolkit designed specifically for small to medium-sized enterprises, providing affordable risk assessment frameworks and implementation guidance.",
    tags: ["Cybersecurity", "Risk Assessment", "SME", "Security Framework"],
    link: "https://github.com/imakena2/ASSESSMENT-TOOLKIT-FOR-SMES.git",
    logo: ""
  },
  {
    title: "Mwethe Clinic Booking System",
    description: "SQL-based clinic system managing patients, doctors, and appointments using foreign keys and advanced database relationships.",
    tags: ["MySQL", "Database Design", "Healthcare IT"],
    link: "#",
    logo: ""
  },
  {
    title: "EduConnect - STEM Parent Teacher App",
    description: "A text-based education management tool for parent-teacher collaboration and STEM learning designed to improve communication and student outcomes.",
    tags: ["Education Tech", "Communication", "STEM"],
    link: "#",
    logo: ""
  },
  {
    title: "COVID-19 Global Data Tracker",
    description: "A Python-based data analysis project tracking COVID-19 trends in Kenya, USA, India, and China with visualizations and statistical analysis.",
    tags: ["Python", "Data Analysis", "Visualization", "Statistics"],
    link: "#",
    logo: ""
  }
];

const ProjectShowcase = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
            {project.logo ? (
              <AspectRatio ratio={16/9} className="bg-white flex items-center justify-center p-4">
                <img 
                  src={project.logo} 
                  alt={`${project.title} logo`} 
                  className="h-24 object-contain"
                />
              </AspectRatio>
            ) : (
              <div className="aspect-video relative bg-blue-100 flex items-center justify-center">
                <div className="text-4xl font-bold text-blue-300">{project.title.substring(0, 1)}</div>
              </div>
            )}
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">{project.description}</p>
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
            <CardFooter>
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
