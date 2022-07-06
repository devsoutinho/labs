import React from 'react';
import { StyleSheet } from '@src/theme/StyleSheet';
import { BoxBase } from './BoxBase';


interface BoxProps {
  styleSheet: StyleSheet;
  children: React.ReactNode;
}
export default function Box({ children, ...props }: BoxProps) {
  return (
    <BoxBase {...props}>
      {children}
    </BoxBase>
  );
}
