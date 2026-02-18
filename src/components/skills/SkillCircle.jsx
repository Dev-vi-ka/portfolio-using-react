import "./skills.css";

export default function SkillCircle({ percentage, name, icon }) {

  const radius = 40;
  const stroke = 8;
  const normalizedRadius = radius - stroke / 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  return (
    <div className="skill">

      <div className="skill-svg-wrapper">

        <svg
          height={radius * 2}
          width={radius * 2}
        >

          {/* background circle */}
          <circle
            stroke="#eee"
            fill="transparent"
            strokeWidth={stroke}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />

          {/* progress circle */}
          <circle
            stroke="#facc15"
            fill="transparent"
            strokeWidth={stroke}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="skill-progress"
          />

        </svg>

        <div className="skill-icon">
          {icon}
        </div>

      </div>

      <div className="skill-percentage">
        {percentage}%
      </div>

      <div className="skill-name">
        {name}
      </div>

    </div>
  );
}
