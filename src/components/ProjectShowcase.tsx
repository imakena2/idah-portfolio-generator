
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Support Pulse",
    description: "A full-stack web application simulating a real-world IT service desk environment. Built using Django (Python), SQL, HTML, and CSS with functionality for ticket logging, categorization, SLA tracking, and issue resolution monitoring.",
    tags: ["Python", "Django", "SQL", "HTML", "CSS", "ITIL"],
    link: "https://github.com/imakena2/supportPulse",
    image: ""
  },
  {
    title: "Tech Ace Solutions",
    description: "Company website showcasing IT infrastructure management, cloud migration, cybersecurity consulting, and custom software development services offered by the company.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    link: "https://imakena2.github.io/techace-website/index.html",
    image: ""
  }
];

const ProjectShowcase = () => {
  return (
    <section className="mb-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="aspect-video relative bg-blue-100 flex items-center justify-center">
              <div className="text-4xl font-bold text-blue-300">{project.title.substring(0, 1)}</div>
            </div>
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
