import { Theme } from '@src/theme/theme';

export const materialVariantMapBy = {
  contained: 'contained',
  outlined: 'outlined',
  ghost: 'text',
} as const;


export type ColorPallete = 'primary' | 'accent' | 'warning' | 'positive' | 'negative' | 'light' | 'dark';
interface ButtonCustomRules {
  backgroundColor?: string;
  color?: string;
  hover?: {
    backgroundColor?: string;
    color?: string;
  },
  focus?: {
    backgroundColor?: string;
    color?: string;
  },
}
export function colorPalleteBy(theme: Theme): Record<ColorPallete, ButtonCustomRules> {
  return {
    primary: {
      backgroundColor: theme.colors.primary.x500,
      color: theme.colors.neutral.x000,
      hover: {
        backgroundColor: theme.colors.primary.x400,
      },
      focus: {
        backgroundColor: theme.colors.primary.x600,
      }
    },
    accent: {
      backgroundColor: theme.colors.accent.x500,
      color: theme.colors.neutral.x000,
      hover: {
        backgroundColor: theme.colors.accent.x400,
      },
      focus: {
        backgroundColor: theme.colors.accent.x600,
      }
    },
    warning: {
      backgroundColor: theme.colors.primary.x500,
      color: theme.colors.neutral.x000,
      hover: {
        backgroundColor: theme.colors.primary.x400,
      },
      focus: {
        backgroundColor: theme.colors.primary.x600,
      }
    },
    positive: {
      backgroundColor: theme.colors.primary.x500,
      color: theme.colors.neutral.x000,
      hover: {
        backgroundColor: theme.colors.primary.x400,
      },
      focus: {
        backgroundColor: theme.colors.primary.x600,
      }
    },
    negative: {
      backgroundColor: theme.colors.primary.x500,
      color: theme.colors.neutral.x000,
      hover: {
        backgroundColor: theme.colors.primary.x400,
      },
      focus: {
        backgroundColor: theme.colors.primary.x600,
      }
    },
    light: {
      backgroundColor: theme.colors.primary.x500,
      color: theme.colors.neutral.x000,
      hover: {
        backgroundColor: theme.colors.primary.x400,
      },
      focus: {
        backgroundColor: theme.colors.primary.x600,
      }
    },
    dark: {
      backgroundColor: theme.colors.primary.x500,
      color: theme.colors.neutral.x000,
      hover: {
        backgroundColor: theme.colors.primary.x400,
      },
      focus: {
        backgroundColor: theme.colors.primary.x600,
      }
    },
  }
}
