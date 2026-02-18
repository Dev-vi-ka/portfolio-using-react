export default function TimelineItem({ year, title, description }) {
  return (
    <div className="timeline-item">

      <div className="timeline-dot"></div>

      <div className="timeline-card">
        <span className="timeline-year">{year}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

    </div>
  );
}
