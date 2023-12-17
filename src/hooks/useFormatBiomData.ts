import {
  ParsingRules,
  isValidColumnName,
  parsingRules,
} from "@/helpers/parsingRules";
import {
  BiomData,
  BiomDataColumn,
  FormattedBiomRow,
} from "@/types/BiomDataTypes";
import { useMemo } from "react";

/**
 * Formats BiomData into a structured format based on column names and parsing rules.
 * @param {BiomData | null} jsonData - BiomData object to be formatted
 * @returns {FormattedBiomRow[]} - Formatted data object with parsed values based on column names
 */
function useFormatBiomData(jsonData: BiomData | null) {
  const data: FormattedBiomRow[] = useMemo(() => {
    if (!jsonData) {
      return [];
    }

    const columnsNames = jsonData.columns.map((el) => el.id);

    return jsonData?.rows.map((el, index) => {
      const mappedColumns = columnsNames.reduce<BiomDataColumn>(
        (acc, columnName, i) => {
          if (isValidColumnName(columnName)) {
            const rowData = jsonData.data[index];
            const rules: ParsingRules = parsingRules();
            const parseFunction = rules[columnName];
            // for some reason TS infers acc as never
            (acc as any)[columnName] = parseFunction(rowData[i]);
          }
          return acc;
        },
        { relative_abundance: "", abundance_score: "", hit_frequency: 0 }
      );

      return {
        name: el.metadata.title,
        taxId: el.metadata.tax_id,
        relativeAbundance: mappedColumns.relative_abundance,
        abundanceScore: mappedColumns.abundance_score,
        hitFrequency: mappedColumns.hit_frequency,
      };
    });
  }, [jsonData]);

  return { data };
}

export default useFormatBiomData;
