import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section`
  background: #112240;
  border-radius: 4px;
  padding: 2rem;
  margin: 2rem 0;

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

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.8rem;
  }

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

const SkillBadge = styled(motion.div)`
  background: #0a192f;
  border: 1px solid #233554;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #ccd6f6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.85rem;
  }

  @media (max-width: 480px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(100, 255, 218, 0.3);
    border-color: rgba(100, 255, 218, 0.5);
    color: #64ffda;

    @media (max-width: 768px) {
      transform: translateY(-2px);
    }
  }
`;

const skills: string[] = [
  'ReactJS', 'Java', 'Python', 'YOLOv5', 'JavaScript', 'MySQL', 'JDBC', 
  'Flask', 'HTML/CSS', 'Java Swing', 'ESP32', 'Raspberry Pi', 
  'NetBeans', 'Android Studio', 'Git', 'FFmpeg', 'RTSP', 'UDP'
];

const Skills: React.FC = () => (
  <Section id="skills">
    <Title>Skills</Title>
    <SkillsGrid>
      {skills.map((skill, idx) => (
        <SkillBadge
          key={skill}
          data-hover-interactive
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.05 }}
        >
          {skill}
        </SkillBadge>
      ))}
    </SkillsGrid>
  </Section>
);

export default Skills; 