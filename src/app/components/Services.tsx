import { Phone } from "lucide-react";

const services = [
  {
    icon: "🐍",
    title: "काल सर्प दोष पूजा",
    desc: "कुंडली में राहु-केतु के मध्य सभी ग्रहों की स्थिति से उत्पन्न दोष का निवारण। जीवन में बाधाओं, असफलताओं एवं कष्टों से मुक्ति।",
    duration: "4-5 घंटे",
    popular: true,
  },
  {
    icon: "♂",
    title: "मंगल दोष निवारण पूजा",
    desc: "विवाह में आ रही बाधाओं, मांगलिक दोष के प्रभाव को कम करने के लिए प्रामाणिक वैदिक अनुष्ठान।",
    duration: "3-4 घंटे",
    popular: false,
  },
  {
    icon: "🕉️",
    title: "रुद्राभिषेक",
    desc: "भगवान शिव को जल, दूध, दही, घी, शहद से अभिषेक। सुख-समृद्धि, स्वास्थ्य लाभ एवं मनोकामना पूर्ति के लिए।",
    duration: "2-3 घंटे",
    popular: false,
  },
  {
    icon: "🔱",
    title: "महामृत्युंजय जाप",
    desc: "मृत्युतुल्य कष्ट, गंभीर रोग, दुर्घटना के भय से मुक्ति के लिए 1,08,000 जाप के साथ हवन।",
    duration: "6-8 घंटे",
    popular: false,
  },
  {
    icon: "🪔",
    title: "पितृ दोष निवारण",
    desc: "पूर्वजों की अतृप्त आत्मा के कारण परिवार में आ रही बाधाओं का निवारण। श्राद्ध, तर्पण एवं पिंडदान।",
    duration: "4-5 घंटे",
    popular: false,
  },
  {
    icon: "✨",
    title: "कुंडली मिलान व परामर्श",
    desc: "विवाह से पहले कुंडली मिलान, गुण मिलान, मांगलिक दोष विचार एवं विवाह मुहूर्त निकालना।",
    duration: "1 घंटे",
    popular: false,
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <p
            className="text-[#C8590A] text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            ✦ हमारी सेवाएं ✦
          </p>
          <h2
            className="text-[#1C1814] mb-4"
            style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.3 }}
          >
            वैदिक अनुष्ठान एवं पूजा सेवाएं
          </h2>
          <p
            className="text-[#6B5A3E] max-w-2xl mx-auto"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontSize: "1rem", lineHeight: 1.8 }}
          >
            प्रत्येक पूजा शास्त्र-सम्मत विधि से, शुद्ध सामग्री के साथ, अनुभवी पंडित जी की देख-रेख में संपन्न होती है।
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc) => (
            <div
              key={svc.title}
              className={`relative bg-[#FFF9EE] border rounded-2xl p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${
                svc.popular ? "border-[#F5C842]/60 shadow-lg shadow-[#F5C842]/10" : "border-[#B8860B]/15"
              }`}
            >
              {svc.popular && (
                <div className="absolute -top-3 left-6">
                  <span
                    className="bg-[#C8590A] text-white text-xs px-3 py-1 rounded-full"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                  >
                    सबसे लोकप्रिय
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-3xl mb-4">{svc.icon}</div>

              <h3
                className="text-[#1C1814] mb-3"
                style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "1.2rem", lineHeight: 1.4 }}
              >
                {svc.title}
              </h3>
              <p
                className="text-[#6B5A3E] text-base mb-5"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.8 }}
              >
                {svc.desc}
              </p>

              {/* Meta */}
              <div className="flex justify-center mb-5 pt-4 border-t border-[#B8860B]/10">
                <span
                  className="text-[#6B5A3E] text-sm bg-[#EDE0C4] px-4 py-1.5 rounded-full font-medium"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  ⏱ अनुष्ठान अवधि: {svc.duration}
                </span>
              </div>

              <a
                href="tel:+918103289895"
                className="w-full flex items-center justify-center gap-2 bg-[#1C1814] group-hover:bg-[#C8590A] text-white py-3.5 rounded-xl text-base font-medium transition-all duration-300"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                <Phone size={15} />
                परामर्श लें
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
