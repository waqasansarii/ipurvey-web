import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
// assets
import step1 from "../../../Assets/Group 3611.png";
import step2 from "../../../Assets/Group 3614.png";

export default function ReportTimeline() {
  return (
    <div className="AR_timeline_container">
        <Timeline>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "white" }}>
                <img src={step1} alt="..." />
              </TimelineDot>
              <TimelineConnector className='grnClr' />
            </TimelineSeparator>
            <TimelineContent>
            <div className="step1Head">
                <h6 style={{ color: "black" }}>New</h6>
                <p>April 10, 2021 | 05:00 </p>
              </div>
              <div className="timeline_user_info">
                    <p>
                      Problems pending citizen approval will be automatically
                      resolved if citizen doesn't provide feedback within 14
                      days.
                    </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot style={{ backgroundColor: "white" }}>
                <img src={step1} alt="..." />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
            <div className="step1Head">
                <h6 style={{ color: "black" }}>Claim Requested</h6>
                <p>April 10, 2021 | 05:00 </p>
              </div>
              <div className="timeline_user_info">
                    <p>
                      Problems pending citizen approval will be automatically
                      resolved if citizen doesn't provide feedback within 14
                      days.
                    </p>
              </div>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
              <TimelineDot style={{ backgroundColor: "white" }}>
                <img src={step2} alt="..." />
              </TimelineDot>
            <TimelineContent>
              <div className="step1Head">
                <h6 style={{opacity:'.5' }}>Closed</h6>
                <p>April 10, 2021 | 05:00 PM UTC</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
    </div>
  );
}
