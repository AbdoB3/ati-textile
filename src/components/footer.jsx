import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Top Section: Logo & Description */}
        <div className="grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-3 mb-12 ">
          {/* Logo & Company Info */}
          <div className="md:col-span-2 ">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo3.png" alt="Logo" width={140} height={50} />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Africa Trade & Industry conçoit et distribue des solutions
              textiles innovantes pour les secteurs de l’automobile, de la
              chaussure et de l’ameublement.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white text-lg mb-4">
              Nous contacter
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800">
                  <Phone className="w-4 h-4 text-blue-500" />
                </div>

                <a
                  href="tel:+212522986229"
                  className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  +212 (0)5 22 98 62 29
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800">
                  <MessageCircle className="w-4 h-4 text-blue-500" />
                </div>
                <a
                  href="https://wa.me/212661716575"
                  className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +212 (0)6 61 71 65 75
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800">
                  <Mail className="w-4 h-4 text-blue-500" />
                </div>
                <a
                  href="mailto:info@yourbrand.com"
                  className="text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300"
                >
                  Contact@atifabrics.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full bg-slate-800">
                  <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-slate-400">191 Bd Bir Anzarane</p>
                  <p className="text-slate-400">20320 Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Bottom Section: Social & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; 2026 Africa Trade & Industry. Tous droits réservés.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-white hover:scale-110 transition-transform duration-300"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white hover:scale-110 transition-transform duration-300"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white hover:scale-110 transition-transform duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-white hover:scale-110 transition-transform duration-300" 
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
