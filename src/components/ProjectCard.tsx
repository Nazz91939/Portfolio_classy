import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: #112240;
  border-radius: 4px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background: #1d3461;
  border-radius: 4px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #8892b0;
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tech = styled.span`
  color: #64ffda;
  font-size: 0.8rem;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
`;

const Links = styled.div`
  display: flex;
  gap: 1rem;
`;

const Link = styled.a`
  color: #ccd6f6;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #64ffda;
  }
`;

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  github,
  live,
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ProjectImage>
        <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </ProjectImage>
      <ProjectTitle>{title}</ProjectTitle>
      <ProjectDescription>{description}</ProjectDescription>
      <TechStack>
        {technologies.map((tech, index) => (
          <Tech key={index}>{tech}</Tech>
        ))}
      </TechStack>
      <Links>
        <Link href={github} target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        <Link href={live} target="_blank" rel="noopener noreferrer">
          Live Demo
        </Link>
      </Links>
    </Card>
  );
};

export default ProjectCard; 