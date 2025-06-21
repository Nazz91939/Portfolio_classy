import React, { useState, useEffect, useCallback, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0);
  }
`;

const Sparkle = styled.div.attrs<{ style: React.CSSProperties }>(({ style }) => ({
  style,
}))`
  position: fixed;
  pointer-events: none;
  width: 5px;
  height: 5px;
  background-color: #64ffda;
  box-shadow: 0 0 2px #64ffda, 0 0 5px #64ffda;
  animation: ${fadeOut} 0.5s forwards;
  z-index: 9999;
  transform: translate(-50%, -50%);
`;

interface Particle {
  id: number;
  x: number;
  y: number;
}

const ElectricCursor: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleId = useRef(0);
  const lastMoveTime = useRef(Date.now());

  const addParticle = useCallback((x: number, y: number) => {
    const id = particleId.current++;
    const newParticle = { id, x, y };
    setParticles((prev) => [...prev, newParticle]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => p.id !== id));
    }, 500);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (Date.now() - lastMoveTime.current > 30) {
        const x = e.clientX + (Math.random() - 0.5) * 20;
        const y = e.clientY + (Math.random() - 0.5) * 20;
        addParticle(x, y);
        lastMoveTime.current = Date.now();
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [addParticle]);

  return (
    <>
      {particles.map(({ id, x, y }) => (
        <Sparkle key={id} style={{ left: `${x}px`, top: `${y}px` }} />
      ))}
    </>
  );
};

export default ElectricCursor; 