export default function Wallpapers() {
  const wallpapers = [
    { title: "Night City Skyline", img: "/images/nightcity1.jpg" },
    { title: "Cyberpunk Car", img: "/images/car.jpg" },
    { title: "V & Johnny Silverhand", img: "/images/vjohnny.jpg" },
  ];

  return (
    <div className="min-h-screen bg-black text-yellow-400 p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Cyberpunk Wallpapers</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {wallpapers.map((w, i) => (
          <div
            key={i}
            className="group relative overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={w.img}
              alt={w.title}
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition">
              <p className="mb-2">{w.title}</p>
              <a
                href={w.img}
                download
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold"
              >
                Download
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}