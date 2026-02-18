import { useState } from "react";
import SkillCircle from "./SkillCircle";
import "./skills.css";
import { FaReact, FaGitAlt, FaFigma, FaLinux } from "react-icons/fa";
import { SiPhp, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaProjectDiagram, FaTasks, FaCogs } from "react-icons/fa";
import { MdEventAvailable } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";


export default function SkillsSection() {

  const skillCategories = {

    Operations: [
      { name: "Project coordination", percentage: 85, icon: <FaProjectDiagram /> },
      { name: " event management", percentage: 95, icon: <MdEventAvailable /> },
      { name: "program execution", percentage: 90, icon: <FaCogs /> },
    ],

    Technical: [
    { name: "React", percentage: 85, icon: <FaReact /> },
    { name: "PHP", percentage: 90, icon: <SiPhp /> },
    { name: "Tailwind", percentage: 90, icon: <SiTailwindcss /> },
    { name: "Bootstrap", percentage: 90, icon: <SiBootstrap /> },
  ],

    design: [
      { name: "Figma", percentage: 100, icon: <FaFigma /> },
      { name: "UI/UX fundamentals", percentage: 85, icon: <FaPaintBrush />},
    ],

    tools: [
      { name: "Git", percentage: 80, icon: <FaGitAlt /> },
      { name: "VS Code", percentage: 95, icon: <VscVscode /> },
    ]

  };

  const [activeTab, setActiveTab] = useState("Technical");

  return (
    <section className="skills-section">

      {/* Tabs */}
      <div className="tabs">

        <button
          className={activeTab === "Operations" ? "tab active" : "tab"}
          onClick={() => setActiveTab("Operations")}
        >
          Operations
        </button>

        <button
            className={activeTab === "Technical" ? "tab active" : "tab"}
            onClick={() => setActiveTab("Technical")}
        >
            Technical
        </button>

        <button
          className={activeTab === "design" ? "tab active" : "tab"}
          onClick={() => setActiveTab("design")}
        >
          Design
        </button>

        <button
          className={activeTab === "tools" ? "tab active" : "tab"}
          onClick={() => setActiveTab("tools")}
        >
          Tools
        </button>

      </div>

      {/* Skills */}
      <div className="skills-container">

        {skillCategories[activeTab].map((skill, index) => (
          <SkillCircle
            key={index}
            percentage={skill.percentage}
            name={skill.name}
            icon={skill.icon}
          />
        ))}

      </div>

    </section>
  );
}
