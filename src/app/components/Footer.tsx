import { Phone, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const serviceLinks = [
  "काल सर्प दोष पूजा",
  "मंगल दोष निवारण",
  "रुद्राभिषेक",
  "महामृत्युंजय जाप",
  "पितृ दोष निवारण",
  "कुंडली मिलान",
];

export function Footer() {
  return (
    <footer className="bg-[#0F0A05] pt-16 pb-8">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div
                className="text-[#F5C842]"
                style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "1.5rem" }}
              >
                पं. कुलदीप दुबे
              </div>
              <div
                className="text-[#A5927A] text-sm tracking-widest uppercase font-medium"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                वैदिक पंडित • उज्जैन
              </div>
            </div>
            <p
              className="text-[#A5927A] text-base leading-relaxed"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.8 }}
            >
              25 वर्षों से महाकालेश्वर उज्जैन में प्रामाणिक वैदिक अनुष्ठान। तीन पीढ़ियों की परंपरा।
            </p>
            <div
              className="mt-4 text-[#F5C842]/20 text-5xl leading-none select-none"
              style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}
            >
              ॐ
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[#D4A96A] mb-4 text-base font-semibold tracking-wider uppercase"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              हमारी सेवाएं
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-[#A5927A] hover:text-[#D4A96A] text-base transition-colors"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    ✦ {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[#D4A96A] mb-4 text-base font-semibold tracking-wider uppercase"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              संपर्क करें
            </h4>
            <div className="space-y-4">
              <a
                href="tel:+918965800401"
                className="flex items-center gap-3 text-[#A5927A] hover:text-[#D4A96A] transition-colors group"
              >
                <Phone size={16} className="text-[#C8590A] shrink-0" />
                <span className="text-base font-medium" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  +91 81032 89895
                </span>
              </a>
              <a
                href="https://wa.me/918965800401"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#A5927A] hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={16} className="text-[#25D366] shrink-0" />
                <span className="text-base font-medium" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  WhatsApp करें
                </span>
              </a>
              <div className="flex items-start gap-3 text-[#A5927A]">
                <MapPin size={16} className="text-[#C8590A] shrink-0 mt-1" />
                <span className="text-base" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.7 }}>
                  नरसिंह घाट,<br />उज्जैन, मध्य प्रदेश
                </span>
              </div>
              <div className="flex items-center gap-3 text-[#A5927A]">
                <Clock size={16} className="text-[#C8590A] shrink-0" />
                <span className="text-base" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
                  सुबह 6 बजे – रात 10 बजे
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[#D4A96A] mb-4 text-base font-semibold tracking-wider uppercase"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              त्वरित संपर्क
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+918965800401"
                className="flex items-center justify-center gap-2 bg-[#C8590A] hover:bg-[#E06010] text-white px-4 py-3 rounded-xl text-base font-semibold transition-colors"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                <Phone size={18} />
                अभी कॉल करें
              </a>
              <a
                href="https://wa.me/918965800401?text=नमस्ते%20पंडित%20जी"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] px-4 py-3 rounded-xl text-base font-semibold transition-colors hover:bg-[#25D366]/20"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                <MessageCircle size={18} />
                WhatsApp संपर्क
              </a>
            </div>

            <div className="mt-6">
              <p
                className="text-[#8C7765] text-sm"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.7 }}
              >
                हम Google Ads के माध्यम से विज्ञापित हैं। विज्ञापन पर क्लिक करने के बाद सीधे हमसे संपर्क करें।
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#B8860B]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[#8C7765] text-sm text-center"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            © 2024 पं. कुलदीप दुबे, उज्जैन। सर्वाधिकार सुरक्षित।
          </p>
          <p
            className="text-[#8C7765] text-sm text-center font-medium"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            🙏 हर हर महादेव • जय महाकाल 🙏
          </p>
        </div>
      </div>
    </footer>
  );
}
