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

const SkillsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const SkillBadge = styled(motion.div)`
  background: #0a192f;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  color: #ccd6f6;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
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