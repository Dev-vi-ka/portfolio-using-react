import Timeline from "./Timeline";
import "./timeline.css";

export default function TimelineSection() {

  const education = [
    {
      year: "2018 - 2022",
      title: "High School Degree",
      description: "Completed high school with focus on science."
    },
    {
      year: "2022 - 2025",
      title: "Bachelor's Degree",
      description: "Studying Computer Science."
    },
    {
      year: "2025 - 2027",
      title: "Master Degree",
      description: "Specialization in AI."
    }
  ];

  const experience = [
    {
      year: "2023",
      title: "UI/UX Designer",
      description: "Worked on modern UI systems."
    },
    {
      year: "2024",
      title: "Full Stack Developer",
      description: "Built scalable applications."
    },
    {
      year: "2025",
      title: "Frontend Developer",
      description: "Focused on React performance."
    }
  ];

  return (
    <section id="timeline-section" className="timeline-section">

        <Timeline title="Experience" data={experience} />

      <Timeline title="Education" data={education} />

    </section>
  ); 
}
