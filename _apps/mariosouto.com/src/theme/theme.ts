import { breakpoints } from './breakpoints/breakpoints'; 
import { colors } from './colors/colors'; 
import { space } from './space/space'; 

const theme = {
  breakpoints,
  colors,
  space,
}

export type Theme = typeof theme;

export default theme;
