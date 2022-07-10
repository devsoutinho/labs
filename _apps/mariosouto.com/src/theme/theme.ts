import { breakpoints } from './breakpoints/breakpoints'; 
import { colors } from './colors/colors'; 
import { space } from './space/space'; 
import { borderRadius } from './borderRadius/borderRadius';

const theme = {
  breakpoints,
  colors,
  space,
  borderRadius,
}

export type Theme = typeof theme;

export default theme;
