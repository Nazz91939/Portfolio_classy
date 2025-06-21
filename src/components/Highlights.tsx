import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: #112240;
  border-radius: 4px;
  padding: 2rem;
  margin: 2rem 0;
`;

const Title = styled.h2`
  color: #64ffda;
  margin-bottom: 2rem;
`;

const HighlightsList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const HighlightItem = styled(motion.li)`
  color: #8892b0;
  margin-bottom: 1rem;
  padding-left: 2rem;
  position: relative;
  transition: all 0.3s ease;
  
  &:before {
    content: '»';
    position: absolute;
    left: 0;
    color: #64ffda;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #ccd6f6;
    
    &:before {
      transform: translateX(5px);
      color: #fff;
    }
  }
`;

const highlights: string[] = [
  'Built an AI-enhanced ROV system with real-time detection and mobile app control',
  'Designed and deployed animated ReactJS websites',
  'Created Java desktop applications using MVC and MySQL',
  'Managed branding and content for business Instagram pages',
  'Fluent in Lebanese Arabic with a strong eye for UI/UX',
];

const Highlights: React.FC = () => (
  <Section id="highlights">
    <Title>Highlights</Title>
    <HighlightsList>
      {highlights.map((highlight, idx) => (
        <HighlightItem
          key={idx}
          data-hover-interactive
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
        >
          {highlight}
        </HighlightItem>
      ))}
    </HighlightsList>
  </Section>
);

export default Highlights; 