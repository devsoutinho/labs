import { StyleSheet } from '@src/theme/StyleSheet';
import { Theme } from '@src/theme/theme';

export function renderCSS(styleSheet: StyleSheet, theme: Theme) {
  const breakpoints = theme.breakpoints;
  console.log(breakpoints);
  return {
    ...styleSheet,
  };
}
