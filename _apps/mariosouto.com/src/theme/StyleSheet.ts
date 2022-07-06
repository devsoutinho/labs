import { Breakpoints } from './breakpoints/breakpoints';

export type ResponsiveProperty<Type> = Partial<Record<Breakpoints, Type>>;

export interface StyleSheet {
  [key: string]: ResponsiveProperty<string | any> | string | any;
}
