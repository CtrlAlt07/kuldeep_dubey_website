import { Shield, Users, Award, Clock } from "lucide-react";

const stats = [
  { icon: Users, value: "10,000+", label: "संतुष्ट परिवार", sub: "पूरे भारत से" },
  { icon: Clock, value: "25+ वर्ष", label: "अनुभव", sub: "वैदिक परंपरा में" },
  { icon: Award, value: "100%", label: "प्रामाणिक विधि", sub: "शास्त्र अनुसार" },
  { icon: Shield, value: "24/7", label: "उपलब्ध", sub: "परामर्श के लिए" },
];

const certBadges = [
  "महाकालेश्वर मंदिर संलग्न",
  "ज्योतिष विद्या विशारद",
  "वेद-पुराण प्रवीण",
  "सरकार मान्यता प्राप्त",
];

export function TrustIndicators() {
  return (
    <section className="bg-[#1C1814] py-16 sm:py-20 relative overflow-hidden">
      {/* Gold top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 25% 50%, #F5C842 1px, transparent 1px),
                          radial-gradient(circle at 75% 50%, #F5C842 1px, transparent 1px)`,
        backgroundSize: "60px 60px",
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 border border-[#B8860B]/20 rounded-xl bg-[#B8860B]/5 hover:bg-[#B8860B]/10 transition-colors"
            >
              <div className="flex justify-center mb-3">
                <div className="w-10 h-10 rounded-full bg-[#C8590A]/20 flex items-center justify-center">
                  <stat.icon size={20} className="text-[#F5C842]" />
                </div>
              </div>
              <div
                className="text-[#F5C842] mb-1"
                style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "1.6rem", lineHeight: 1.2 }}
              >
                {stat.value}
              </div>
              <div
                className="text-[#FDF6E3] text-base font-medium"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {stat.label}
              </div>
              <div
                className="text-[#6B5A3E] text-sm mt-0.5"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Certification badges */}
        <div className="flex flex-wrap justify-center gap-3">
          {certBadges.map((badge) => (
            <span
              key={badge}
              className="flex items-center gap-2 bg-[#B8860B]/10 border border-[#F5C842]/20 rounded-full px-5 py-2.5 text-[#D4A96A] text-base"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              <span className="text-[#F5C842]">✦</span>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />
    </section>
  );
}
