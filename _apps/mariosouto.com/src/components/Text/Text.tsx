import { StyleSheet } from '@src/theme/StyleSheet';
import React from 'react';
import styled from 'styled-components';
import { BoxBase } from '../Box/BoxBase';

const StyledText = styled(BoxBase)`
`;

interface TextProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: React.ReactNode;
  styleSheet?: StyleSheet;
}
export default function Text({ tag, ...props }: TextProps) {
  return (
    <StyledText as={tag} {...props} />
  );
}

Text.defaultProps = {
  tag: 'span',
}