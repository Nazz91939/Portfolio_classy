import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const CompanionContainer = styled(motion.div)`
  position: fixed;
  font-size: 2rem;
  pointer-events: none;
  z-index: 10000;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 8px rgba(100, 255, 218, 0.7);
  color: #64ffda;
`;

const faces = {
  idle: '(^.^)b',
  curious: '(¬_¬)',
  alert: '(o_o)',
  surprised: '(O_O)',
  stressed: '(>_<)',
};

const CursorCompanion: React.FC = () => {
  const [face, setFace] = useState(faces.idle);
  const [isHovering, setIsHovering] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);
  const lastScrollY = useRef(0);
  const hoverTargetRect = useRef<DOMRect | null>(null);
  const controls = useAnimation();

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY);
      const interactiveEl = el?.closest('[data-hover-interactive]');
      if (interactiveEl) {
        setIsHovering(true);
        hoverTargetRect.current = interactiveEl.getBoundingClientRect();
      } else {
        setIsHovering(false);
      }
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const speed = Math.abs(currentScrollY - lastScrollY.current);

      let newFace = '';
      if (speed > 50) newFace = faces.stressed;
      else if (speed > 30) newFace = faces.surprised;
      else if (speed > 15) newFace = faces.alert;
      
      if (newFace) setFace(newFace);

      lastScrollY.current = currentScrollY;

      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      scrollTimeout.current = setTimeout(() => {
        setFace(isHovering ? faces.curious : faces.idle);
      }, 200);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [isHovering]);

  useEffect(() => {
    const moveCompanion = () => {
      if (isHovering && hoverTargetRect.current) {
        const rect = hoverTargetRect.current;
        controls.start({
          x: rect.right - 40,
          y: rect.top + rect.height / 2,
          transition: { type: 'spring', stiffness: 100, damping: 15, mass: 0.8 },
        });
      } else {
        controls.start({
          x: Math.random() * (window.innerWidth - 100) + 50,
          y: Math.random() * (window.innerHeight - 100) + 50,
          transition: { type: 'spring', stiffness: 5, damping: 10, mass: 2 },
        });
      }
    };
    moveCompanion();
    const interval = setInterval(moveCompanion, 7000);
    return () => clearInterval(interval);
  }, [controls, isHovering]);
  
  useEffect(() => {
    const scrollFaces = [faces.stressed, faces.surprised, faces.alert];
    if (!scrollFaces.includes(face)) {
      setFace(isHovering ? faces.curious : faces.idle);
    }
  }, [isHovering, face]);

  return (
    <CompanionContainer animate={controls}>
      {face}
    </CompanionContainer>
  );
};

export default CursorCompanion; 