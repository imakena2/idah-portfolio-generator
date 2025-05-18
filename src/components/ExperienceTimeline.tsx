
import { Card, CardContent } from "@/components/ui/card";
import { 
  Briefcase
} from "lucide-react";

const experiences = [
  {
    title: "Career Break",
    company: "Various Institutions",
    period: "Aug 2023 – April 2025",
    description: "Took a strategic career break to strengthen end-to-end IT competencies, with a focus on becoming a well-rounded professional capable of delivering sustained value and supporting long-term organizational goals.",
    highlights: [],
  },
  {
    title: "Technology Banking Operations Manager",
    company: "Kenya Commercial Bank Group",
    period: "Jan 2023 – Aug 2023",
    description: "",
    highlights: [
      "Managed Core Banking Systems Close of Business (COB) for multiple countries.",
      "Monitored system performance, swift files movement, and automated jobs.",
      "Handled user requests for data extraction and ad-hoc reports from the Core Banking System.",
      "Ensured seamless transition between shift teams for uninterrupted operations.",
      "Spearheaded ETL optimization projects, achieving a 99.7% uptime for critical financial systems.",
      "Automated COB processing, reducing processing time by 13%, significantly improving operational efficiency.",
      "Standardized IT operations across four countries, resulting in streamlined processes and improved cross-border collaboration."
    ],
  },
  {
    title: "IT Support Engineer",
    company: "Kenya Commercial Bank Group",
    period: "Aug 2018 – Dec 2022",
    description: "",
    highlights: [
      "Provided technical expertise in Active Directory, MS Exchange, messaging, and mobile collaboration.",
      "Ensured reliable delivery of e-banking communications (Internet Banking, Mobile Banking).",
      "Managed patch deployment, threat management, and email security platforms.",
      "Consistently delivered first-contact resolution for 94% of support tickets by efficiently diagnosing and addressing technical issues.",
      "Designed and implemented virtual training programs that reached over 200 users, leading to a 27% decrease in help desk inquiries.",
      "Strengthened identity and access management (IAM) protocols by enforcing stringent security measures."
    ],
  },
  {
    title: "Manager, Service Desk Level 2 Support",
    company: "Kenya Commercial Bank Group",
    period: "Jan 2017 – Jul 2018",
    description: "",
    highlights: [
      "Provided second-level user support for banking applications, hardware, and security systems.",
      "Implemented access controls for user account management, ensuring compliance.",
      "Conducted identity and privileged access audits and remediation exercises across the bank.",
      "Spearheaded the introduction of root cause analysis frameworks, which reduced recurring incidents by 23% within six months.",
      "Implemented advanced cloud-based monitoring tools, increasing the rate of early incident detection by 39%."
    ],
  },
  {
    title: "Service Desk Analyst",
    company: "Kenya Commercial Bank Group",
    period: "Sept 2015 – Dec 2016",
    description: "",
    highlights: [
      "First-line IT support for bank branches, subsidiaries, and head office.",
      "Diagnosed and resolved technical incidents, escalating complex cases.",
      "Provided daily IT service desk monitoring reports on system performance.",
      "Maintained an impressive 98% SLA compliance rate by standardizing and refining incident response protocols.",
      "Provided effective remote IT support for over 50 bank branches, ensuring uninterrupted business operations."
    ],
  },
  {
    title: "Customer Relationship Manager",
    company: "Kenya Commercial Bank Group",
    period: "Mar 2011 – Aug 2015",
    description: "",
    highlights: [
      "Led lending and customer service units, ensuring loan approvals and repayments.",
      "Supervised front-office staff to provide world-class customer service.",
      "Managed credit portfolio and risk compliance to align with banking regulations.",
      "Spearheaded the adoption of cloud-based solutions, driving a 20% growth in the customer portfolio.",
      "Enhanced customer engagement by leveraging data-driven insights to tailor banking solutions to client needs."
    ],
  },
  {
    title: "Banking Credit & Operations Analyst",
    company: "Kenya Commercial Bank Group",
    period: "Jan 2008 – Feb 2011",
    description: "",
    highlights: [
      "Processed and monitored loans, ensuring repayment compliance.",
      "Managed portfolio grading and security documentation in line with prudential banking standards.",
      "Supervised financial transactions, including fixed deposit maturity monitoring."
    ],
  }
];

const ExperienceTimeline = () => {
  return (
    <section className="mb-16">
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <Card key={index} className="border-l-4 border-blue-600">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                  <Briefcase size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800">{experience.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-slate-600">
                    <span className="font-medium">{experience.company}</span>
                    <span className="hidden sm:inline text-slate-400">•</span>
                    <span className="text-sm text-slate-500">{experience.period}</span>
                  </div>
                  {experience.description && (
                    <p className="mt-3 text-slate-600">{experience.description}</p>
                  )}
                  {experience.highlights.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {experience.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600 flex-shrink-0"></span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
        <h3 className="text-xl font-semibold text-center text-blue-800 mb-3">Final Recognition</h3>
        <p className="text-center text-slate-700 italic">
          "Idah is a valuable team leader with high technical aptitude. She is multi-skilled, business savvy, and a problem solver."
        </p>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
