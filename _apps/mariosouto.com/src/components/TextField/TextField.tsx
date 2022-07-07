import React from 'react';
import MaterialTextField from '@mui/material/TextField';
import styled, { css } from 'styled-components';
import { Theme } from '@src/theme/theme';
import { ColorPallete, materialVariantMapBy } from "./settings";

function textFieldTheme(theme: Theme, colorPallete: ColorPallete) {
  return css`
    /* Border */
    .MuiOutlinedInput-notchedOutline { /* border:default */
      border-color: ${theme.colors.accent.x500};
    }
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {  /* border:hover */
      border-color: ${theme.colors.primary.x900};
    }
    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${theme.colors.accent.x500}; /* border:focus */
    }
    /* ====== */

    /* Label */
    .MuiInputLabel-root.Mui-focused {
      color: ${theme.colors.accent.x500}; 
    }
    /* ====== */
  `;
}

const StyledTextField = styled(MaterialTextField)<any>`
  ${({ theme, colorPallete }) => textFieldTheme(theme, colorPallete)}
`;


interface TextFieldProps {
  id?: string;
  label: string;
  colorPallete?: ColorPallete;
  variant?: 'outlined' | 'filled' | 'standard';
}
export default function TextField({ variant, colorPallete, ...props }: TextFieldProps) {
  return (
    <StyledTextField
      variant={materialVariantMapBy[variant]}
      colorPallete={colorPallete}
      {...props}
    />
  );
}

TextField.defaultProps = {
  colorPallete: 'primary',
};
