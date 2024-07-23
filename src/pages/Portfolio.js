// src/components/Portfolio.js
import React from 'react';
import styled from 'styled-components';

const projects = [
  {
    title: 'Project 1',
    description: 'Brief description of the project.',
    link: 'https://github.com/username/project1',
  },
  {
    title: 'Project 2',
    description: 'Brief description of the project.',
    link: 'https://github.com/username/project2',
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
              <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
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
  background: #fff;
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
