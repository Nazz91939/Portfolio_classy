import React from 'react';
import styled from 'styled-components';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0a192f;
  color: #8892b0;
  text-align: center;
  padding: 2rem 0 1rem 0;
  margin-top: 3rem;

  @media (max-width: 768px) {
    padding: 1.5rem 0 0.8rem 0;
    margin-top: 2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 0 0.5rem 0;
    margin-top: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 0.6rem;
  }
`;

const SocialIcon = styled.a`
  color: #64ffda;
  font-size: 1.5rem;
  transition: color 0.3s;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }

  &:hover {
    color: #ccd6f6;
  }
`;

const Copyright = styled.div`
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const socialLinks = [
  { href: 'https://www.instagram.com/naz_falou/?hl=en', icon: FaInstagram },
  { href: 'https://www.linkedin.com/in/nazih-falou-a1a20731a/', icon: FaLinkedin },
];

const Footer: React.FC = () => (
  <FooterContainer>
    <SocialLinks>
      {socialLinks.map(({ href, icon }, idx) => (
        <SocialIcon key={idx} href={href} target="_blank" rel="noopener noreferrer">
          {React.createElement(icon)}
        </SocialIcon>
      ))}
    </SocialLinks>
    <Copyright>
      &copy; {new Date().getFullYear()} Your Name. All rights reserved.
    </Copyright>
  </FooterContainer>
);

export default Footer; 