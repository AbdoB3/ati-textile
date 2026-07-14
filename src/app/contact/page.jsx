"use client";
import Link from "next/link";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const COLORS = {
  navy: "#1F2A44",
  navyDeep: "#141A2C",
  beige: "#E8DCC8",
  gold: "#C6A75E",
  cream: "#F7F3EC",
  alert: "#9B3230",
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    telephone: "",
    entreprise: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est obligatoire";
    }

    if (!formData.prenom.trim()) {
      newErrors.prenom = "Le prénom est obligatoire";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.telephone.trim()) {
      newErrors.telephone = "Le téléphone est obligatoire";
    } else {
      const phoneRegex = /^(\+212|0)[5-7]\d{8}$/;
      if (!phoneRegex.test(formData.telephone.replace(/\s/g, ""))) {
        newErrors.telephone = "Format invalide. Ex: +212 6XX XX XX XX";
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est obligatoire";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_2bz3741",
        "template_z39qbk7",
        {
          nom: formData.nom,
          prenom: formData.prenom,
          email: formData.email,
          telephone: formData.telephone,
          entreprise: formData.entreprise,
          message: formData.message,
        },
        "jJcjtNpeKEEOqR9cE",
      );

      console.log("Email envoyé avec succès!", result.text);

      setSuccessMessage(
        "Message envoyé avec succès ! Nous vous répondrons rapidement.",
      );

      setFormData({
        nom: "",
        prenom: "",
        email: "",
        telephone: "",
        entreprise: "",
        message: "",
      });
      setErrors({});

      setTimeout(() => setSuccessMessage(""), 5000);
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
      setSuccessMessage("");
      setErrors({
        submit: "Une erreur est survenue. Veuillez réessayer plus tard.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen" style={{ backgroundColor: COLORS.cream }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,300;0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap');
        .ct-font-display { font-family: 'Fraunces', serif; }
        .ct-font-body { font-family: 'Inter', sans-serif; }
      `}</style>

      {/* Header with background image */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url('/africaHero2.png')` }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(31,42,68,0.55)" }} />
        <div className="relative max-w-4xl mx-auto px-4 py-28">
          <Link
            href="/"
            className="ct-font-body text-sm mb-4 inline-block transition-colors"
            style={{ color: "rgba(247,243,236,0.8)" }}
          >
            <span className="hover:text-white">← Retour à l&rsquo;accueil</span>
          </Link>
          <h1
            className="ct-font-display font-light text-4xl md:text-5xl mb-4"
            style={{ color: COLORS.cream }}
          >
            Nous Contacter
          </h1>
          <p className="ct-font-body text-lg md:text-xl" style={{ color: "rgba(247,243,236,0.85)" }}>
            L&rsquo;équipe de Africa Trade &amp; Industry est à votre disposition pour toute demande
            d&rsquo;information ou devis.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-10">
            {/* Title */}
            <div>
              <h2
                className="ct-font-display font-light text-3xl md:text-4xl mb-3"
                style={{ color: COLORS.navy }}
              >
                Informations de Contact
              </h2>
              <div className="w-16 h-px" style={{ backgroundColor: COLORS.gold }} />
            </div>

            {/* Single Contact Card */}
            <div
              className="rounded-lg p-8 shadow-lg bg-white border"
              style={{ borderColor: "rgba(31,42,68,0.08)" }}
            >
              <div className="space-y-6">
                {/* Phone */}
                <div
                  className="flex items-center gap-4 pb-6 border-b"
                  style={{ borderColor: "rgba(31,42,68,0.08)" }}
                >
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "rgba(198,167,94,0.12)" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke={COLORS.gold} viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="ct-font-body text-xs tracking-[0.15em] uppercase mb-1"
                      style={{ color: COLORS.gold }}
                    >
                      Téléphone
                    </p>
                    <a
                      href="tel:+212522896229"
                      className="ct-font-body text-lg font-semibold transition-colors"
                      style={{ color: COLORS.navy }}
                    >
                      +212 (0)5 22 89 62 29
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div
                  className="flex items-center gap-4 pb-6 border-b"
                  style={{ borderColor: "rgba(31,42,68,0.08)" }}
                >
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "rgba(198,167,94,0.12)" }}
                  >
                    <svg className="w-5 h-5" fill="#25D366" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="ct-font-body text-xs tracking-[0.15em] uppercase mb-1"
                      style={{ color: COLORS.gold }}
                    >
                      WhatsApp
                    </p>
                    <a
                      href="https://wa.me/212661716575"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ct-font-body text-lg font-semibold transition-colors"
                      style={{ color: COLORS.navy }}
                    >
                      +212 (0)6 61 71 65 75
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div
                  className="flex items-center gap-4 pb-6 border-b"
                  style={{ borderColor: "rgba(31,42,68,0.08)" }}
                >
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "rgba(198,167,94,0.12)" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke={COLORS.gold} viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="ct-font-body text-xs tracking-[0.15em] uppercase mb-1"
                      style={{ color: COLORS.gold }}
                    >
                      Email
                    </p>
                    <a
                      href="mailto:contact@atifabrics.com"
                      className="ct-font-body text-lg font-semibold break-all transition-colors"
                      style={{ color: COLORS.navy }}
                    >
                      contact@atifabrics.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-lg flex-shrink-0"
                    style={{ backgroundColor: "rgba(198,167,94,0.12)" }}
                  >
                    <svg className="w-5 h-5" fill="none" stroke={COLORS.gold} viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="ct-font-body text-xs tracking-[0.15em] uppercase mb-1"
                      style={{ color: COLORS.gold }}
                    >
                      Adresse
                    </p>
                    <p className="ct-font-body text-lg font-semibold" style={{ color: COLORS.navy }}>
                      191 Bd Bir Anzarane
                    </p>
                    <p className="ct-font-body text-lg font-semibold mb-2" style={{ color: COLORS.navy }}>
                      20000 Casablanca, Maroc
                    </p>
                    <a
                      href="https://maps.google.com/?q=191+Bd+Bir+Anzarane,+Casablanca"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ct-font-body inline-flex items-center gap-1 text-sm font-medium underline"
                      style={{ color: COLORS.gold }}
                    >
                      Voir sur Maps
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <div className="rounded-lg p-6" style={{ backgroundColor: COLORS.navy, color: COLORS.cream }}>
              <h3 className="ct-font-body text-lg font-bold mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke={COLORS.gold} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Horaires d&rsquo;ouverture
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: "rgba(198,167,94,0.15)" }}>
                  <span style={{ color: "rgba(247,243,236,0.6)" }}>Lundi - Jeudi</span>
                  <span className="font-semibold">9h00 - 19h00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: "rgba(198,167,94,0.15)" }}>
                  <span style={{ color: "rgba(247,243,236,0.6)" }}>Vendredi</span>
                  <span className="font-semibold text-right">
                    9h00 - 13h00 <br /> 15h00 - 19h00
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b" style={{ borderColor: "rgba(198,167,94,0.15)" }}>
                  <span style={{ color: "rgba(247,243,236,0.6)" }}>Samedi</span>
                  <span className="font-semibold">9h00 - 14h00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:sticky lg:top-24 mt-9 lg:mt-0">
            <div className="rounded-lg shadow-lg overflow-hidden bg-white border" style={{ borderColor: "rgba(31,42,68,0.08)" }}>
              {/* Header */}
              <div className="p-6" style={{ backgroundColor: COLORS.navy }}>
                <h3 className="ct-font-body text-xl font-bold flex items-center gap-2" style={{ color: COLORS.cream }}>
                  <svg className="w-5 h-5" fill="none" stroke={COLORS.gold} viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Envoyez-nous un Message
                </h3>
              </div>

              {/* Form */}
              <div className="p-6">
                {successMessage && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-300 text-green-800 rounded ct-font-body text-sm">
                    {successMessage}
                  </div>
                )}
                {errors.submit && (
                  <div
                    className="mb-4 p-3 rounded ct-font-body text-sm border"
                    style={{ backgroundColor: "rgba(155,50,48,0.08)", borderColor: "rgba(155,50,48,0.3)", color: COLORS.alert }}
                  >
                    {errors.submit}
                  </div>
                )}

                <div className="space-y-4">
                  {/* Nom et Prénom */}
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        className="ct-font-body block text-xs font-semibold tracking-wide uppercase mb-2"
                        style={{ color: "rgba(31,42,68,0.55)" }}
                      >
                        Nom <span style={{ color: COLORS.alert }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border rounded outline-none transition focus:ring-2"
                        style={{
                          borderColor: errors.nom ? COLORS.alert : "rgba(31,42,68,0.15)",
                          "--tw-ring-color": COLORS.gold,
                        }}
                        placeholder="Nom"
                      />
                      {errors.nom && (
                        <p className="mt-1 text-xs" style={{ color: COLORS.alert }}>
                          {errors.nom}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="ct-font-body block text-xs font-semibold tracking-wide uppercase mb-2"
                        style={{ color: "rgba(31,42,68,0.55)" }}
                      >
                        Prénom <span style={{ color: COLORS.alert }}>*</span>
                      </label>
                      <input
                        type="text"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 text-sm border rounded outline-none transition focus:ring-2"
                        style={{
                          borderColor: errors.prenom ? COLORS.alert : "rgba(31,42,68,0.15)",
                          "--tw-ring-color": COLORS.gold,
                        }}
                        placeholder="Prénom"
                      />
                      {errors.prenom && (
                        <p className="mt-1 text-xs" style={{ color: COLORS.alert }}>
                          {errors.prenom}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="ct-font-body block text-xs font-semibold tracking-wide uppercase mb-2"
                      style={{ color: "rgba(31,42,68,0.55)" }}
                    >
                      Email <span style={{ color: COLORS.alert }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border rounded outline-none transition focus:ring-2"
                      style={{
                        borderColor: errors.email ? COLORS.alert : "rgba(31,42,68,0.15)",
                        "--tw-ring-color": COLORS.gold,
                      }}
                      placeholder="votre@email.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs" style={{ color: COLORS.alert }}>
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Téléphone */}
                  <div>
                    <label
                      className="ct-font-body block text-xs font-semibold tracking-wide uppercase mb-2"
                      style={{ color: "rgba(31,42,68,0.55)" }}
                    >
                      Téléphone <span style={{ color: COLORS.alert }}>*</span>
                    </label>
                    <input
                      type="tel"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border rounded outline-none transition focus:ring-2"
                      style={{
                        borderColor: errors.telephone ? COLORS.alert : "rgba(31,42,68,0.15)",
                        "--tw-ring-color": COLORS.gold,
                      }}
                      placeholder="+212 6 00 00 00 00"
                    />
                    {errors.telephone && (
                      <p className="mt-1 text-xs" style={{ color: COLORS.alert }}>
                        {errors.telephone}
                      </p>
                    )}
                  </div>

                  {/* Entreprise */}
                  <div>
                    <label
                      className="ct-font-body block text-xs font-semibold tracking-wide uppercase mb-2"
                      style={{ color: "rgba(31,42,68,0.55)" }}
                    >
                      Entreprise
                    </label>
                    <input
                      type="text"
                      name="entreprise"
                      value={formData.entreprise}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm border rounded outline-none transition focus:ring-2"
                      style={{ borderColor: "rgba(31,42,68,0.15)", "--tw-ring-color": COLORS.gold }}
                      placeholder="Nom de votre entreprise"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="ct-font-body block text-xs font-semibold tracking-wide uppercase mb-2"
                      style={{ color: "rgba(31,42,68,0.55)" }}
                    >
                      Message <span style={{ color: COLORS.alert }}>*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2.5 text-sm border rounded outline-none transition resize-none focus:ring-2"
                      style={{
                        borderColor: errors.message ? COLORS.alert : "rgba(31,42,68,0.15)",
                        "--tw-ring-color": COLORS.gold,
                      }}
                      placeholder="Décrivez votre demande..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs" style={{ color: COLORS.alert }}>
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="ct-font-body w-full font-semibold py-3 rounded transition duration-300 flex items-center justify-center gap-2"
                    style={{
                      backgroundColor: isSubmitting ? "rgba(198,167,94,0.5)" : COLORS.gold,
                      color: COLORS.navy,
                      cursor: isSubmitting ? "not-allowed" : "pointer",
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Envoyer
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}