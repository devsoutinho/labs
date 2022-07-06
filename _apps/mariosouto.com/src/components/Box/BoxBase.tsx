import styled from 'styled-components';
import { ResponsiveProperty, StyleSheet } from '@src/theme/StyleSheet';


interface BoxBaseProps {
  children: React.ReactNode;
  styleSheet: StyleSheet;
  [key: string]: ResponsiveProperty<string | any> | string | any;
}
export const BoxBase = styled.div<BoxBaseProps>`
  ${({ styleSheet }) => {
    return styleSheet;
  }};
`;
