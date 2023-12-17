interface TaxonomyLevel {
  rank: string;
  name: string;
  tax_id: number;
}

interface Metadata {
  tax_id: number;
  title: string;
  lineage: TaxonomyLevel[];
  id: string;
  [key: string]: any;
}

interface Row {
  id: string;
  metadata: Metadata;
}

interface Columns {
  id: string;
  [key: string]: any;
}

export interface BiomData {
  data: number[][];
  rows: Row[];
  columns: Columns[];
  [key: string]: any;
}

export interface BiomDataColumn {
  relative_abundance: string;
  abundance_score: string;
  hit_frequency: number;
}

export interface FormattedBiomRow {
  name: string;
  taxId: number;
  relativeAbundance: string;
  abundanceScore: string;
  hitFrequency: number;
}

export interface FormattedBiomData {
  data: FormattedBiomRow[];
}
