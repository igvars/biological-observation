/**
 * Formats a number as a percentage with two decimal places,
 * showing "< 0.01%" if the value is less than 0.01.
 * @param {number} value - The value to be formatted as a percentage.
 * @returns {string} - The formatted percentage string.
 */
export const formatPercentage = (value: number): string => {
  if (value < 0.01) {
    return "< 0.01%";
  }
  return `${(value * 100).toFixed(2)}%`;
};
