
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { PieChart, GraduationCap, Stethoscope } from "lucide-react";

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
    logo: "/lovable-uploads/S3 Logo.png"
  },
  {
    title: "CyberRisk Assessment Toolkit for SMEs",
    description: "A comprehensive cybersecurity toolkit designed specifically for small to medium-sized enterprises, providing affordable risk assessment frameworks and implementation guidance.",
    tags: ["Cybersecurity", "Risk Assessment", "SME", "Security Framework"],
    link: "https://github.com/imakena2/ASSESSMENT-TOOLKIT-FOR-SMES.git",
    logo: "/lovable-uploads/cybersecurity.png"  
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
    icon: <GraduationCap className="h-16 w-16 text-blue-500" />
  },
  {
    title: "COVID-19 Global Data Tracker",
    description: "A Python-based data analysis project tracking COVID-19 trends in Kenya, USA, India, and China with visualizations and statistical analysis.",
    tags: ["Python", "Data Analysis", "Visualization", "Statistics"],
    link: "#",
    logo: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDU4IDU4IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSJQYWdlLTEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PGcgaWQ9IjAxNi0tLUNvdmlkLTE5IiBmaWxsLXJ1bGU9Im5vbnplcm8iPjxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyOSIgY3k9IjI5IiBmaWxsPSIjZjc1YzRlIiByPSIyOSIvPjxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyNiIgY3k9IjI2IiBmaWxsPSIjZjA0ODM1IiByPSIyNiIvPjxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyNyIgY3k9IjI3IiBmaWxsPSIjZGMzNjJlIiByPSIyMCIvPjxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyNCIgY3k9IjI0IiBmaWxsPSIjYzQxZTFhIiByPSIxNyIvPjxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIyNCIgY3k9IjI0IiBmaWxsPSIjYzQxZTFhIiByPSIxMCIvPjxjaXJjbGUgaWQ9Ik92YWwiIGN4PSIxOSIgY3k9IjE5IiBmaWxsPSIjZmZmIiByPSIzIi8+PGcgZmlsbD0iI2ZmZiIgaWQ9Ik92YWwtMiI+PHBhdGggaWQ9IlBhdGgiIGQ9Im0zOSAyMSAuMzUzNTUzNC45MzkzMzk4YzEuNTYyMDgyMi0uNTg3NjQ0NSAzLjMwMDY1MzguMTAzMDUyOCAzLjg4ODI5ODMgMS42NjUxMzUuNTg3NjQ0NSAxLjU2MjA4MjItLjEwMzA1MjggMy4zMDA2NTM4LTEuNjY1MTM1IDMuODg4Mjk4M2wtLjkzOTMzOTgtLjM1MzU1MzRoLTEuMTgwODQwNGMtLjM0OTI1MTIuMjk1NzU1OC0uODI1NDM0Mi40Mzg4NDg4LTEuMzEzNTA2OC4zNzYyODY3bC0uNDAxMTM2OC0uMDY5Mjk2N2MtLjc4Njg2MzgtLjE4MDA1OTUtMS4yNzkyNTExLS45NjY2NDYtMS4wOTkxOTE1LTEuNzUzNTA5OC4wNzI3NzI1LS4zMTc0NzA4LjI1NDUzNjQtLjU5MjI4MDcuNTA3MzM1OS0uNzk4OTM5MXYtMS4yMjg3MjQ5YzAtLjMzNTc4NjQuMDg0MjI3My0uNjUxNjYxOC4yMzI2MjY4LS45Mjg0NzE3bC0uMDIwODM3Mi0uMDIwODM3MmMtLjI5MjM5MjktLjI5MjM5MjktLjMyNzEyNTYtLjc1MTg4NzktLjA4MjAyNDUtMS4wODA4MTU3bC4wODIwMjQ1LS4wODcxMjkzYy4yNTAwMDAxLS4yNTAwMDAxLjY1NjE0NDctLjI1MDAwMDEuOTA2MTQ0NyAwbC4wMTg1ODI2LjAxODU4MjZjLjIwNDc3MjctLjE4ODE1NzYuNDYxOTgxLS4zMDYzNDQ5Ljc0MjE1MDMtLjMzMjM0NjFsLjE4MjkwMjgtLjAwOTU2ODd6Ii8+PC9nPjxwYXRoIGlkPSJQYXRoLTIiIGQ9Im0yNyAzNC0uMTIxMzIwMy0uMzYzOTYxYy0uNjQxMTE0MS0xLjkyMzM0MjMuMTc2Mjk4Ni00LjA0OTk1MTQgMi0xaC0xeiIgZmlsbD0iI2ZmZiIvPjxnIGZpbGw9IiNmZmYiIGlkPSJPdmFsLTMiPjxwYXRoIGlkPSJQYXRoIiBkPSJtMTkuNSAzMSAuMzUzNTUzNC45MzkzMzk4YzEuNTYyMDgyMi0uNTg3NjQ0NSAzLjMwMDY1MzguMTAzMDUyOCAzLjg4ODI5ODMgMS42NjUxMzUuNTg3NjQ0NSAxLjU2MjA4MjItLjEwMzA1MjggMy4zMDA2NTM4LTEuNjY1MTM1IDMuODg4Mjk4M2wtLjkzOTMzOTgtLjM1MzU1MzRoLTEuMTgwODQwNGMtLjM0OTI1MTIuMjk1NzU1OC0uODI1NDM0Mi40Mzg4NDg4LTEuMzEzNTA2OC4zNzYyODY3bC0uNDAxMTM2OC0uMDY5Mjk2N2MtLjc4Njg2MzgtLjE4MDA1OTUtMS4yNzkyNTExLS45NjY2NDYtMS4wOTkxOTE1LTEuNzUzNTA5OC4wNzI3NzI1LS4zMTc0NzA4LjI1NDUzNjQtLjU5MjI4MDcuNTA3MzM1OS0uNzk4OTM5MXYtMS4yMjg3MjQ5YzAtLjMzNTc4NjQuMDg0MjI3My0uNjUxNjYxOC4yMzI2MjY4LS45Mjg0NzE3bC0uMDIwODM3Mi0uMDIwODM3MmMtLjI5MjM5MjktLjI5MjM5MjktLjMyNzEyNTYtLjc1MTg4NzktLjA4MjAyNDUtMS4wODA4MTU3bC4wODIwMjQ1LS4wODcxMjkzYy4yNTAwMDAxLS4yNTAwMDAxLjY1NjE0NDctLjI1MDAwMDEuOTA2MTQ0NyAwbC4wMTg1ODI2LjAxODU4MjZjLjIwNDc3MjctLjE4ODE1NzYuNDYxOTgxLS4zMDYzNDQ5Ljc0MjE1MDMtLjMzMjM0NjFsLjE4MjkwMjgtLjAwOTU2ODd6Ii8+PC9nPjxnIGZpbGw9IiNmZmYiIGlkPSJPdmFsLTQiPjxwYXRoIGlkPSJQYXRoIiBkPSJtMTYuNSAxNyAuMzUzNTUzNC45MzkzMzk4YzEuNTYyMDgyMi0uNTg3NjQ0NSAzLjMwMDY1MzguMTAzMDUyOCAzLjg4ODI5ODMgMS42NjUxMzUuNTg3NjQ0NSAxLjU2MjA4MjItLjEwMzA1MjggMy4zMDA2NTM4LTEuNjY1MTM1IDMuODg4Mjk4M2wtLjkzOTMzOTgtLjM1MzU1MzRoLTEuMTgwODQwNGMtLjM0OTI1MTIuMjk1NzU1OC0uODI1NDM0Mi40Mzg4NDg4LTEuMzEzNTA2OC4zNzYyODY3bC0uNDAxMTM2OC0uMDY5Mjk2N2MtLjc4Njg2MzgtLjE4MDA1OTUtMS4yNzkyNTExLS45NjY2NDYtMS4wOTkxOTE1LTEuNzUzNTA5OC4wNzI3NzI1LS4zMTc0NzA4LjI1NDUzNjQtLjU5MjI4MDcuNTA3MzM1OS0uNzk4OTM5MXYtMS4yMjg3MjQ5YzAtLjMzNTc4NjQuMDg0MjI3My0uNjUxNjYxOC4yMzI2MjY4LS45Mjg0NzE3bC0uMDIwODM3Mi0uMDIwODM3MmMtLjI5MjM5MjktLjI5MjM5MjktLjMyNzEyNTYtLjc1MTg4NzktLjA4MjAyNDUtMS4wODA4MTU3bC4wODIwMjQ1LS4wODcxMjkzYy4yNTAwMDAxLS4yNTAwMDAxLjY1NjE0NDctLjI1MDAwMDEuOTA2MTQ0NyAwbC4wMTg1ODI2LjAxODU4MjZjLjIwNDc3MjctLjE4ODE1NzYuNDYxOTgxLS4zMDYzNDQ5Ljc0MjE1MDMtLjMzMjM0NjFsLjE4MjkwMjgtLjAwOTU2ODd6Ii8+PC9nPjxnIGZpbGw9IiNmZmYiIGlkPSJPdmFsLTUiPjxwYXRoIGlkPSJQYXRoIiBkPSJtMjkgMTEgLjM1MzU1MzQuOTM5MzM5OGMxLjU2MjA4MjItLjU4NzY0NDUgMy4zMDA2NTM4LjEwMzA1MjggMy44ODgyOTgzIDEuNjY1MTM1LjU4NzY0NDUgMS41NjIwODIyLS4xMDMwNTI4IDMuMzAwNjUzOC0xLjY2NTEzNSAzLjg4ODI5ODNsLS45MzkzMzk4LS4zNTM1NTM0aC0xLjE4MDg0MDRjLS4zNDkyNTEyLjI5NTc1NTgtLjgyNTQzNDIuNDM4ODQ4OC0xLjMxMzUwNjguMzc2Mjg2N2wtLjQwMTEzNjgtLjA2OTI5NjdjLS43ODY4NjM4LS4xODAwNTk1LTEuMjc5MjUxMS0uOTY2NjQ2LTEuMDk5MTkxNS0xLjc1MzUwOTguMDcyNzcyNS0uMzE3NDcwOC4yNTQ1MzY0LS41OTIyODA3LjUwNzMzNTktLjc5ODkzOTF2LTEuMjI4NzI0OWMwLS4zMzU3ODY0LjA4NDIyNzMtLjY1MTY2MTguMjMyNjI2OC0uOTI4NDcxN2wtLjAyMDgzNzItLjAyMDgzNzJjLS4yOTIzOTI5LS4yOTIzOTI5LS4zMjcxMjU2LS43NTE4ODc5LS4wODIwMjQ1LTEuMDgwODE1N2wuMDgyMDI0NS0uMDg3MTI5M2MuMjUwMDAwMS0uMjUwMDAwMS42NTYxNDQ3LS4yNTAwMDAxLjkwNjE0NDcgMGwuMDE4NTgyNi4wMTg1ODI2Yy4yMDQ3NzI3LS4xODgxNTc2LjQ2MTk4MS0uMzA2MzQ0OS43NDIxNTAzLS4zMzIzNDYxbC4xODI5MDI4LS4wMDk1Njg3eiIvPjwvZz48cGF0aCBpZD0iUGF0aC0zIiBkPSJtMzEuNzE3MjgyOSA0MC4wNTg0MzM3LjcwNzEwNjguNzA3MTA2OGMuMzI0NzE3NS4zMDQwOTQ1LjMxOTI0MTkuODExNTg3NC0uMDEyMTgxNCAxLjEwOTM2ODdsLS43MDcxMDY3LS43MDcxMDY3LS41NzY3NzY3LjU3Njc3NjdjLS43ODEwNDk4Ljc4MTA0OTctMi4wNDczNzg5Ljc4MTA0OTctMi44Mjg0MjcxIDBsLjAyMDk5ODEtLjAyMDk5ODFoLS42MzYzOTI1Yy0xLjEwNDU2OTUgMC0yLS44OTU0MzA1LTItMiAuNzkzNzk3MS0uMzI5NjYwMyAxLjcwNDQ2OTktLjA0ODEzNDEgMi4xMTgwMzM5LjY1NTkzOTkuMTM3NDE4NC0uNzE2NDgxOC43NjM5MTgtMS4yNTkzNjQ5IDEuNTA4MzY5LTEuMjU5MzY0OS43NDQ0NTEgMCAxLjM3MDk1MDYuNTQyODgzMSAxLjUwODM2OSAxLjI1OTM2NDkuNDgwODEzNi0uODIwMjMzNyAxLjU0MDMxODItMS4wODYzMTAxIDIuMzYwNTUxOS0uNjA1NDk2NS4xNjgyMDQ3LjA5ODUzNS4zMTI5NTIyLjIyMTkyOTguNDMxMDU0OS4zNjcxMjE5IDEuMTAzNTgxOC0uMDE2NzExOCAyLjAxMzMyODEuODY0NDMxOSAyLjAyOTcxMzYgMS45NjgxNzYyLjAxNjM4NTQuMS4wMDQwOTIuMjAwMjMzMS0uMDM2Njg0OS4yOTcxMzcxLS4wNTY4MDI4LjM1NzQyMDQuMDc0MTYyNy41NzcyODU5LjQzMjg1MSA0Ljg5Mjg2MzYuODUyODk4NXoiIGZpbGw9IiNmZmYiLz48L2c+PC9nPjwvc3ZnPg=="
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
              <CardTitle className="text-xl text-blue-500">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2 flex-grow">
              <p className="text-slate-600 text-sm">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-500"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter className="pt-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full">
                <Button className="w-full bg-blue-500 hover:bg-blue-600">View Project</Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 mb-16 bg-slate-100 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">Professional Tools</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-3">Cloud & DevOps</h3>
              <ul className="space-y-2 text-slate-600">
                <li>AWS CLI, Amazon S3, EC2, IAM</li>
                <li>Cloud Formation, Cloudwatch</li>
                <li>Docker, Jenkins, Ansible</li>
                <li>Kubernetes, GitLab CI, GitHub Actions</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-3">Data & Analytics</h3>
              <ul className="space-y-2 text-slate-600">
                <li>Hadoop, Apache Spark</li>
                <li>PowerBI, Tableau</li>
                <li>SQL, Python</li>
                <li>Monitoring and Logging tools</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-500 mb-3">IT Management</h3>
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
            <PieChart className="h-16 w-16 text-blue-500" />
          </div>
          
          <h3 className="text-xl font-semibold text-blue-500 mb-2">Tech Ace Solutions</h3>
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
