// src/components/About.js
import React from 'react';
import styled from 'styled-components';

const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
    
        Seasoned backend developer with over 5 years of hands-on experience driving transformative projects within the different industry. Expertise spans from architecting robust RESTful web services to optimizing database performance and deploying applications on cutting-edge technologies.
        </p>
      </div>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  text-align: center;
  align-content:center;
  height:70%;

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
