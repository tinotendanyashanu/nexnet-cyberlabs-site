import { complianceMatrix } from "@/lib/site-data";

export function ComplianceMatrix() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm bg-white/5">
        <thead className="bg-white/10 text-xs uppercase tracking-[0.2em] text-gray-300">
          <tr>
            <th className="px-6 py-4">Framework</th>
            <th className="px-6 py-4">Coverage</th>
            <th className="px-6 py-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {complianceMatrix.map((row) => (
            <tr key={row.framework} className="border-t border-white/5">
              <td className="px-6 py-4 font-semibold">{row.framework}</td>
              <td className="px-6 py-4 text-gray-300">{row.coverage}</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 rounded-full border border-white/15 text-xs uppercase tracking-wide">
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

