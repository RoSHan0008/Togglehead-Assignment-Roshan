import React, { useState } from "react";

export default function Faq() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    // Toggle between open and close
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqs = [
    {
      question: 'How does an investor gain access to MF Utility?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      question: 'Will investors be able to have multiple Common Account Numbers?',
      answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];

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
      {faqs.map((faq, index) => (
        <div className={`faq-item ${openIndex === index ? 'open' : ''}`} key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <p>{faq.question}</p>
            <span className="icon">{openIndex === index ? '-' : '+'}</span>
          </div>
          {openIndex === index && (
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    </div>
  );
}
