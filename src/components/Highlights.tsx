import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: rgba(17, 34, 64, 0.75);
  border: 1px solid #64ffda;
  box-shadow: 0 0 15px rgba(100, 255, 218, 0.1);
  border-radius: 4px;
  padding: 2rem;
  margin: 2rem 0;
  backdrop-filter: blur(10px);
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
  color: #ccd6f6;
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  position: relative;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);

  &:hover {
    color: #64ffda;
    transform: translateX(10px);
  }

  &:before {
    content: '»';
    position: absolute;
    left: 0;
    color: #64ffda;
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