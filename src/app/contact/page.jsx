"use client";

import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 pt-6">
      {/* Header */}
      {/* Header with Background Image */}
      <div
        className="relative bg-cover bg-center border-b border-gray-200"
        style={{
          backgroundImage: `url('/africaHero2.png')`,
        }}
      >
        <div className="absolute inset-0 bg-[#262856]/40"></div>

        <div className="relative max-w-4xl mx-auto px-4 py-28">
          <Link
            href="/"
            className="text-white hover:text-gray-200 mb-4 inline-block text-sm transition-colors"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Nous Contacter
          </h1>
          <p className="text-xl text-gray-100">
            Nous sommes là pour répondre à toutes vos questions
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Informations de Contact
              </h2>
              <div className="w-20 h-[2px] bg-gray-900 rounded-full"></div>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="group bg-white rounded p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-4 group-hover:bg-gray-800 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Téléphone
                    </h3>
                    <a
                      href="tel:+212661183646"
                      className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
                    >
                      +212 (0)6 61 18 36 46
                    </a>
                    
                  </div>
                </div>
              </div>
              

              {/* Address Card */}
              <div className="group bg-white  p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-900 p-4  group-hover:bg-gray-800 transition-colors duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                      Adresse
                    </h3>
                    <div className="text-gray-900 font-semibold">
                      <p className="text-lg">191 Bd Bir Anzarane</p>
                      <p className="text-lg">20000 Casablanca, Maroc</p>
                    </div>
                    <a
                      href="https://maps.google.com/?q=191+Bd+Bir+Anzarane,+Casablanca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-gray-900 hover:text-gray-700 mt-2 font-medium underline"
                    >
                      Ouvrir dans Maps
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gray-900  p-6 text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Horaires d'ouverture
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Lundi - Vendredi</span>
                  <span className="font-semibold">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-700">
                  <span className="text-gray-300">Samedi</span>
                  <span className="font-semibold">9h00 - 13h00</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-300">Dimanche</span>
                  <span className="font-semibold text-gray-400">Fermé</span>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:sticky lg:top-32">
            <div className="bg-white  shadow-xl overflow-hidden border border-gray-200">
              <div className="p-4 bg-gray-900">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                  </svg>
                  Notre Localisation
                </h3>
              </div>
              <div className="h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3327.805546229619!2d-7.638570624820067!3d33.58831064270057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd62f0e2ad6b%3A0x4f02d7c5cb5e449a!2s191%20Bd%20Bir%20Anzarane%2C%20Casablanca%2020200%2C%20Maroc!5e0!3m2!1sfr!2sma!4v1730448900000!5m2!1sfr!2sma"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}