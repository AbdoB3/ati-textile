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

const COLORS = {
  navy: "#1F2A44",
  navyDeep: "#141A2C",
  beige: "#E8DCC8",
  gold: "#C6A75E",
  cream: "#F7F3EC",
};

const socials = [
  { Icon: Facebook, label: "Facebook" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Instagram, label: "Instagram" },
  { Icon: Linkedin, label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: COLORS.navyDeep }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .foot-font-display { font-family: 'Fraunces', serif; }
        .foot-font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Top Section: Logo & Description */}
        <div className="grid grid-cols-1 gap-10 md:gap-20 md:grid-cols-3 mb-12">
          {/* Logo & Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-5">
              <Image src="/logo5.png" alt="Logo" width={150} height={70} />
            </div>
            <p className="foot-font-body text-sm leading-relaxed max-w-md text-[#F7F3EC]/60">
              Africa Trade &amp; Industry conçoit et distribue des solutions textiles innovantes pour les
              secteurs de l&rsquo;automobile, de la chaussure et de l&rsquo;ameublement.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="foot-font-body text-xs tracking-[0.25em] uppercase mb-5 text-[#C6A75E]">
              Nous contacter
            </h3>
            <div className="space-y-3.5">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 bg-[#C6A75E]/10">
                  <Phone className="w-4 h-4 text-[#C6A75E]" />
                </div>
                <a
                  href="tel:+212522986229"
                  className="foot-font-body text-sm text-[#F7F3EC]/65 hover:text-[#F7F3EC] transition-all duration-300 hover:translate-x-1"
                >
                  +212 (0)5 22 98 62 29
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 bg-[#C6A75E]/10">
                  <MessageCircle className="w-4 h-4 text-[#C6A75E]" />
                </div>
                <a
                  href="https://wa.me/212661716575"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="foot-font-body text-sm text-[#F7F3EC]/65 hover:text-[#F7F3EC] transition-all duration-300 hover:translate-x-1"
                >
                  +212 (0)6 61 71 65 75
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 bg-[#C6A75E]/10">
                  <Mail className="w-4 h-4 text-[#C6A75E]" />
                </div>
                <a
                  href="mailto:Contact@atifabrics.com"
                  className="foot-font-body text-sm text-[#F7F3EC]/65 hover:text-[#F7F3EC] transition-all duration-300 hover:translate-x-1"
                >
                  Contact@atifabrics.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-full flex-shrink-0 bg-[#C6A75E]/10">
                  <MapPin className="w-4 h-4 text-[#C6A75E]" />
                </div>
                <div className="foot-font-body text-sm leading-relaxed text-[#F7F3EC]/65">
                  <p>191 Bd Bir Anzarane</p>
                  <p>20320 Casablanca, Maroc</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-8"
          style={{ background: "linear-gradient(90deg, transparent, rgba(198,167,94,0.25), transparent)" }}
        />

        {/* Bottom Section: Social & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="foot-font-body text-sm text-[#F7F3EC]/50">
            &copy; 2026 Africa Trade &amp; Industry. Tous droits réservés.
          </p>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            {socials.map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="text-[#F7F3EC]/55 hover:text-[#C6A75E] transition-transform duration-300 hover:scale-110"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}