const steps = [
  {
    num: "01",
    title: "कॉल / WhatsApp पर संपर्क",
    desc: "पंडित जी से सीधे फोन या WhatsApp पर बात करें। अपनी समस्या और जन्म विवरण साझा करें।",
    icon: "📞",
  },
  {
    num: "02",
    title: "कुंडली विश्लेषण",
    desc: "आपकी जन्म-कुंडली देखकर दोष की पहचान की जाती है और उचित पूजा का सुझाव दिया जाता है।",
    icon: "📜",
  },
  {
    num: "03",
    title: "तिथि और मुहूर्त निर्धारण",
    desc: "पंचांग के अनुसार शुभ तिथि, नक्षत्र और मुहूर्त तय किया जाता है।",
    icon: "📅",
  },
  {
    num: "04",
    title: "पूजा सामग्री तैयारी",
    desc: "शुद्ध और प्रामाणिक सामग्री एकत्र की जाती है। आपको यहाँ कुछ नहीं लाना होता।",
    icon: "🪷",
  },
  {
    num: "05",
    title: "विधिवत पूजा अनुष्ठान",
    desc: "मंत्रोच्चारण, हवन, अभिषेक — पूरी विधि के साथ पूजा संपन्न की जाती है। आप ऑनलाइन भी जुड़ सकते हैं।",
    icon: "🔥",
  },
  {
    num: "06",
    title: "प्रसाद और उपाय",
    desc: "पूजा का प्रसाद आपके घर भेजा जाता है। साथ ही अनुवर्ती उपाय और मार्गदर्शन दिया जाता है।",
    icon: "🎁",
  },
];

export function Timeline() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-[#FDF6E3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C8590A] text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            ✦ पूजा की प्रक्रिया ✦
          </p>
          <h2
            className="text-[#1C1814]"
            style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.3 }}
          >
            कैसे होती है पूजा?
          </h2>
          <p
            className="text-[#6B5A3E] mt-4 max-w-xl mx-auto"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.8 }}
          >
            हमारी पूरी प्रक्रिया पारदर्शी है। नीचे देखें कैसे कदम दर कदम आपकी पूजा संपन्न होती है।
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#B8860B]/30 to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, idx) => (
              <div
                key={step.num}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-12 items-center ${
                  idx % 2 === 0 ? "" : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1"
                } mb-8 lg:mb-0`}
              >
                {/* Content card */}
                <div className={`${idx % 2 === 0 ? "lg:text-right lg:pr-8" : "lg:text-left lg:pl-8"}`}>
                  <div
                    className={`bg-[#FFF9EE] border border-[#B8860B]/15 rounded-2xl p-6 hover:shadow-lg hover:border-[#F5C842]/30 transition-all duration-300 ${
                      idx % 2 === 0 ? "lg:ml-auto" : ""
                    }`}
                  >
                    <div className={`flex items-start gap-4 ${idx % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <span className="text-2xl shrink-0">{step.icon}</span>
                      <div>
                        <div
                          className="text-[#C8590A] text-sm font-mono mb-1"
                          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                        >
                          चरण {step.num}
                        </div>
                        <h3
                          className="text-[#1C1814] mb-2"
                          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
                        >
                          {step.title}
                        </h3>
                        <p
                          className="text-[#6B5A3E] text-base"
                          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.7 }}
                        >
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot — desktop */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#C8590A] items-center justify-center text-white text-xs font-bold z-10 shadow-lg shadow-[#C8590A]/40">
                  {step.num}
                </div>

                {/* Empty col for alternating layout */}
                <div />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
