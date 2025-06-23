import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 1rem 2rem;
  background: rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.a)`
  color: #64ffda;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled(motion.a)`
  color: #ccd6f6;
  text-decoration: none;
  font-size: 0.9rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #64ffda;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }

  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
    font-size: 2rem;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #64ffda;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #0a192f;
  padding: 2rem;
  z-index: 99;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    ${NavLink} {
      font-size: 2rem;
      font-weight: 600;
    }
  }
`;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0 }
  };

  const mobileMenuVariants = {
    closed: { x: '100%' },
    open: { x: 0 }
  };

  return (
    <>
      <Nav
        as={motion.nav}
        initial="hidden"
        animate="visible"
        variants={navVariants}
        transition={{ duration: 0.5 }}
      >
        <NavContainer>
          <Logo href="#home">Portfolio</Logo>
          <NavLinks>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </NavLinks>
          <MobileMenuButton onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? '✕' : '☰'}
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <MobileMenu
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            transition={{ duration: 0.3 }}
          >
            <NavLink href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </NavLink>
            <NavLink href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </NavLink>
            <NavLink href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </NavLink>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 