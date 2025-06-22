import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Highlights from './components/Highlights';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import GlassmorphismBackground from './components/GlassmorphismBackground';
import ElectricCursor from './components/ElectricCursor';
import FloatingLines from './components/FloatingLines';
import CursorCompanion from './components/CursorCompanion';

import Nazz from './images/Nazz.jpg';
import ROVpic from './images/ROVpic.jpg';
import MintAndJadeWeb from './images/Mint&JadeWeb.jpg';
import PastaWnosWeb from './images/PastaWnosWeb.jpg';
import MobileApp from './images/MobileApp.jpg';

// Styled Components
const AppContainer = styled.div`
  background: transparent;
  color: #8892b0;
  min-height: 100vh;
  font-family: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;
  position: relative;
  z-index: 0;
`;

const MainContent = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 2;
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0;
`;

const HeroSection = styled(Section)`
  h1 {
    color: #ccd6f6;
    font-size: 4rem;
    margin-bottom: 1rem;
  }
  
  h2 {
    color: #64ffda;
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const HeroText = styled.div``;

const pulse = keyframes`
  0% {
    filter: drop-shadow(0 0 4px rgba(100, 255, 218, 0.5));
  }
  50% {
    filter: drop-shadow(0 0 15px rgba(100, 255, 218, 0.9));
  }
  100% {
    filter: drop-shadow(0 0 4px rgba(100, 255, 218, 0.5));
  }
`;

const ProfileImage = styled.img`
  width: 455px;
  height: 455px;
  object-fit: cover;
  object-position: 50% 20%;
  border: 3px solid #64ffda;
  border-radius: 4px;
  box-shadow: 0 0 25px rgba(100, 255, 218, 0.3);
`;

const AboutSection = styled(Section)`
  background: rgba(17, 34, 64, 0.75);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  padding: 2rem;
  margin: 2rem 0;
`;

const ProjectsSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 100px 0;
`;

const ProjectEntry = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  gap: 10px;

  &:nth-of-type(even) {
    .project-content {
      grid-column: 1 / 7;
      text-align: left;
    }
    .project-image {
      grid-column: 7 / -1;
    }
    .tech-stack {
      justify-content: flex-start;
    }
  }
`;

const ProjectContent = styled.div`
  grid-column: 7 / -1;
  grid-row: 1 / -1;
  text-align: right;
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.75rem;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.div`
  background: rgba(17, 34, 64, 0.85);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 4px;
  color: #8892b0;
  box-shadow: 0 10px 30px -15px rgba(0,0,0,0.7);
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
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

const ProjectImageContainer = styled.div`
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  position: relative;
  border: 2px solid #64ffda;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.15);
  
  img {
    width: 100%;
    border-radius: 4px;
    display: block;
  }
`;

const ContactSection = styled(Section)`
  text-align: center;
  
  h2 {
    color: #ccd6f6;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const projects = [
  {
    title: "AI-Powered ROV (Remote Operated Vehicle)",
    description: "Built a low-latency aquatic drone with YOLOv5 object detection, ESP32 motor control, and Raspberry Pi-powered video relay. Live video streaming and control are handled through a custom Android app.",
    image: ROVpic,
    technologies: ["YOLOv5", "ESP32", "Raspberry Pi", "UDP", "Java", "Android Studio"],
    github: "https://github.com/yourusername/rov",
    live: ""
  },
  {
    title: "Mint & Jade - Coffee Shop Menu",
    description: "A stylish and modern menu website for a local coffee shop, 'Mint & Jade'. Features an interactive and user-friendly interface.",
    image: MintAndJadeWeb,
    technologies: ["ReactJS", "Styled-Components", "HTML/CSS"],
    github: "https://github.com/yourusername/mintandjade",
    live: ""
  },
  {
    title: "PastaWnos - Pasta Restaurant Menu",
    description: "A vibrant and appetizing menu website for 'PastaWnos', a specialty pasta restaurant. Designed to be easy to navigate and visually appealing.",
    image: PastaWnosWeb,
    technologies: ["ReactJS", "CSS", "HTML"],
    github: "https://github.com/yourusername/pastawnos",
    live: ""
  },
  {
    title: "Mobile App for ROV Control",
    description: "Java-based Android app that streams live detection video from Flask server, displays object history, and controls drone movements.",
    image: MobileApp,
    technologies: ["Java", "Flask", "UDP", "Android Studio"],
    github: "https://github.com/yourusername/rov-app",
    live: ""
  }
];

function App() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [projectsRef, projectsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [contactRef, contactInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <AppContainer>
      <GlassmorphismBackground />
      <CursorCompanion />
      <ElectricCursor />
      <Navbar />
      <MainContent>
        <HeroSection
          id="home"
          ref={heroRef}
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <HeroContent>
            <HeroText>
              <h1>Hi, I'm Nazih Falou</h1>
              <h2>Computer Engineer</h2>
              <p>I build exceptional digital experiences.</p>
            </HeroText>
            <ProfileImage src={Nazz} alt="Nazih Falou" />
          </HeroContent>
        </HeroSection>

        <AboutSection
          id="about"
          ref={aboutRef}
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>
            I'm a Computer and Communication Engineering graduate with a passion for blending real-world hardware systems with intelligent software solutions.
            I specialize in full-stack development, computer vision, and IoT integrations. From building AI-powered ROVs to crafting dynamic web and mobile apps, I combine engineering skill with creative design thinking.
            I love creating beautiful, functional, and user-friendly digital experiences.
          </p>
        </AboutSection>

        <Skills />
        <Highlights />

        <ProjectsSection id="projects">
          <h2 style={{ textAlign: 'center', color: '#ccd6f6', fontSize: '2.5rem', marginBottom: '1rem' }}>My Projects</h2>
          {projects.map((project, index) => (
            <ProjectEntry key={index}>
              <ProjectContent className="project-content">
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>
                  <p>{project.description}</p>
                </ProjectDescription>
                <TechStack className="tech-stack">
                  {project.technologies.map((tech) => (
                    <Tech key={tech}>{tech}</Tech>
                  ))}
                </TechStack>
              </ProjectContent>
              <ProjectImageContainer className="project-image">
                <img src={project.image} alt={project.title} />
              </ProjectImageContainer>
            </ProjectEntry>
          ))}
        </ProjectsSection>

        <ContactForm />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
