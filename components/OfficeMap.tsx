import { offices } from "@/lib/site-data";

const mapUrls: Record<string, string> = {
  Harare: "https://www.openstreetmap.org/export/embed.html?bbox=31.044%2C-17.829%2C31.068%2C-17.807&layer=mapnik&marker=-17.82%2C31.056",
  Warsaw: "https://www.openstreetmap.org/export/embed.html?bbox=21.000%2C52.225%2C21.030%2C52.245&layer=mapnik&marker=52.234%2C21.012"
};

export function OfficeMap() {
  return (
    <div className="grid lg:grid-cols-2 gap-6 mt-10">
      {offices.map((office) => (
        <div key={office.city} className="card space-y-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-teal">{office.city}</p>
            <h3 className="text-2xl font-semibold">{office.country}</h3>
          </div>
          <p className="text-gray-300">{office.address}</p>
          <p className="text-gray-300">Hotline: {office.phone}</p>
          <div className="rounded-xl overflow-hidden border border-white/10 h-64">
            <iframe
              title={`${office.city} office map`}
              src={mapUrls[office.city]}
              className="h-full w-full"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

