import { useEffect, useState } from "react";
import biomJsonData from "@/api/biom.json";
import { BiomData } from "@/types/BiomDataTypes";

/**
 * Custom hook simulating asynchronous fetching BiomData
 * @returns {{
 *  jsonData: BiomData | null;
 *  loading: boolean;
 * }}
 */
const useBiomData = () => {
  const [jsonData, setJsonData] = useState<BiomData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data: BiomData = biomJsonData;
        setTimeout(() => {
          setJsonData(data);
          setLoading(false);
        }, 300);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { jsonData, loading };
};

export default useBiomData;
