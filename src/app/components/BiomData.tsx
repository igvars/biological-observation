import useBiomData from "@/hooks/useBiomData";
import useFormatBiomData from "@/hooks/useFormatBiomData";

function BiomData() {
  const { jsonData, loading } = useBiomData();
  const { data } = useFormatBiomData(jsonData);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <table className="border-collapse border border-slate-400 dark:border-slate-900">
      <thead>
        <tr className="bg-slate-100 dark:bg-slate-800">
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Tax ID</th>
          <th className="border px-4 py-2">Abundance Score</th>
          <th className="border px-4 py-2">Relative Abundance</th>
          <th className="border px-4 py-2">Unique Matches Frequency</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            name,
            taxId,
            abundanceScore,
            hitFrequency,
            relativeAbundance,
          }) => (
            <tr key={taxId}>
              <td className="border px-4 py-2">{name}</td>
              <td className="border px-4 py-2">{taxId}</td>
              <td className="border px-4 py-2">{abundanceScore}</td>
              <td className="border px-4 py-2">{relativeAbundance}</td>
              <td className="border px-4 py-2">{hitFrequency}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export default BiomData;
