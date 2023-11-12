import React from 'react';
import LinkItem from './LinkItem';
import './LinksContainer.css'; // Add styling for LinksContainer

const LinksContainer = () => {
  return (
    <div className="links-container">
      <h1>Hello! I'm Thitipong Jantawee</h1>
      <h3>Data Scientist</h3>
      <p>Passionate about data and AI, I'm a recent Data Science graduate with expertise in machine learning in various field. I love to do real-world challenges and develop my own project.  </p>
      <div className="buttons-container">
        <LinkItem text="LinkedIn" link="https://www.linkedin.com/in/thitipong-janta/" />
        <LinkItem text="GitHub" link="https://github.com/thititj" />
        <LinkItem text="Thai Sentiment Analysis Demo" link="http://www.ds.science.cmu.ac.th/TextSentiment" />
        <LinkItem text="Thai OCR Demo (Currently not working)" link="/" />
      </div>
      <br />
      <p className="footer">Feel free to explore my projects and connect with me on LinkedIn and GitHub. Thank you for visiting my website—I look forward to working with you!</p>
    </div>
  );
}

export default LinksContainer;
