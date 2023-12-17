import React from "react";
import { render, screen } from "@testing-library/react";
import BiomData from "../components/BiomData";
import useBiomData from "@/hooks/useBiomData";
import useFormatBiomData from "@/hooks/useFormatBiomData";

jest.mock("@/hooks/useBiomData", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    jsonData: null,
    loading: true,
  }),
}));

jest.mock("@/hooks/useFormatBiomData", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue({
    data: [],
  }),
}));

describe("BiomData component", () => {
  beforeEach(() => {
    (useBiomData as jest.Mock).mockReturnValue({
      jsonData: null,
      loading: true,
    });

    (useFormatBiomData as jest.Mock).mockReturnValue({
      data: [],
    });
  });

  it("should render loading state", () => {
    render(<BiomData />);
    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeDefined();
  });

  it("should render table with data", () => {
    const mockData = [
      {
        name: "Sample Name",
        taxId: "12345",
        abundanceScore: "123",
        hitFrequency: 10,
        relativeAbundance: "20%",
      },
    ];

    (useBiomData as jest.Mock).mockReturnValue({
      jsonData: {},
      loading: false,
    });

    (useFormatBiomData as jest.Mock).mockReturnValue({
      data: mockData,
    });

    render(<BiomData />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeDefined();
  });
});
