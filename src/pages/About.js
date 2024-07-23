// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I am a skilled frontend developer with experience in Java spring boot vs ReactJS and a keen eye for design. I love building user-friendly and responsive web applications.
        </p>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
  }
`;

export default About;
