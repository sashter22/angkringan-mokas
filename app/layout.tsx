import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://angkringan-mokas.vercel.app"),
  title:
    "Angkringan Mokas Takeran, Magetan | Solusi Konco Nongkrong Sejak 2015",
  description:
    "Nikmati Nasi Jotos, Sundukan, dan Wedangan otentik di Angkringan Mokas Takeran, Magetan. Tempat nongkrong asik dengan harga terjangkau!",
  keywords: [
    "Angkringan Mokas",
    "Angkringan Takeran",
    "Angkringan Magetan",
    "Kuliner Magetan",
    "Nasi Jotos Magetan",
    "Tempat Nongkrong asyik di Magetan",
    "Kuliner dekat Madiun",
  ],
  // BAGIAN VERIFIKASI GOOGLE CONSOLE
  verification: {
    google: "C7DTJi-DYv2phdD54oMvnPeDwqg86AaYDF0Hj2Fk2lY",
  },
  openGraph: {
    title: "Angkringan Mokas Magetan",
    description: "Makan kenyang, hati senang, dompet tenang. Cek menu kami!",
    url: "https://angkringan-mokas.vercel.app",
    siteName: "Angkringan Mokas",
    images: [
      {
        url: "/img/angkringan.jpeg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="antialiased bg-black text-white">{children}</body>
    </html>
  );
}
