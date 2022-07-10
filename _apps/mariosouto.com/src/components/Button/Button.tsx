import React from 'react';
import MaterialButton from '@mui/material/Button';
import styled, { css } from 'styled-components';
import { ColorPallete, colorPalleteBy, materialVariantMapBy } from './settings';
import { Theme } from '@src/theme/theme';

function buttonTheme(theme: Theme, colorPallete: ColorPallete) {
  const pallete = colorPalleteBy(theme)[colorPallete];
  return css`
    text-transform: none;
    background-color: ${pallete.backgroundColor};
    color: ${pallete.color};
    &:hover {
      background-color: ${pallete.hover.backgroundColor};
    }
    &:focus {
      background-color: ${pallete.focus.backgroundColor};
    }
  `;
}

const StyledButton = styled(MaterialButton)<any>`
  ${({ theme, colorPallete }) => buttonTheme(theme, colorPallete)}
`;


interface ButtonProps {
  colorPallete?: ColorPallete;
  variant?: 'contained' | 'outlined' | 'ghost';
  children: React.ReactNode;
}
export default function Button({ children, variant, colorPallete }: ButtonProps) {
  return (
    <StyledButton
      variant={materialVariantMapBy[variant]}
      colorPallete={colorPallete}
    >
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  colorPallete: 'primary',
};
