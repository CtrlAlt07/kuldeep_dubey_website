import { Phone, MessageCircle } from "lucide-react";

export function CallToAction() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1662852744966-143f1dde2634?w=1600&h=600&fit=crop&auto=format"
          alt="पूजा में आग"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0F0A05]/88" />
      </div>

      {/* Gold borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Om symbol */}
        <div
          className="text-[#F5C842]/20 text-8xl mb-6 leading-none select-none"
          style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}
        >
          ॐ
        </div>

        <p
          className="text-[#C8590A] text-sm tracking-widest uppercase mb-4"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          ✦ अभी संपर्क करें ✦
        </p>

        <h2
          className="text-[#FDF6E3] mb-6"
          style={{
            fontFamily: "'Tiro Devanagari Hindi', serif",
            fontSize: "clamp(2rem, 5vw, 3.2rem)",
            lineHeight: 1.3,
          }}
        >
          पूजा एवं धार्मिक परामर्श हेतु
          <br />
          <span className="text-[#F5C842]">संपर्क करें</span>
        </h2>

        <p
          className="text-[#D4B896] mb-10 max-w-2xl mx-auto"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: "1.05rem", lineHeight: 1.9 }}
        >
          देर न करें। पंडित कुलदीप दुबे जी से आज ही नि:शुल्क परामर्श लें और जानें
          कि आपके जीवन में आ रही बाधाओं का वैदिक समाधान क्या है।
        </p>

        {/* Phone number prominent */}
        <div className="mb-8">
          <a
            href="tel:+918965800401"
            className="inline-flex items-center gap-3 text-[#F5C842] hover:text-white transition-colors"
            style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            <Phone size={28} className="text-[#C8590A]" />
            +91 81032 89895
          </a>
          <p
            className="text-[#A5927A] text-base mt-2"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            सुबह 6 बजे से रात 10 बजे तक उपलब्ध
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+918965800401"
            className="flex items-center justify-center gap-3 bg-[#C8590A] hover:bg-[#E06010] text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 shadow-xl shadow-[#C8590A]/40 hover:-translate-y-0.5"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            <Phone size={22} />
            अभी फोन करें — निःशुल्क परामर्श
          </a>
          <a
            href="https://wa.me/918965800401?text=नमस्ते%20पंडित%20जी%2C%20मुझे%20पूजा%20की%20जानकारी%20चाहिए"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/50 text-[#25D366] px-10 py-4 rounded-full font-semibold text-lg transition-all duration-200 hover:-translate-y-0.5"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            <MessageCircle size={22} />
            WhatsApp पर बात करें
          </a>
        </div>

        {/* Trust note */}
        <p
          className="text-[#A5927A] text-sm mt-8"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          🔒 आपकी जानकारी पूर्णतः गोपनीय रहेगी • कोई अग्रिम भुगतान आवश्यक नहीं
        </p>
      </div>
    </section>
  );
}
