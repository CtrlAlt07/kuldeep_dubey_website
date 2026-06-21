import { Phone, Star, Sparkles } from "lucide-react";

export function PanditJi() {
  const specializations = [
    "काल सर्प दोष पूजा",
    "मंगल दोष निवारण",
    "रुद्राभिषेक",
    "नवग्रह शांति पूजा",
    "वैदिक अनुष्ठान",
  ];

  return (
    <section id="pandit-ji" className="relative py-24 bg-[#0F0A05] overflow-hidden">
      {/* Background patterns/gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1C1814] to-transparent opacity-50" />
      <div className="absolute -top-[50%] -left-[10%] w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#B8860B]/10 via-transparent to-transparent rotate-12 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2
          className="text-[#FDF6E3] mb-3"
          style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
        >
          पंडित <span className="text-[#F5C842]">कुलदीप दुबे</span>
        </h2>
        <p
          className="text-[#C8590A] text-lg sm:text-xl font-medium mb-8 uppercase tracking-widest"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          नरसिंह घाट, उज्जैन
        </p>

        <div className="flex justify-center mb-10">
          <div className="bg-[#1C1814]/80 backdrop-blur-md border border-[#F5C842]/30 rounded-2xl px-8 py-4 inline-flex flex-col items-center shadow-lg shadow-[#F5C842]/5">
            <p className="text-[#F5C842] font-bold text-3xl mb-1" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
              15+ वर्ष
            </p>
            <div className="flex items-center gap-2">
              <p className="text-[#D4B896] text-sm uppercase tracking-wide" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                का अनुभव एवं मार्गदर्शन
              </p>
            </div>
          </div>
        </div>

        <p
          className="text-[#D4B896] mb-12 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          वैदिक परंपराओं के अनुसार विभिन्न धार्मिक अनुष्ठानों एवं पूजाओं का मार्गदर्शन एवं संपादन। 
          हमारा उद्देश्य शास्त्रोक्त विधि और पूर्ण प्रामाणिकता के साथ यजमान की समस्या का समाधान करना है।
        </p>

        <div className="mb-12">
          <h3
            className="text-[#FDF6E3] text-2xl mb-6 flex items-center justify-center gap-3"
            style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}
          >
            <Sparkles size={24} className="text-[#F5C842]" />
            विशेषज्ञता
            <Sparkles size={24} className="text-[#F5C842]" />
          </h3>
          <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-8 text-left max-w-3xl mx-auto">
            {specializations.map((spec, index) => (
              <li key={index} className="flex items-center justify-center sm:justify-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#F5C842]" />
                <span
                  className="text-[#D4B896] text-lg"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {spec}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href="tel:+918103289895"
          className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#C8590A] to-[#E06010] hover:from-[#E06010] hover:to-[#F27020] text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 shadow-2xl shadow-[#C8590A]/40 hover:shadow-[#C8590A]/60 hover:-translate-y-1 w-full sm:w-auto"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          <Phone size={24} className="animate-pulse" />
          अभी कॉल करें
        </a>
      </div>
    </section>
  );
}
