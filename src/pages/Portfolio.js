// src/components/Portfolio.js
import React from 'react';
import styled from 'styled-components';

const projects = [
  {
    title: 'M-PESA BUESINESS PORTAL',
    name:'m-pesa merchants and agents onboarding portal',
    description: 'M-PESA application portal enables business and individuals to apply for M-PESA solutions to collect and disburse funds. ',
    link: 'https://m-pesabusiness.safaricom.et/',
  },
  {
    title: 'UNICASH SCHOOL',
    name:'unicash school payment and reporting',
    description: 'offer an easy way to collect tuition fees for school and colleges/universities and,; Provide parents and students a wide range of payment options.',
    link: 'https://school.unicash.com.et/school/',
  },
  // Add more projects as needed
];

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <div className="container">
        <h2>Portfolio</h2>
        <ProjectList>
          {projects.map((project, index) => (
            <ProjectItem key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Link</a>
            </ProjectItem>
          ))}
        </ProjectList>
      </div>
    </PortfolioSection>
  );
};

const PortfolioSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectItem = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 20px;
  padding: 20px;
  width: 300px;
  text-align: left;

  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
  }
`;

export default Portfolio;
