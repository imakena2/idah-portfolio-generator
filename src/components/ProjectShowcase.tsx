
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
