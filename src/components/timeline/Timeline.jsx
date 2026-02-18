import TimelineItem from "./TimelineItem";

export default function Timeline({ title, data }) {
  return (
    <div className="timeline-column">

      <h2 className="timeline-title">{title}</h2>

      <div className="timeline-line">

        {data.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            description={item.description}
          />
        ))}

      </div>

    </div>
  );
}
