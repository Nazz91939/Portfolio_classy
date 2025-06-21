import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { transform: translateX(-150px); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateX(100vw); opacity: 0; }
`;

const Line = styled.div<{ top: string; duration: string; delay: string; width: string; }>`
  position: fixed;
  left: 0;
  top: ${({ top }) => top};
  height: 1px;
  width: ${({ width }) => width};
  background: #64ffda;
  box-shadow: 0 0 4px #64ffda;
  animation: ${move} ${({ duration }) => duration} linear ${({ delay }) => delay} infinite;
  z-index: 1;
`;

const FloatingLines: React.FC = () => {
  const lines = Array.from({ length: 8 }).map((_, i) => ({
    id: i.toString(),
    top: `${Math.random() * 100}%`,
    duration: `${Math.random() * 8 + 7}s`, // 7s to 15s
    delay: `${Math.random() * 10}s`,
    width: `${Math.random() * 100 + 50}px`, // 50px to 150px
  }));

  return (
    <div>
      {lines.map(line => (
        <Line key={line.id} {...line} />
      ))}
    </div>
  );
};

export default FloatingLines; 