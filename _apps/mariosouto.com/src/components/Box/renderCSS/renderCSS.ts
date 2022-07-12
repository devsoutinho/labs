import { StyleSheet } from '@src/theme/StyleSheet';
import themeBase, { Theme } from '@src/theme/theme';

function parseStyleSheetRule(property, value) {
  if(property.includes('Vertical')) {
    const propertyBase = property.replace('Vertical', '');
    return {
      [`${propertyBase}-top`]: value,
      [`${propertyBase}-bottom`]: value,
    }    
  }
  if(property.includes('Horizontal')) {
    const propertyBase = property.replace('Horizontal', '');
    return {
      [`${propertyBase}-left`]: value,
      [`${propertyBase}-right`]: value,
    }    
  }

  return {
    [property]: value,
  }
}

function parseStyleSheetValue({styleSheetKey, mediaResultBy}) {
  const styleSheetProperty = styleSheetKey;
  return (acc, [mediaBase, valueBase]) => {

    console.log(styleSheetKey);
  
    const media = mediaResultBy[mediaBase];
    const value = valueBase;
    return {
      ...acc,
      [media]: parseStyleSheetRule(styleSheetProperty, value),
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
      return { ...acc, ...parseStyleSheetRule(key, value) };
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

export function renderCSS(styleSheet: StyleSheet = {}, theme: Theme = themeBase, uniqueId: string = 'demo-id') {
  const breakpoints = theme.breakpoints;
  const mediaResultBy = {
    xs: `@media (min-width: ${breakpoints.xs}px)`,
    sm: `@media (min-width: ${breakpoints.sm}px)`,
    md: `@media (min-width: ${breakpoints.md}px)`,
    lg: `@media (min-width: ${breakpoints.lg}px)`,
    xl: `@media (min-width: ${breakpoints.xl}px)`,
  };

  const stateResultBy = {
    hover: `&:hover, body.dark &.${uniqueId}:hover`,
    focus: `&:focus, body.dark &.${uniqueId}:focus`,
    disabled: `&:disabled, body.dark &.${uniqueId}:disabled`,
    modeDark: `body.dark &.${uniqueId}`,
  };

  const output = Object.entries(styleSheet).reduce(parseStyleSheet({ mediaResultBy, stateResultBy }), {});
  return output;
}
