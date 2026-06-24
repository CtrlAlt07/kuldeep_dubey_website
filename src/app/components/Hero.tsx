import { Phone, MessageCircle, Star } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1763479168649-8ffb3bbb9103?w=1600&h=1000&fit=crop&auto=format"
          alt="पंडित जी पूजा करते हुए"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F0A05]/92 via-[#1C1814]/75 to-[#0F0A05]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0A05]/80 via-transparent to-[#0F0A05]/30" />
      </div>

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 flex flex-col items-center justify-center w-full text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#B8860B]/20 border border-[#F5C842]/30 rounded-full px-5 py-2 mb-8 shadow-lg shadow-[#F5C842]/5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F5C842] animate-pulse" />
          <span
            className="text-[#F5C842] text-sm tracking-wider uppercase font-medium"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            उज्जैन के विश्वसनीय वैदिक पंडित
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="text-[#FDF6E3] mb-6 leading-tight drop-shadow-xl"
          style={{
            fontFamily: "'Tiro Devanagari Hindi', serif",
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.2,
          }}
        >
          काल सर्प दोष &
          <br />
          <span className="text-[#F5C842]">पूजा-अनुष्ठान</span>
          <br />
          के विशेषज्ञ
        </h1>

        <p
          className="text-[#D4B896] mb-10 max-w-2xl mx-auto"
          style={{
            fontFamily: "'Noto Sans Devanagari', sans-serif",
            fontSize: "1.15rem",
            lineHeight: 1.8,
          }}
        >
          पिछले <strong className="text-[#F5C842]">25 वर्षों</strong> से महाकालेश्वर ज्योतिर्लिंग उज्जैन में
          प्रामाणिक वैदिक विधि से पूजा-अनुष्ठान करवा रहे हैं। अब तक{" "}
          <strong className="text-[#F5C842]">10,000+</strong> परिवारों को लाभ।
        </p>

        {/* Stars */}
        <div className="flex items-center gap-2 justify-center mb-10">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={22} className="fill-[#F5C842] text-[#F5C842] drop-shadow-md" />
          ))}
          <span className="text-[#D4B896] text-base ml-2 font-medium" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            4.9/5 • 2,300+ समीक्षाएं
          </span>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full max-w-2xl mx-auto">
          <a
            href="tel:+918965800401"
            className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-[#C8590A] to-[#E06010] hover:from-[#E06010] hover:to-[#F27020] text-white px-10 py-5 rounded-full text-lg sm:text-xl font-bold transition-all duration-300 shadow-2xl shadow-[#C8590A]/50 hover:shadow-[#C8590A]/70 hover:-translate-y-1"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            <Phone size={24} className="shrink-0 animate-pulse" />
            अभी कॉल करें — निःशुल्क परामर्श
          </a>
          <a
            href="https://wa.me/918965800401?text=नमस्ते%20पंडित%20जी%2C%20मुझे%20पूजा%20की%20जानकारी%20चाहिए"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-none flex items-center justify-center gap-3 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/50 text-[#25D366] px-8 py-5 rounded-full text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            <MessageCircle size={22} className="shrink-0" />
            WhatsApp
          </a>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#FDF6E3] to-transparent" />
    </section>
  );
}
