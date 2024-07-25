import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Container>
        <ContactInfo>
          <h2>Contact Information</h2>
          <p><Icon>📞</Icon> (+251) 940223403</p>
          <p><Icon>📧</Icon> acceptedamanuel@gmail.com</p>
          <p><Icon>📍</Icon> Addis Ababa, Ethiopia</p>
        </ContactInfo>
        <SocialLinks>
          <h2>Connect with Me</h2>
          <ul>
            <li><a href="https://www.linkedin.com/in/amanuel-zerfu/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="https://stackoverflow.com/users/16633119/amanuel-zerfu" target="_blank" rel="noopener noreferrer">StackOverflow</a></li>
            <li><a href="https://github.com/amanzerfu" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </SocialLinks>
      </Container>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  padding: 60px 20px;
  background: linear-gradient(to left,${({ theme }) => theme.colors.background}, rgba(249, 249, 249, 0) 90%);
  color: #333;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-color:#ffffff;
  text-align: center;
  text-style:bold;
`;

const ContactInfo = styled.div`
  margin-bottom: 40px;
  color:#ffffff;

  h2 {
    margin-bottom: 20px;
    font-size: 2em;
  }

  p {
    font-size: 1.2em;
    line-height: 1.6;
    margin: 10px 0;
    color:#ffffff;
  }
`;

const SocialLinks = styled.div`
  h2 {
    margin-bottom: 20px;
    font-size: 2em;
    color:#ffffff;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      display: inline;
      margin: 0 15px;

      a {
        text-decoration: none;
        color: #0073b1; /* LinkedIn color as default */
        font-size: 1.2em;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

const Icon = styled.span`
  margin-right: 10px;
`;

export default Contact;
