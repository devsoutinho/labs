import { Breakpoints } from './breakpoints/breakpoints';

export type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  backgroundColor?: ResponsiveProperty<string> | string;

  // Extras
  hover?: StyleSheet;
  focus?: StyleSheet;
  modeDark?: StyleSheet;
  [key: string]: ResponsiveProperty<string | any> | string | any;
}
