import { StyleSheet } from '@src/theme/StyleSheet';
import themeBase, { Theme } from '@src/theme/theme';

// Render Prop:
// - By Breakpoints
// - Horizontal
// - Vertical
function parseStyleSheetValue({styleSheetKey, mediaResultBy}) {
  const styleSheetProperty = styleSheetKey;
  return (acc, [mediaBase, valueBase]) => {
  
    const media = mediaResultBy[mediaBase];
    const value = valueBase;
    return {
      ...acc,
      [media]: {
        [styleSheetProperty]: value
      }
    }
  }
}

function parseStyleSheet({ mediaResultBy, stateResultBy }) {
  return (acc, [styleSheetKey, styleSheetValue]) => {
    if(stateResultBy[styleSheetKey]) {
      const state = stateResultBy[styleSheetKey];
      const styleSheet = styleSheetValue;
      const output = Object.entries(styleSheet).reduce(parseStyleSheet({ mediaResultBy, stateResultBy }), {});
      return {
        ...acc,
        [state]: output
      }
    }

    if(typeof styleSheetValue === 'string' || typeof styleSheetValue === 'number') {
      const key = styleSheetKey;
      const value = styleSheetValue
      return { ...acc, [key]: value };
    }
  
    if(typeof styleSheetValue === 'object') {
      return {
        ...acc,
        ...Object.entries(styleSheetValue).reduce(parseStyleSheetValue({styleSheetKey, mediaResultBy}), {}),
      }
    }
    
  
    return { ...acc }
  }
}

export function renderCSS(styleSheet: StyleSheet, theme: Theme = themeBase) {
  const breakpoints = theme.breakpoints;
  const mediaResultBy = {
    xs: `@media (min-width: ${breakpoints.xs}px)`,
    sm: `@media (min-width: ${breakpoints.sm}px)`,
    md: `@media (min-width: ${breakpoints.md}px)`,
    lg: `@media (min-width: ${breakpoints.lg}px)`,
    xl: `@media (min-width: ${breakpoints.xl}px)`,
  };

  const stateResultBy = {
    hover: `body &:hover`,
    focus: `body &:focus`,
    dark: `body.dark &`,
  };

  const output = Object.entries(styleSheet).reduce(parseStyleSheet({ mediaResultBy, stateResultBy }), {});
  console.log(output);
  return output;
  // {
    // ...styleSheet,
    // Dark Mode
    // 'body.dark &': {
    //   background: 'black',
    //   color: 'white'
    // },

    // Hover
    // 'body &:hover': {
    //   background: 'red',
    // },
    
    // Focus
    // 'body &:focus': {
    //   background: 'red',
    // },
    
    // Disabled
    // 'body &:disabled': {
    //   background: 'grey',
    // }
  // };
}
