import { renderHook, waitFor } from "@testing-library/react";
import useBiomData from "@/hooks/useBiomData";

describe("useBiomData", () => {
  it("should return loading as true initially", () => {
    const { result } = renderHook(() => useBiomData());
    expect(result.current.loading).toBe(true);
  });

  it("should fetch BiomData and update loading to false", async () => {
    const { result } = renderHook(() => useBiomData());

    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.jsonData).not.toBeNull();
    });
  });
});
