import React from 'react';
import MaterialTextField from '@mui/material/TextField';
import styled, { css } from 'styled-components';
import { Theme } from '@src/theme/theme';
import { ColorPallete, colorPalleteBy, materialVariantMapBy } from "./settings";

function textFieldTheme(theme: Theme, colorPallete: ColorPallete) {
  const pallete = colorPalleteBy(theme)[colorPallete];
  return css`
    /* Border */
    .MuiOutlinedInput-notchedOutline { /* border:default */
    }
    .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {  /* border:hover */
      border-color: ${pallete.borderColor};
    }
    .Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${pallete.borderColor}; /* border:focus */
    }
    /* ====== */

    /* Label */
    .MuiInputLabel-root.Mui-focused {
      color: ${pallete.labelColor}; 
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
