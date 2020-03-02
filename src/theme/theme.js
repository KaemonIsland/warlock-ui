import { spacing, formatSpace } from './spacing'
import { fontSizes, formatFontSize } from './typography'
import { color, getTextContrast } from './color'
import { boxShadow } from './boxShadow'

export const theme = {
  boxShadow,
  spacing,
  formatSpace,
  fontSizes,
  formatFontSize,
  color,
  getTextContrast,
  // Based off of max-width
  breakpoint: {
    large: '1200px',
    medium: '992px',
    small: '768px',
    tiny: '576px',
  },
}
