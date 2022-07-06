import { breakpoints } from './breakpoints/breakpoints'; 
import { colors } from './colors/colors'; 

const theme = {
  breakpoints,
  colors,
}

export type Theme = typeof theme;

export default theme;
