import React from "react";

export default function Faq() {
  return (
    <div>
      <div className="stats-section">
        <div className="stats-card">
          <h3>Lorem Ipsum</h3>
          <h1>123+</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="stats-card">
          <h3>Lorem Ipsum</h3>
          <h1>12+</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="stats-card">
          <h3>Lorem Ipsum</h3>
          <h1>12+</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="stats-card">
          <h3>Lorem Ipsum</h3>
          <h1>123</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>

      <div className="faq-section">
        <h2>FAQ</h2>

        <div className="faq-item">
          <div className="faq-question">
            <p>How does an investor gain access to MF Utility?</p>
            <span className="icon">+</span>
          </div>
        </div>

        <div className="faq-item open">
          <div className="faq-question">
            <p>
              Will investors be able to have multiple Common Account Numbers?
            </p>
            <span className="icon">-</span>
          </div>
          <div className="faq-answer">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
