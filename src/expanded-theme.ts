/* eslint-disable */
import { Palette, PaletteColor } from '@mui/material/styles/createPalette';
/* eslint-enable */

declare module '@mui/material/styles/createPalette' {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}
