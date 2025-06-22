import React from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(15vw, -10vh) scale(1.2); }
  50% { transform: translate(-10vw, 10vh) scale(0.9); }
  75% { transform: translate(10vw, 20vh) scale(1.3); }
  100% { transform: translate(0, 0) scale(1); }
`;

const BackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  overflow: hidden;
  background-color: #0a192f;
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.3;
  will-change: transform;
`;

const Blob1 = styled(Blob)`
  width: 450px;
  height: 450px;
  top: 10vh;
  left: 15vw;
  background: #64ffda;
  animation: ${move} 28s infinite alternate;
`;

const Blob2 = styled(Blob)`
  width: 550px;
  height: 550px;
  bottom: 10vh;
  right: 15vw;
  background: #ccd6f6;
  animation: ${move} 32s infinite alternate-reverse;
`;

const Blob3 = styled(Blob)`
  width: 350px;
  height: 350px;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #112240;
  animation: ${move} 24s infinite alternate;
`;

const GlassmorphismBackground: React.FC = () => {
  return (
    <BackgroundContainer>
      <Blob1 />
      <Blob2 />
      <Blob3 />
    </BackgroundContainer>
  );
};

export default GlassmorphismBackground; 