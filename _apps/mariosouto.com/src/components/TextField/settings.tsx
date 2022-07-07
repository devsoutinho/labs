import { Theme } from '@src/theme/theme';

export const materialVariantMapBy = {
  outlined: 'outlined',
  filled: 'filled',
  standard: 'standard',
} as const;


export type ColorPallete = 'primary' | 'accent' | 'warning' | 'positive' | 'negative' | 'light' | 'dark';

interface TextFieldCustomRules {
  backgroundColor?: string;
}
export function colorPalleteBy(theme: Theme): Record<ColorPallete, TextFieldCustomRules> {
  return {
    primary: {},
    accent: {},
    warning: {},
    positive: {},
    negative: {},
    light: {},
    dark: {},
  }
}
