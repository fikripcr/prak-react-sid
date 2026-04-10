export default function TailwindCSS() {
  return (
    // Menambahkan bg abu-abu super muda agar card putih lebih menonjol
    <div className="min-h-screen bg-slate-50 pb-12 font-sans">
      <FlexboxGrid />

      {/* Container utama agar konten terpusat dan rapi */}
      <main className="max-w-3xl mx-auto mt-8 px-6 space-y-8">
        
        {/* Header Section */}
        <div className="text-center py-6 border-b border-slate-200">
          <h1 className="text-4xl font-extrabold text-blue-950 mb-4 tracking-tight">
            Belajar Tailwind CSS
          </h1>
          <button className="bg-blue-950 text-orange-300 px-6 py-2.5 rounded-full font-medium shadow-md hover:bg-blue-900 hover:shadow-lg transition-all">
            Click Me
          </button>
        </div>

        {/* Components Showcase */}
        <Spacing />
        <Typography />
        <BorderRadius />
        <BackgroundColors />
        <ShadowEffects />
      </main>
    </div>
  );
}

function Spacing() {
  return (
    <div className="bg-blue-950 shadow-md p-6 rounded-2xl">
      <h2 className="text-white text-xl font-semibold tracking-wide">Card Title</h2>
      <p className="mt-2 text-orange-300/90 leading-relaxed">
        Ini adalah contoh penggunaan padding dan margin di Tailwind dengan jarak yang lebih proporsional.
      </p>
    </div>
  );
}

function Typography() {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      <h2 className="text-2xl font-bold text-blue-950">Tailwind Typography</h2>
      <p className="text-slate-600 text-lg mt-2">
        Belajar Tailwind sangat menyenangkan dan cepat! Warna teks yang sedikit diredupkan (slate-600) membuatnya lebih ramah di mata.
      </p>
    </div>
  );
}

function BorderRadius() {
  return (
    <div className="flex justify-center bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
      {/* Menggabungkan tombol menjadi satu kesatuan (Button Group) */}
      <div className="inline-flex shadow-sm">
        <button className="bg-blue-950 text-orange-300 px-6 py-2 rounded-l-full border-r border-blue-900 hover:bg-blue-900 transition-colors">
          Klik Kiri
        </button>
        <button className="bg-blue-950 text-orange-300 px-6 py-2 rounded-r-full hover:bg-blue-900 transition-colors">
          Klik Kanan
        </button>
      </div>
    </div>
  );
}

function BackgroundColors() {
  return (
    <div className="bg-orange-300 text-blue-950 p-6 rounded-2xl shadow-md">
      {/* Kontras diperbaiki: Text gelap di atas background terang */}
      <h3 className="text-xl font-bold">Tailwind Colors</h3>
      <p className="mt-2 font-medium opacity-90">
        Belajar Tailwind itu seru dan fleksibel! Warna kontras yang tepat membuatnya elegan.
      </p>
    </div>
  );
}

function FlexboxGrid() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between bg-blue-950 px-8 py-4 shadow-md">
      <h1 className="text-xl font-bold text-orange-300 tracking-wider">MyWebsite</h1>
      <ul className="flex items-center space-x-8 text-slate-200 text-sm font-medium">
        <li><a href="#" className="hover:text-orange-300 transition-colors">Home</a></li>
        <li><a href="#" className="hover:text-orange-300 transition-colors">About</a></li>
        <li><a href="#" className="hover:text-orange-300 transition-colors">Contact</a></li>
      </ul>
      <button className="text-sm text-red-400 hover:text-red-300 font-bold transition-colors">
        Logout
      </button>
    </nav>
  );
}

function ShadowEffects() {
  return (
    <div className="bg-white shadow-md p-6 rounded-2xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border border-slate-100 cursor-pointer">
      <h3 className="text-xl font-semibold text-blue-950">Hover me!</h3>
      <p className="text-slate-600 mt-2">
        Lihat efek bayangan (elevasi) yang lebih modern saat hover, alih-alih rotasi.
      </p>
    </div>
  );
}