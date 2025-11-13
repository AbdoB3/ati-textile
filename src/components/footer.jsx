import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto max-w-7xl px-4 py-12">
        {/* Top Section: Logo & Description */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-12">
          {/* Logo & Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo.png" alt="Logo" width={180} height={50} />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              L’import-export et la distribution de matières textiles, tissus
              automobiles, matériaux pour chaussures et ameublement
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Nous contacter</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600" />
                <a
                  href="tel:+33123456789"
                  className="text-slate-400 hover:text-white transition"
                >
                  +212 (0)6 00 00 00 89
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600" />
                <a
                  href="mailto:info@yourbrand.com"
                  className="text-slate-400 hover:text-white transition"
                >
                  Contact@africatradeindutry.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-slate-400">191 Bd Bir Anzarane</p>
                  <p className="text-slate-400">20000 Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>
          {/* Map */}
          <div className="rounded-lg overflow-hidden h-full min-h-[200px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.805546229619!2d-7.638570624820067!3d33.58831064270057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd62f0e2ad6b%3A0x4f02d7c5cb5e449a!2s191%20Bd%20Bir%20Anzarane%2C%20Casablanca%2020200%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1730448900000!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "200px", borderRadius: "10px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Bottom Section: Social & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-400 text-sm mb-4 md:mb-0">
            &copy; 2025 Africa Trade & Industry. Tous droits réservés.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-slate-400 hover:text-blue-600 transition"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-600 transition"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-600 transition"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-blue-600 transition"
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
