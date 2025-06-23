import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

const Section = styled.section`
  background: #112240;
  border-radius: 4px;
  padding: 2rem;
  margin: 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    margin: 1rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const Title = styled.h2`
  color: #64ffda;
  margin-bottom: 2rem;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 400px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    gap: 1rem;
  }
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: none;
  background: #0a192f;
  color: #ccd6f6;
  font-size: 1rem;

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.7rem;
    font-size: 0.9rem;
  }

  &::placeholder {
    color: #8892b0;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border-radius: 4px;
  border: none;
  background: #0a192f;
  color: #ccd6f6;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;

  @media (max-width: 768px) {
    padding: 0.6rem 0.8rem;
    font-size: 0.95rem;
    min-height: 100px;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 0.7rem;
    font-size: 0.9rem;
    min-height: 80px;
  }

  &::placeholder {
    color: #8892b0;
  }
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

  @media (max-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    background: rgba(100, 255, 218, 0.1);
  }
`;

const Message = styled.p`
  margin-top: 1rem;
  font-size: 1rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const SuccessMessage = styled(Message)`
  color: #64ffda;
`;

const ErrorMessage = styled(Message)`
  color: #ff6b6b;
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSubmitted(false);

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setError('EmailJS is not configured. Please check your environment variables.');
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      }, (err) => {
        console.error('FAILED...', err);
        setError(`Failed to send message. Error: ${err.text || 'Please try again later.'}`);
      });
  };

  return (
    <Section id="contact">
      <Title>Get In Touch</Title>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></TextArea>
        <Button type="submit">Send Message</Button>
      </Form>
      {submitted && <SuccessMessage>Thank you for your message!</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Section>
  );
};

export default ContactForm; 