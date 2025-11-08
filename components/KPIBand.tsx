export function KPIBand() {
  const kpis = [
    { value: "2h", label: "Avg IR kickoff" },
    { value: "100%", label: "Court-ready reports" },
    { value: "500+", label: "Learners trained" },
    { value: "24/7", label: "Hotline availability" }
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300">
      {kpis.map(k => (
        <div key={k.label}>
          <p className="text-3xl font-semibold text-white">{k.value}</p>
          <p>{k.label}</p>
        </div>
      ))}
    </div>
  );
}
