import React from "react";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";

const ExaminationSection = () => {
  const cards = new Array(10).fill({
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  });

  return (
    <div className="examination-section">
      <div className="top-section">
        <div className="left-content">
          <h1 className="left-content-h1">Lorem ipsum</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores.
          </p>
          <button className="know-more-btn">Know More</button>
        </div>
        <div className="right-image">
          <img src="images\image.png" alt="Banner" />
        </div>
      </div>

      <div className="upcoming-examinations">
        <div className="exam-dates">
          <div className="exam-date-h">
            <h2>Upcoming Examinations</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
          </div>
          <div className="exam-date">
            <WorkHistoryOutlinedIcon
              sx={{
                fontSize: "3rem",
                color: "#1b3e72",
              }}
            />
            <div>
              <p>02th October 2014</p>
              <span>Level 1 exam</span>
            </div>
          </div>
          <div className="exam-date">
            <WorkHistoryOutlinedIcon
              sx={{
                fontSize: "3rem",
                color: "#1b3e72",
              }}
            />
            <div>
              <p>02th October 2014</p>
              <span>Level 1 exam</span>
            </div>
          </div>
          <div className="exam-date">
            <WorkHistoryOutlinedIcon
              sx={{
                fontSize: "3rem",
                color: "#1b3e72",
              }}
            />
            <div>
              <p>02th October 2014</p>
              <span>Level 1 exam</span>
            </div>
          </div>
        </div>
      </div>

   
      <div className="cards-container">
        {cards.map((card, index) => (
          <div key={index} className="card">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <button className="know-more-btn">Know More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExaminationSection;
