import { Geist, Geist_Mono, Open_Sans } from "next/font/google";
import "./globals.css";
import  { FloatingNavDemo } from "@/components/nav";
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
  description: "Africa Trade & Industry est un fournisseur B2B de solutions textiles pour l’ameublement, l’automobile et l’industrie.",
};

export default function RootLayout({ children }) {
  const COLORS = {
  navy: "#1F2A44",
  navyDeep: "#141A2C",
  beige: "#E8DCC8",
  gold: "#C6A75E",
  cream: "#F7F3EC",
};
  return (
    <html lang="en">
      <body
      suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${openSans.variable} antialiased`}
         style={{ backgroundColor: COLORS.cream }}
      >
        <FloatingNavDemo />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
