// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection id="contact">
      <div className="container">
        <h2>Contact</h2>
        <ContactForm action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
          <Input>
          +251940223403 acceptedamanuel@gmail.com Addis Ababa Ethiopia
          </Input>
        </ContactForm>
      </div>
    </ContactSection>
  );
};

const ContactSection = styled.section`
  background: ${({ theme }) => theme.colors.background};
  text-align: center;

  h2 {
    font-size: 36px;
    margin-bottom: 20px;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.label`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Textarea = styled.textarea`
  margin-bottom: 20px;
  padding: 10px;
  width: 100%;
  max-width: 500px;
  height: 150px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
  }
`;
export default Contact;