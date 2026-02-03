import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-black flex items-center min-h-[60vh] md:min-h-0 pt-32 pb-20 md:pt-48 md:pb-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=2000&auto=format&fit=crop"
          alt="Angkringan Mokas Vibes"
          fill
          className="object-cover brightness-[0.2]"
          priority
        />
      </div>

      {/* Konten Teks */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white italic tracking-tighter leading-tight mb-4">
          NONGKRONG <span className="text-yellow-500">ASIK</span> <br /> DI
          MOKAS
        </h1>

        <p className="text-lg md:text-2xl text-gray-400 font-medium tracking-wide">
          Tempat nongkrong paling nyaman dengan pilihan sundukan legendaris
          sejak 2015.
        </p>
      </div>
    </section>
  );
}
