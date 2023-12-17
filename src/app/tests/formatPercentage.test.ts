import { formatPercentage } from "@/helpers/formatPercentage";

describe("formatPercentage", () => {
  it("should format percentage correctly for values greater than or equal to 0.01", () => {
    expect(formatPercentage(0.123)).toBe("12.30%");
    expect(formatPercentage(1)).toBe("100.00%");
  });

  it('should return "< 0.01%" for values less than 0.01', () => {
    expect(formatPercentage(0.009)).toBe("< 0.01%");
    expect(formatPercentage(0)).toBe("< 0.01%");
  });
});
