
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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

const professionalTools = [
  {
    category: "Development Tools",
    tools: ["VS Code", "Git", "GitHub", "Jenkins", "Docker"]
  },
  {
    category: "Cloud Platforms",
    tools: ["AWS", "Azure", "Google Cloud Platform"]
  },
  {
    category: "Monitoring Tools",
    tools: ["Grafana", "Prometheus", "Nagios", "Zabbix", "ELK Stack"]
  },
  {
    category: "Collaboration Tools",
    tools: ["Jira", "Trello", "Confluence", "Slack", "Microsoft Teams"]
  },
  {
    category: "Security Tools",
    tools: ["Nessus", "Metasploit", "Wireshark", "DAST/SAST Tools"]
  }
];

const Skills = () => {
  return (
    <div className="space-y-12">
      <section className="py-8">
        <h2 className="text-4xl font-bold text-purple-800 mb-10 text-center">Technical Skills & Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-purple-600 hover:shadow-xl transition-all duration-300">
              <h3 className="text-xl font-bold text-purple-700 mb-6 pb-3 border-b border-purple-100">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100 py-2 px-4 text-sm font-medium">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-12 bg-gradient-to-r from-purple-50 to-white rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Professional Tools & Platforms</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {professionalTools.map((toolCategory, index) => (
            <Card key={index} className="border-t-4 border-purple-500 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-lg font-bold text-purple-700 mb-4">{toolCategory.category}</h3>
                <div className="flex flex-wrap gap-3">
                  {toolCategory.tools.map((tool, toolIndex) => (
                    <Badge key={toolIndex} className="bg-purple-100 text-purple-800 hover:bg-purple-200 py-1.5 px-3">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
