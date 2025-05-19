
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    name: "IT Operations",
    skills: ["IT Support (Level 1 & 2)", "Service Delivery", "IT Troubleshooting", "Ticketing Systems", "Remote Support", "System Administration", "Incident Management"]
  },
  {
    name: "Cloud & Infrastructure",
    skills: ["AWS", "Cloud Security", "Cloud Computing", "System Monitoring", "Configuration Management", "IAM", "Ansible"]
  },
  {
    name: "Monitoring & Analytics",
    skills: ["Grafana", "Prometheus", "PowerBI", "Data Analysis", "ETL Optimization", "Root Cause Analysis", "Performance Monitoring", "Reporting"]
  },
  {
    name: "Security & Operations",
    skills: ["DevSecOps", "DAST/SAST", "SLA Adherence", "Process Improvement", "Identity Management", "Cybersecurity"]
  },
  {
    name: "Development & CI/CD",
    skills: ["Automation Scripting", "Python", "HTML", "CSS", "SQL", "Jenkins", "Web Development"]
  },
  {
    name: "AI & Emerging Tech",
    skills: ["AI Applications", "Machine Learning", "ChatGPT", "AI Ethics", "Emerging Technologies"]
  },
  {
    name: "Project Management",
    skills: ["Jira", "Trello", "User Experience", "Customer Engagement", "Digital Transformation", "Client Communication", "Process Optimization"]
  },
  {
    name: "Microsoft Technologies",
    skills: ["Office 365", "Microsoft Exchange", "SharePoint", "Teams Administration", "Active Directory"]
  }
];

const Skills = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Skills & Expertise</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-purple-600 hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-purple-700 mb-4 pb-2 border-b border-purple-100">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100 py-1.5 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
