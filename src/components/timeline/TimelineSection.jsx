import Timeline from "./Timeline";
import "./timeline.css";

export default function TimelineSection() {

  const education = [
    
    {
      year: "2023 - Now",
      title: "Bachelor's Degree(BCA)",
      description: "Kristu Jyoti College of Management and Technology, MG University"
    },
    {
      year: "2022- 2023",
      title: "High School Diploma",
      description: "St. John the Baptist CBSE School, Nedumkunnam"
    }
  ];

  const experience = [
    {
      year: "September 2025 – present",
      title: "Project Coordinator Associate",
      description: "µLearn Foundation"
    },
    {
      year: "July 2023 – March 2025",
      title: "Women in Tech Lead (Former Design Intern)",
      description: "Inovus Labs IEDC, KJCMT"
    },
    {
      year: "June 2024 – April 2025",
      title: "Volunteer",
      description: "TEDx KCMT"
    }
  ];

  return (
    <section id="timeline-section" className="timeline-section">

        <Timeline title="Experience" data={experience} />

      <Timeline title="Education" data={education} />

    </section>
  ); 
}
