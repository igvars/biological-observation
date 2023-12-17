import { renderHook } from "@testing-library/react";
import useFormatBiomData from "@/hooks/useFormatBiomData";
import { BiomData } from "@/types/BiomDataTypes";

describe("useFormatBiomData", () => {
  const mockData: BiomData = {
    data: [
      [1, 2, 3],
      [4, 5, 6],
    ],
    rows: [
      {
        id: "Lactobacillus sp UMNPBX1 GCA 002554085.1",
        metadata: {
          taxonomy: [
            "Bacteria",
            "Firmicutes",
            "Bacilli",
            "Lactobacillales",
            "Lactobacillaceae",
            "Lactobacillus",
            "Lactobacillus_u_s",
            "Lactobacillus sp. UMNPBX1",
          ],
          tax_id: 2042046,
          title: "Lactobacillus sp. UMNPBX1",
          lineage: [
            {
              rank: "superkingdom",
              name: "Bacteria",
              tax_id: 2,
            },
            {
              rank: "phylum",
              name: "Firmicutes",
              tax_id: 1239,
            },
            {
              rank: "class",
              name: "Bacilli",
              tax_id: 91061,
            },
            {
              rank: "order",
              name: "Lactobacillales",
              tax_id: 186826,
            },
            {
              rank: "family",
              name: "Lactobacillaceae",
              tax_id: 33958,
            },
            {
              rank: "genus",
              name: "Lactobacillus",
              tax_id: 1578,
            },
            {
              rank: "species",
              name: "Lactobacillus_u_s",
              tax_id: 1578,
            },
            {
              rank: "strain",
              name: "Lactobacillus sp. UMNPBX1",
              tax_id: 2042046,
            },
          ],
          id: "Lactobacillus sp UMNPBX1 GCA 002554085.1",
          assembly: "GCA_002554085.1",
        },
      },
      {
        id: "Lactobacillus kefiranofaciens ZW3",
        metadata: {
          taxonomy: [
            "Bacteria",
            "Firmicutes",
            "Bacilli",
            "Lactobacillales",
            "Lactobacillaceae",
            "Lactobacillus",
            "Lactobacillus kefiranofaciens",
            "Lactobacillus kefiranofaciens ZW3",
          ],
          tax_id: 1033837,
          title: "Lactobacillus kefiranofaciens ZW3",
          lineage: [
            {
              rank: "superkingdom",
              name: "Bacteria",
              tax_id: 2,
            },
            {
              rank: "phylum",
              name: "Firmicutes",
              tax_id: 1239,
            },
            {
              rank: "class",
              name: "Bacilli",
              tax_id: 91061,
            },
            {
              rank: "order",
              name: "Lactobacillales",
              tax_id: 186826,
            },
            {
              rank: "family",
              name: "Lactobacillaceae",
              tax_id: 33958,
            },
            {
              rank: "genus",
              name: "Lactobacillus",
              tax_id: 1578,
            },
            {
              rank: "species",
              name: "Lactobacillus kefiranofaciens",
              tax_id: 267818,
            },
            {
              rank: "strain",
              name: "Lactobacillus kefiranofaciens ZW3",
              tax_id: 1033837,
            },
          ],
          id: "Lactobacillus kefiranofaciens ZW3",
        },
      },
    ],
    columns: [
      {
        id: "relative_abundance",
        metadata: null,
      },
      {
        id: "abundance_score",
        metadata: null,
      },
      {
        id: "hit_frequency",
        metadata: null,
      },
    ],
  };

  it("should return empty data when jsonData is null", () => {
    const { result } = renderHook(() => useFormatBiomData(null));
    expect(result.current.data).toEqual([]);
  });

  it("should format BiomData correctly", () => {
    const { result } = renderHook(() => useFormatBiomData(mockData));

    expect(result.current.data.length).toBe(2);
    expect(result.current.data[0]).toEqual({
      name: "Lactobacillus sp. UMNPBX1",
      taxId: 2042046,
      relativeAbundance: "100.00%",
      abundanceScore: "2.00",
      hitFrequency: 3,
    });
    expect(result.current.data[1]).toEqual({
      name: "Lactobacillus kefiranofaciens ZW3",
      taxId: 1033837,
      relativeAbundance: "400.00%",
      abundanceScore: "5.00",
      hitFrequency: 6,
    });
  });
});
