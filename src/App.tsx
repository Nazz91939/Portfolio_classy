// Triggering re-deployment to refresh secrets
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
import AnimatedTerminal from './components/AnimatedTerminal';
import Icon from './components/Icon';

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

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const Section = styled(motion.section)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 100px 0;

  @media (max-width: 768px) {
    padding: 80px 0;
    min-height: auto;
  }

  @media (max-width: 480px) {
    padding: 60px 0;
  }
`;

const HeroSection = styled(Section)`
  h1 {
    color: #ccd6f6;
    font-size: 4rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 480px) {
      font-size: 2rem;
    }
  }
  
  h2 {
    color: #64ffda;
    font-size: 2rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1.25rem;
    }
  }

  p {
    @media (max-width: 768px) {
      font-size: 1rem;
    }
  }
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1.5rem;
  }
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

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 480px) {
    width: 250px;
    height: 250px;
  }
`;

const AboutSection = styled(Section)`
  background: rgba(17, 34, 64, 0.75);
  backdrop-filter: blur(10px);
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

  h2 {
    color: #ccd6f6;
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }

  h3 {
    color: #ccd6f6;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 2.5rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;

    @media (max-width: 768px) {
      font-size: 1.25rem;
      margin-top: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.1rem;
      margin-top: 1.5rem;
    }
  }

  p {
    max-width: 800px;
    color: #8892b0;
    line-height: 1.7;

    @media (max-width: 768px) {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;

const ProjectsSection = styled(Section)`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 100px 0;

  @media (max-width: 768px) {
    gap: 3rem;
    padding: 60px 0;
  }

  @media (max-width: 480px) {
    gap: 2rem;
    padding: 40px 0;
  }

  h2 {
    text-align: center;
    color: #ccd6f6;
    font-size: 2.5rem;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
  }
`;

const ProjectEntry = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  &:nth-of-type(even) {
    .project-content {
      grid-column: 1 / 7;
      text-align: left;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
        text-align: center;
      }
    }
    .project-image {
      grid-column: 7 / -1;

      @media (max-width: 768px) {
        grid-column: 1 / -1;
      }
    }
    .tech-stack {
      justify-content: flex-start;

      @media (max-width: 768px) {
        justify-content: center;
      }
    }
  }
`;

const ProjectContent = styled.div`
  grid-column: 7 / -1;
  grid-row: 1 / -1;
  text-align: right;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: auto;
    text-align: center;
  }
`;

const ProjectTitle = styled.h3`
  color: #ccd6f6;
  font-size: 1.75rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const ProjectDescription = styled.div`
  background: rgba(17, 34, 64, 0.85);
  backdrop-filter: blur(10px);
  padding: 1.5rem;
  border-radius: 4px;
  color: #8892b0;
  box-shadow: 0 10px 30px -15px rgba(0,0,0,0.7);
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  p {
    @media (max-width: 768px) {
      font-size: 0.9rem;
      line-height: 1.5;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0.4rem;
  }
`;

const Tech = styled.span`
  color: #64ffda;
  font-size: 0.8rem;
  background: rgba(100, 255, 218, 0.1);
  padding: 0.25rem 0.75rem;
  border-radius: 15px;

  @media (max-width: 480px) {
    font-size: 0.7rem;
    padding: 0.2rem 0.6rem;
  }
`;

const ProjectImageContainer = styled.div`
  grid-column: 1 / 7;
  grid-row: 1 / -1;
  position: relative;
  border: 2px solid #64ffda;
  border-radius: 6px;
  box-shadow: 0 0 20px rgba(100, 255, 218, 0.15);

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: auto;
  }
  
  img {
    width: 100%;
    border-radius: 4px;
    display: block;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0 30px rgba(100, 255, 218, 0.3);

      @media (max-width: 768px) {
        transform: none;
      }
    }
  }
`;

const ProjectLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: block;
`;

const ContactSection = styled(Section)`
  text-align: center;
  
  h2 {
    color: #ccd6f6;
    font-size: 2.5rem;
    margin-bottom: 2rem;

    @media (max-width: 768px) {
      font-size: 2rem;
    }

    @media (max-width: 480px) {
      font-size: 1.75rem;
    }
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
    live: "https://mintandjadecoffeeshop.github.io/MintAndJade/"
  },
  {
    title: "PastaWnos - Pasta Restaurant Menu",
    description: "A vibrant and appetizing menu website for 'PastaWnos', a specialty pasta restaurant. Designed to be easy to navigate and visually appealing.",
    image: PastaWnosWeb,
    technologies: ["ReactJS", "CSS", "HTML"],
    github: "https://github.com/yourusername/pastawnos",
    live: "https://nazz91939.github.io/PastaWNos/"
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

          <h3>
            <Icon emoji="🧠" label="Brain" /> Technical + AI-Driven
          </h3>
          <p>
            I'm a Computer and Communication Engineering graduate with a passion for building intelligent systems that merge hardware and software seamlessly. Over time, I've grown skilled at using AI—not just as a tool, but as a core collaborator in my development process. From streamlining code generation to enhancing real-time object detection on embedded devices, I harness AI to accelerate workflows, reduce friction, and bring ambitious ideas to life faster and smarter.
          </p>

          <h3>
            <Icon emoji="🎨" label="Paint Palette" /> Creative + AI-Augmented Thinking
          </h3>
          <p>
            I see AI as a creative partner—one that helps me prototype faster, design more intuitively, and push the boundaries of what's possible. Whether I'm automating repetitive tasks, optimizing user experiences with machine learning, or ideating new features through prompt engineering, I'm constantly finding ways to use AI to amplify both productivity and imagination. It's not just about building faster—it's about building better, with purpose and innovation at the core.
          </p>
          <AnimatedTerminal />
        </AboutSection>
        
        <Skills />
        <Highlights />

        <ProjectsSection id="projects">
          <h2>My Projects</h2>
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
                {project.live ? (
                  <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.title} />
                  </ProjectLink>
                ) : (
                  <img src={project.image} alt={project.title} />
                )}
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
