import React from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { BoxBase } from './BoxBase';


interface BoxProps {
  tag?: 'main' | 'div' | 'article' | 'nav' | 'section';
  styleSheet?: StyleSheet;
  children?: React.ReactNode;
  tabIndex?: number;
}
export default function Box({ children, ...props }: BoxProps) {
  return (
    <BoxBase {...props}>
      {children}
    </BoxBase>
  );
}


Box.defaultProps = {
  styleSheet: {},
}
