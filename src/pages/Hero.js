// src/components/Hero.js
import React from 'react';
import styled ,{keyframes} from 'styled-components';
import pfofileImage from '../assets/images/profile.png'

const Hero = () => {
  return (
    <HeroSection id="hero">
      <div className="container">
        <HeroContent>
        <div className="main-content">
        <TextContent>
            <h1>Welcome to My Portfolio</h1>
            <p>Senior Software Developer with over 5 years of hands-on experience in developing and maintaining web applications within commercial environments. Demonstrated ability to lead and manage teams effectively, while also thriving independently under pressure to deliver top-tier products within stipulated timelines and budgetary constraints. Possess a solid foundation in microservices architecture, cloud computing, and Agile development methodologies, ensuring the delivery of scalable and efficient solutions. Committed to continuous learning and innovation to drive excellence in software development practices.</p>
          </TextContent>
          <ImageContainer>
          <img src={pfofileImage} alt="Amanuel Zerfu" className="profile-image" />
          </ImageContainer>
      </div>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

const slideInFromLeft = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  display: flex;
  align-items: flex-end; /* Align image to the bottom */
  overflow: hidden;
  z-index: 0; /* Behind the text content */
  animation: ${slideInFromLeft} 1s ease-out forwards;

  .profile-image {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));
    pointer-events: none;
  }
`;

const HeroSection = styled.section`
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: Arial, sans-serif;
  overflow-x: hidden;
  align-items: center;
`;
const TextContent = styled.div`
  width: 60%;
  padding: 11px;
  color: #ffffff;
  background-color:rgba(0, 0, 0, 0); /* Optional background for readability */
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
     margin-bottom: 20px;
    font-size: 2.5em;
    font-weight: bold;
    line-height: 1.2;

  }

  p {
    font-size: 1.2em;
    line-height: 1.5;
  }
`;
const HeroContent = styled.div`
  color: #fff;
  text-align: center;

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 24px;
    margin-top: 0px;
  }
`;

export default Hero;
