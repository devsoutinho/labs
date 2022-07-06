import styled from 'styled-components';
import { ResponsiveProperty, StyleSheet } from '@src/theme/StyleSheet';
import { renderCSS } from './renderCSS/renderCSS';


interface BoxBaseProps {
  children: React.ReactNode;
  styleSheet: StyleSheet;
  [key: string]: ResponsiveProperty<string | any> | string | any;
}
export const BoxBase = styled.div<BoxBaseProps>`
  display: flex;
  ${({ styleSheet, theme }) => renderCSS(styleSheet, theme)};
`;
