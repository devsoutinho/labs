import { Theme } from '@src/theme/theme';

export const materialVariantMapBy = {
  outlined: 'outlined',
  filled: 'filled',
  standard: 'standard',
} as const;


export type ColorPallete = 'primary' | 'accent' | 'warning' | 'positive' | 'negative' | 'light' | 'dark';

interface TextFieldCustomRules {
  borderColor?: string;
  labelColor?: string;
}
export function colorPalleteBy(theme: Theme): Record<ColorPallete, TextFieldCustomRules> {
  return {
    primary: {
      labelColor: theme.colors.primary.x500,
      borderColor: theme.colors.primary.x500,
    },
    accent: {
      labelColor: theme.colors.accent.x500,
      borderColor: theme.colors.accent.x500,
    },
    warning: {
      labelColor: theme.colors.warning.x500,
      borderColor: theme.colors.warning.x500,
    },
    positive: {
      labelColor: theme.colors.positive.x500,
      borderColor: theme.colors.positive.x500,
    },
    negative: {
      labelColor: theme.colors.negative.x500,
      borderColor: theme.colors.negative.x500,
    },
    light: {
      labelColor: theme.colors.neutral.x500,
      borderColor: theme.colors.neutral.x500,
    },
    dark: {
      labelColor: theme.colors.neutral.x500,
      borderColor: theme.colors.neutral.x500,
    },
  }
}
