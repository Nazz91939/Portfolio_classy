import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: #112240;
  border-radius: 4px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;
`;

const Title = styled.h2`
  color: #64ffda;
  margin-bottom: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: none;
  background: #0a192f;
  color: #ccd6f6;
  font-size: 1rem;
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: none;
  background: #0a192f;
  color: #ccd6f6;
  font-size: 1rem;
  min-height: 120px;
`;

const Button = styled(motion.button)`
  background: transparent;
  border: 1px solid #64ffda;
  color: #64ffda;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  margin-top: 1rem;

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const ContactForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section id="contact">
      <Title>Contact Me</Title>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Your Name" required />
        <Input type="email" placeholder="Your Email" required />
        <Textarea placeholder="Your Message" required />
        <Button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </Button>
      </Form>
      {submitted && <p style={{ color: '#64ffda', marginTop: '1rem' }}>Thank you for your message!</p>}
    </Section>
  );
};

export default ContactForm; 