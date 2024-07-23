// src/components/Hero.js
import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  return (
    <HeroSection id="hero">
      <div className="container">
        <HeroContent>
          <h1>Hello, I'm Amanuel Zerfu</h1>
          <p>A passionate software developer</p>
        </HeroContent>
      </div>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
`;

const HeroContent = styled.div`
  color: #fff;
  text-align: center;

  h1 {
    font-size: 48px;
  }

  p {
    font-size: 24px;
    margin-top: 20px;
  }
`;

export default Hero;
