import { useState } from "react";

const photos = [
  {
    src: "/photos/photo1.jpeg",
    alt: "हवन अग्नि प्रज्वलन",
    label: "हवन अनुष्ठान",
  },
  {
    src: "/photos/photo2.jpeg",
    alt: "दीप प्रज्वलन पूजा",
    label: "रुद्राभिषेक",
  },
  {
    src: "/photos/photo3.jpeg",
    alt: "सामूहिक पूजा अनुष्ठान",
    label: "सामूहिक पूजा",
  },
  {
    src: "/photos/photo4.jpeg",
    alt: "यज्ञ कुंड में आहुति",
    label: "महामृत्युंजय जाप",
  },
  {
    src: "/photos/photo5.jpeg",
    alt: "पूजा में श्रद्धालु",
    label: "पितृ दोष निवारण",
  },
  {
    src: "/photos/photo6.jpeg",
    alt: "मंदिर में पूजन",
    label: "मंदिर पूजन",
  },
  {
    src: "/photos/photo7.jpeg",
    alt: "काल सर्प दोष पूजा निवारण",
    label: "काल सर्प दोष पूजा",
  },
  {
    src: "/photos/photo8.jpeg",
    alt: "मंगल शांति अनुष्ठान",
    label: "मंगल दोष निवारण",
  },
  {
    src: "/photos/photo9.jpeg",
    alt: "वैदिक मंत्रोच्चार एवं अभिषेक",
    label: "वैदिक अभिषेक",
  },
];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#1C1814]">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#C8590A] text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            ✦ गैलरी ✦
          </p>
          <h2
            className="text-[#FDF6E3]"
            style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.3 }}
          >
            मंदिर एवं पूजा के दृश्य
          </h2>
          <p
            className="text-[#6B5A3E] mt-4"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.8 }}
          >
            यहाँ देखें वास्तविक अनुष्ठानों के कुछ दृश्य।
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="relative group cursor-pointer rounded-xl overflow-hidden aspect-[4/3] bg-[#2D2520]"
              onClick={() => setActive(idx)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A05]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span
                  className="text-[#F5C842] text-sm font-medium"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {photo.label}
                </span>
              </div>
              {/* Gold corner accent */}
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#F5C842]/40 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActive(null)}
        >
          <div className="max-w-3xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[active].src}
              alt={photos[active].alt}
              className="w-full rounded-xl"
            />
            <p
              className="text-center text-[#F5C842] mt-4"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              {photos[active].label}
            </p>
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={() => setActive(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
