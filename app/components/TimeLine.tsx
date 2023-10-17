import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type TimeLineProps = {
    children: React.ReactNode;
}

const TimeLine = (props: TimeLineProps) => {
  return (
    <VerticalTimeline layout="1-column-left">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "var(--primary-color)", color: "#fff", borderRadius: "0", clipPath: "polygon(5% 0%,101% 0%,100% 70%,95% 101%,0% 101%,0% 30%)", width: "50%" }}
        contentArrowStyle={{ borderRight: "1px solid  rgb(33, 150, 243)" }}
      >
        {props.children}
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default TimeLine;
