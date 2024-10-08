import React, { useState } from "react";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const ExaminationSection = () => {

  const cardTitles = [
    "Card 1: Introduction to JavaScript",
    "Card 2: Advanced CSS Techniques",
    "Card 3: Understanding React Hooks",
    "Card 4: Next.js for Server-Side Rendering",
    "Card 5: Node.js API Development",
    "Card 6: Mastering TypeScript",
    "Card 7: Responsive Web Design Principles",
    "Card 8: Exploring Redux Toolkit",
    "Card 9: Animating with CSS and JavaScript",
    "Card 10: Building Progressive Web Apps",
  ];
  
  const cards = cardTitles.map((title) => ({
    title,
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod",
  }));

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCards = 4; 

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < cards.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

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

      <div className="cards-slider">
        <button
          className="slider-btn left"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <ArrowBackIosIcon />
        </button>

        <div className="cards-container">
          {cards.slice(currentIndex, currentIndex + visibleCards).map((card, index) => (
            <div key={index} className="card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <div>
                <button className="know-more-btn">Know More</button>
                <ArrowCircleRightIcon />
              </div>
            </div>
          ))}
        </div>

        <button
          className="slider-btn right"
          onClick={handleNext}
          disabled={currentIndex >= cards.length - visibleCards}
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
    </div>
  );
};

export default ExaminationSection;
