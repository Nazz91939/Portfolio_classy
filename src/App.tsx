import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import Skills from './components/Skills';
import Highlights from './components/Highlights';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import ElectricCursor from './components/ElectricCursor';
import FloatingLines from './components/FloatingLines';

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

const AboutSection = styled(Section)`
  background: rgba(17, 34, 64, 0.75);
  border-radius: 4px;
  padding: 2rem;
  margin: 2rem 0;
`;

const ProjectsSection = styled(Section)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
`;

const ContactSection = styled(Section)`
  text-align: center;
  
  h2 {
    color: #ccd6f6;
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
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
    image: "https://via.placeholder.com/400x200",
    technologies: ["YOLOv5", "ESP32", "Raspberry Pi", "UDP", "Java", "Android Studio"],
    github: "https://github.com/yourusername/rov",
    live: ""
  },
  {
    title: "Cyberpunk Portfolio Website",
    description: "A futuristic-themed React website with glowing animations, cursor effects, and stylish transitions.",
    image: "https://via.placeholder.com/400x200",
    technologies: ["ReactJS", "Framer Motion", "HTML/CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: ""
  },
  {
    title: "Restaurant Inventory Management System",
    description: "A desktop app built with Java Swing and MySQL following MVC principles. Manages orders, stock levels, and reporting.",
    image: "https://via.placeholder.com/400x200",
    technologies: ["Java", "JDBC", "MySQL", "NetBeans"],
    github: "https://github.com/yourusername/inventory-system",
    live: ""
  },
  {
    title: "Mobile App for ROV Control",
    description: "Java-based Android app that streams live detection video from Flask server, displays object history, and controls drone movements.",
    image: "https://via.placeholder.com/400x200",
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
      <ElectricCursor />
      <AnimatedBackground />
      <FloatingLines />
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
          <h1>Hi, I'm [Your Name]</h1>
          <h2>Full Stack Developer</h2>
          <p>I build exceptional digital experiences.</p>
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

        <ProjectsSection
          id="projects"
          ref={projectsRef}
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2>My Projects</h2>
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </ProjectsGrid>
        </ProjectsSection>

        <ContactForm />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}

export default App;
