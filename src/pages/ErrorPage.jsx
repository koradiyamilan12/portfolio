
export default function ErrorPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden">

      {/* Glass card */}
      <div className="backdrop-blur-2xl bg-white/10 p-10 rounded-3xl border border-white/20 shadow-2xl text-center">
        <h1 className="text-7xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>

        <p className="text-gray-300 mt-4 text-lg">
          The page you’re looking for doesn’t exist anymore.
        </p>

        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition"
        >
          Return Home
        </a>
      </div>

      {/* Glow blobs */}
      <div className="absolute w-72 h-72 bg-purple-600/20 blur-[100px] rounded-full -top-10 -left-10 animate-pulse"></div>
      <div className="absolute w-80 h-80 bg-cyan-500/20 blur-[120px] rounded-full -bottom-10 -right-10 animate-ping"></div>
    </div>
  );
}
