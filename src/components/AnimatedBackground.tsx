import React from 'react';
import styled, { keyframes } from 'styled-components';

const moveGradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const AnimatedGradient = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: linear-gradient(-45deg, #0a192f, #112240, #0a192f, #174042);
  background-size: 400% 400%;
  animation: ${moveGradient} 20s ease infinite;
`;

const AnimatedBackground: React.FC = () => {
  return <AnimatedGradient />;
};

export default AnimatedBackground; 