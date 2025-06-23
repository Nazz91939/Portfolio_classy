import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const phrases = [
  'npm install @cyberpunk/skills --save',
  'git commit -m "feat: Implement neural interface"',
  './run_simulation --matrix-overdrive',
  'SELECT * FROM reality WHERE perception = "illusion";',
  'compiling consciousness.exe...',
  'defragmenting reality_construct.dll',
  'ACCESS GRANTED: Mainframe unlocked.',
  'sudo rm -rf /society/old_world_order',
];

const blink = keyframes`
  50% { opacity: 0; }
`;

const TerminalContainer = styled.div`
  background: 
    repeating-linear-gradient(
      0deg,
      rgba(100, 255, 218, 0.1),
      rgba(100, 255, 218, 0.1) 1px,
      transparent 1px,
      transparent 4px
    ),
    rgba(10, 25, 47, 0.85);
  backdrop-filter: blur(6px) saturate(180%);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: 6px;
  padding: 2.5rem 1.5rem 1.5rem;
  margin: 3rem auto;
  max-width: 700px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.6);
  font-family: 'Fira Code', 'Courier New', monospace;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    background: rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid rgba(100, 255, 218, 0.2);
  }

  &::after {
    content: '○ ○ ○';
    position: absolute;
    top: 6px;
    left: 12px;
    color: rgba(255, 255, 255, 0.3);
    font-size: 1rem;
    letter-spacing: 6px;
    text-shadow: none;
  }
`;

const TerminalLine = styled.div`
  color: #64ffda;
  font-size: 1rem;
  text-shadow: 0 0 5px rgba(100, 255, 218, 0.7);
  white-space: pre-wrap;
  word-break: break-all;
  min-height: 1.2em;
  
  &::before {
    content: '> ';
    color: #64ffda;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  background: #64ffda;
  width: 10px;
  height: 1.2em;
  margin-left: 6px;
  animation: ${blink} 1s step-end infinite;
  box-shadow: 0 0 8px rgba(100, 255, 218, 0.7);
  vertical-align: middle;
  border-radius: 1px;
`;

const AnimatedTerminal: React.FC = () => {
  const [lines, setLines] = useState<string[]>(['']);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    // If all phrases have been typed, pause and then reset.
    if (phraseIndex >= phrases.length) {
      const resetTimeout = setTimeout(() => {
        setLines(['']);
        setPhraseIndex(0);
      }, 3000); // Wait 3 seconds before resetting
      return () => clearTimeout(resetTimeout);
    }

    const currentPhrase = phrases[phraseIndex];
    const currentLineIndex = lines.length - 1;
    const currentLineText = lines[currentLineIndex];

    // If the current line is fully typed, pause and move to the next.
    if (currentLineText.length === currentPhrase.length) {
      const newLineTimeout = setTimeout(() => {
        setLines(prev => [...prev, '']);
        setPhraseIndex(prev => prev + 1);
      }, 1500); // Pause 1.5 seconds between lines
      return () => clearTimeout(newLineTimeout);
    }

    // Otherwise, type the next character of the current phrase.
    const typingTimeout = setTimeout(() => {
      setLines(prevLines => {
        const newLines = [...prevLines];
        newLines[currentLineIndex] = currentPhrase.slice(0, currentLineText.length + 1);
        return newLines;
      });
    }, 60); // Typing speed

    return () => clearTimeout(typingTimeout);
  }, [lines, phraseIndex]);

  return (
    <TerminalContainer>
      {lines.map((line, index) => (
        <TerminalLine key={index}>
          {line}
          {index === lines.length - 1 && <Cursor />}
        </TerminalLine>
      ))}
    </TerminalContainer>
  );
};

export default AnimatedTerminal; 