import { parsingRules } from "@/helpers/parsingRules";

jest.mock("@/helpers/formatPercentage", () => {
  return {
    formatPercentage: jest.fn((value) => value.toFixed(2) + "%"),
  };
});

describe("parsingRules", () => {
  it("should parse relative abundance value correctly", () => {
    const { relative_abundance } = parsingRules();
    expect(relative_abundance(0.5)).toBe("0.50%");
  });

  it("should parse abundance score value correctly", () => {
    const { abundance_score } = parsingRules();
    expect(abundance_score(3.14159)).toBe("3.14");
    expect(abundance_score(3.145)).toBe("3.15");
  });

  it("should parse hit frequency value correctly", () => {
    const { hit_frequency } = parsingRules();
    expect(hit_frequency(8.9)).toBe(8);
  });
});
