import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ajoutez Open Sans
const openSans = Open_Sans({
  weight: ['300', '400', '600', '700', '800'],
  subsets: ["latin"],
  variable: "--font-open-sans",
});

export const metadata = {
  title: "Africa Trade & Industry",
  description: "Fournisseur de textiles industriels pour l'ameublement, l'automobile et la chaussure en Afrique",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
      >
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
