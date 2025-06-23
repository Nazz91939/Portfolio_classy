import React from 'react';
import styled from 'styled-components';

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  font-size: 1.5rem;
  vertical-align: middle;
`;

interface IconProps {
  emoji: string;
  label: string;
}

const Icon: React.FC<IconProps> = ({ emoji, label }) => (
  <IconWrapper role="img" aria-label={label}>
    {emoji}
  </IconWrapper>
);

export default Icon; 