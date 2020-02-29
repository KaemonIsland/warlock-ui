/**
 * Applies alpha to hsl strings
 * @param {string} hsl - HSL string, hsl(200, 100%, 50%)
 * @param {number} alpha - The alpha value for opacity
 * @returns {string} HSLA value, hsla(200, 100%, 50%, 0.3)
 */
export const getInsetColor = (hsl, alpha) => {
  // finds the separator value
  let separated = hsl.indexOf(',') > -1 ? ',' : ' '

  // splits the hsl value by the separator
  const splitHsl = hsl
    .substr(4)
    .split(')')[0]
    .split(separated)

  return `hsla(${splitHsl.join(',')}, ${alpha})`
}

/**
 * Variations of box shadows with varying height/depth
 */
export const boxShadow = {
  outset: hsl =>
    `inset 0 3px 2px ${getInsetColor(
      hsl,
      0.7
    )}, 0 2px 3px hsla(0, 0%, 0%, 0.4)`,
  inset: hsl =>
    `0 2px 0 ${getInsetColor(hsl, 0.5)}, inset 0 2px 0 hsla(0, 0%, 0%, 0.3)`,
}
