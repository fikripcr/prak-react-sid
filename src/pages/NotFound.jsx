export default function NotFound() {
  return (
    // Menggunakan background yang sama dengan area konten dashboard Anda
    <div className=" flex flex-col items-center justify-center p-6 font-sans">
      {/* 404 Card - Desain senada dengan card "Total Orders" dll */}
      <div className="bg-white p-10 rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.04)] max-w-md w-full text-center border border-gray-100">
        <h2 className="text-7xl font-extrabold text-[#2d3748] mb-4 tracking-tight">
          404
        </h2>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Halaman Tidak Ditemukan
        </h3>

        <p className="text-gray-500 mb-8 text-sm leading-relaxed">
          Maaf, halaman yang Anda cari mungkin telah dihapus, ganti nama, atau
          tidak tersedia untuk sementara waktu.
        </p>

        {/* Action Button - Desain persis seperti tombol "Add Button" warna hijau */}
        <button
          onClick={() => navigate("/")}
          className="bg-[#00b074] hover:bg-[#009562] transition-colors duration-200 text-white font-medium py-2.5 px-6 rounded-lg w-full sm:w-auto"
        >
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
}
