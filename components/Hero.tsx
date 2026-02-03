import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen w-full flex items-center justify-center overflow-hidden py-20">
      <Image
        src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=2000&auto=format&fit=crop"
        alt="Angkringan Mokas Vibes"
        fill
        className="object-cover brightness-[0.2]"
        priority
      />

      <div className="relative z-10 text-center px-4 max-w-5xl">
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
