import React from 'react';
import styled from 'styled-components';

const StyledText = styled.span`
`;

interface TextProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
}
export default function Text({ tag, ...props }: TextProps) {
  return (
    <StyledText as={tag} {...props} />
  );
}

Text.defaultProps = {
  tag: 'span',
}
