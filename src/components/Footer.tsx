import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #0a192f;
  color: #8892b0;
  text-align: center;
  padding: 2rem 0 1rem 0;
  margin-top: 3rem;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const SocialIcon = styled.a`
  color: #64ffda;
  font-size: 1.5rem;
  transition: color 0.3s;
  &:hover {
    color: #ccd6f6;
  }
`;

const Copyright = styled.div`
  font-size: 0.95rem;
`;

const socialLinks = [
  { href: '#', icon: FaGithub },
  { href: '#', icon: FaLinkedin },
  { href: '#', icon: FaTwitter },
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