import { formatPercentage } from "./formatPercentage";

/**
 * Defines rules for parsing specific keys within BiomData.
 */
export interface ParsingRules {
  /**
   * A function that formats relative abundance values as strings.
   * @param {number} value - The value to format as relative abundance.
   * @returns {string} - The formatted relative abundance value.
   */
  relative_abundance: (value: number) => string;

  /**
   * A function that formats abundance score values as strings.
   * @param {number} value - The value to format as abundance score.
   * @returns {string} - The formatted abundance score value.
   */
  abundance_score: (value: number) => string;

  /**
   * A function that formats hit frequency values as numbers.
   * @param {number} value - The value to format as hit frequency.
   * @returns {number} - The formatted hit frequency value.
   */
  hit_frequency: (value: number) => number;
}

/**
 * Provides rules for parsing specific keys within BiomData.
 * @returns {ParsingRules} - The set of parsing rules.
 */
export function parsingRules() {
  return {
    relative_abundance: (value: number) => formatPercentage(value),
    abundance_score: (value: number) => value.toFixed(2),
    hit_frequency: (value: number) => Math.floor(value),
  };
}

/**
 * Checks if a given string is a valid key of ParsingRules.
 * @param {string} key - The key to validate.
 * @returns {boolean} - Whether the key is a valid ParsingRules key.
 */
export function isValidColumnName(key: string): key is keyof ParsingRules {
  return (
    key === "relative_abundance" ||
    key === "abundance_score" ||
    key === "hit_frequency"
  );
}
