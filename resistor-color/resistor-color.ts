/**
 * An array of all available resistor colors in order of their numerical value.
 * @readonly
 */
export const COLORS = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'grey',
    'white',
] as const

/** * Valid resistor colors. 
 * Derived from the {@link COLORS} array.
 */
export type Color = (typeof COLORS)[number];

/**
 * Converts a resistor color name to its corresponding numerical code.
 * * @param color - The name of the color to look up (e.g., 'red')
 * @returns The numerical index of the color (0-9)
 * * @example
 * // returns 2
 * colorCode('red');
 */
export const colorCode = (color: Color): number => {
  return COLORS.indexOf(color);
};

