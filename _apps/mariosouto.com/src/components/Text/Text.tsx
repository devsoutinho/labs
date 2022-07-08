import { StyleSheet } from '@src/theme/StyleSheet';
import React from 'react';
import styled from 'styled-components';
import { renderCSS } from '../Box/renderCSS/renderCSS';

const StyledText = styled.span<TextProps>`
  ${({ styleSheet, theme, uniqueId }) => renderCSS(styleSheet, theme, uniqueId)};
`;

interface TextProps {
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label';
  children: React.ReactNode;
  styleSheet?: StyleSheet;
  uniqueId?: string;
}
export default function Text({ tag, ...props }: TextProps) {
  const id = React.useId().replaceAll(':', '');

  return (
    <StyledText as={tag} uniqueId={id} className={id} {...props} />
  );
}

Text.defaultProps = {
  tag: 'span',
}
