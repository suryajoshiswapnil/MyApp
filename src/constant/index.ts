/**
 * These constants should not be directly used in the app, you can access it
 * through app config object.
 */
export { default as colors } from './color';
export { default as device } from './device';
export { default as typography } from './typography';

import { ColorType as CT } from './color';
export type ColorType = CT;

import { TypographyType as TT } from './typography';
export type TypographyType = TT;

export interface ThemeType {
  mode: 'light' | 'dark';
  colors: ColorType;
  typography?: TypographyType;
}
