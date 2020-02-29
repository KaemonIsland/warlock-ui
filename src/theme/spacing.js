/**
 * Takes any CSS accepted measurement for padding/margin
 * and converts it to use our required unit sizes.
 * Every value should just be a number.
 * @param {string} spacing - TRBL example '1, 5, 1, 4'
 * @param {string} spacingVertical - '1, 0, 1, 0'
 * @param {string} spacingHorizontal - '0, 1, 0, 1
 * @param {string} spacingTop - '1, 0, 0, 0'
 * @param {string} spacingBottom - '0, 0, 1, 0'
 * @param {string} spacingLeft - '0, 0, 0, 1'
 * @param {string} spacingRight - '0, 1, 0, 0'
 */
export const formatPaddingAndMargin = (
  spacing,
  spacingVertical,
  spacingHorizontal,
  spacingTop,
  spacingBottom,
  spacingLeft,
  spacingRight
) => {
  let spacingArr = [0, 0, 0, 0]

  if (spacing) {
    const splitSpacing = spacing.split(' ')
    const spacingLength = splitSpacing.length

    if (spacingLength === 1) {
      spacingArr = [spacing]
    } else if (spacingLength === 2) {
      spacingArr = [...splitSpacing, ...splitSpacing]
    } else if (spacingLength === 4) {
      spacingArr = splitSpacing
    }
  }
  if (spacingVertical) {
    spacingArr[0] = spacingVertical
    spacingArr[2] = spacingVertical
  }
  if (spacingHorizontal) {
    spacingArr[1] = spacingHorizontal
    spacingArr[3] = spacingHorizontal
  }
  if (spacingTop) {
    spacingArr[0] = spacingTop
  }
  if (spacingBottom) {
    spacingArr[2] = spacingBottom
  }
  if (spacingRight) {
    spacingArr[1] = spacingRight
  }
  if (spacingLeft) {
    spacingArr[3] = spacingLeft
  }

  return spacingArr.map(unit => formatSpace(unit)).join(' ')
}

// Range of sizes used for fonts/padding/margin etc.
// Range from 1-16. 1 = smallest, 16 = largest
export const spacing = {
  1: 0.25, // 4px
  2: 0.5, // 8px
  3: 0.75, // 12px
  4: 1, // 16px
  5: 1.5, // 24px
  6: 2, // 32px
  7: 3, // 48px
  8: 4, // 64px
  9: 6, // 96px
  10: 8, // 128px
  11: 12, // 192px
  12: 16, // 256px
  13: 24, // 384px
  14: 32, // 512px
  15: 40, // 640px
  16: 48, // 768px
}

/**
 * Formats a size to use spacing values. uses 'rem'
 * by default.
 * @param {number} size - based off of spacing, 0-16
 * @param {string} unit - unit of measurement 'rem' 'em'
 *
 * @returns {string} formatted sizeMeasurement
 */
export const formatSpace = (size = 4, unit = 'rem') => {
  return `${spacing[size]}${unit}`
}
