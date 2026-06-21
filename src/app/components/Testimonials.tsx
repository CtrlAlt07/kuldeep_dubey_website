import { Star, Quote } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "अनुज वर्मा",
    city: "दिल्ली",
    puja: "काल सर्प दोष पूजा",
    rating: 5,
    text: "पंडित जी से काल सर्प दोष पूजा करवाई। पहले जीवन में बहुत रुकावटें आ रही थीं, नौकरी नहीं मिल रही थी। पूजा के बाद 3 महीने में ही सरकारी नौकरी मिल गई। पंडित जी बहुत विद्वान और सरल स्वभाव के हैं।",
    initials: "अव",
  },
  {
    name: "प्रीति सिंह",
    city: "मुंबई",
    puja: "मंगल दोष निवारण",
    rating: 5,
    text: "मेरी शादी में बहुत बाधाएं आ रही थीं। लड़के वाले बात करते और फिर मना कर देते। पंडित जी से मंगल दोष निवारण करवाया, और 6 महीने में शादी हो गई। भगवान का आशीर्वाद और पंडित जी का आभार।",
    initials: "प्सि",
  },
  {
    name: "रमेश गुप्ता",
    city: "बेंगलुरु",
    puja: "महामृत्युंजय जाप",
    rating: 5,
    text: "मेरे पिताजी बहुत बीमार थे। डॉक्टरों ने जवाब दे दिया था। पंडित जी ने महामृत्युंजय जाप करवाया। भगवान की कृपा से पिताजी ठीक हो गए। ऑनलाइन जुड़कर पूजा में सम्मिलित हुए, अनुभव अद्भुत था।",
    initials: "रगु",
  },
  {
    name: "सुनीता पटेल",
    city: "अहमदाबाद",
    puja: "पितृ दोष निवारण",
    rating: 5,
    text: "परिवार में एक के बाद एक कष्ट आ रहे थे। पंडित जी ने बताया पितृ दोष है। पूजा के बाद सब कुछ ठीक होने लगा। पंडित जी बहुत ईमानदार और समर्पित हैं।",
    initials: "सुप",
  },
  {
    name: "विकास यादव",
    city: "लखनऊ",
    puja: "रुद्राभिषेक",
    rating: 5,
    text: "रुद्राभिषेक की पूजा बहुत भव्य और प्रभावशाली रही। मंत्रोच्चारण से पूरा वातावरण पवित्र हो गया। पंडित जी हर चीज विस्तार से समझाते हैं। अगली बार भी यहीं आऊंगा।",
    initials: "विय",
  },
  {
    name: "कविता शर्मा",
    city: "जयपुर",
    puja: "कुंडली मिलान",
    rating: 5,
    text: "बेटी की शादी से पहले कुंडली मिलान करवाया। पंडित जी ने बहुत विस्तार से बताया। उनकी बात सुनकर दिल को शांति मिली। बहुत अनुभवी और ज्ञानी पंडित हैं।",
    initials: "कश",
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const total = reviews.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  const displayed = [0, 1, 2].map((i) => reviews[(current + i) % total]);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#FDF6E3] relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-12 left-8 text-[#B8860B]/10 text-[200px] leading-none select-none pointer-events-none" style={{ fontFamily: "'Tiro Devanagari Hindi', serif" }}>
        ॐ
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#C8590A] text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            ✦ श्रद्धालुओं की राय ✦
          </p>
          <h2
            className="text-[#1C1814]"
            style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.3 }}
          >
            हमारे श्रद्धालु क्या कहते हैं
          </h2>
          <div className="flex items-center justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="fill-[#F5C842] text-[#F5C842]" />
            ))}
            <span className="text-[#6B5A3E] text-base ml-2" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
              4.9/5 • 2,300+ Google समीक्षाएं
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayed.map((review, i) => (
            <div
              key={i}
              className="bg-[#FFF9EE] border border-[#B8860B]/15 rounded-2xl p-7 relative flex flex-col"
            >
              <Quote size={28} className="text-[#F5C842]/30 mb-4" />
              <p
                className="text-[#6B5A3E] text-base flex-1 mb-6"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.8 }}
              >
                {review.text}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-[#B8860B]/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#C8590A]/10 border border-[#C8590A]/20 flex items-center justify-center">
                    <span
                      className="text-[#C8590A] text-sm font-semibold"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                    >
                      {review.initials}
                    </span>
                  </div>
                  <div>
                    <div
                      className="text-[#1C1814] text-base font-semibold"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                    >
                      {review.name}
                    </div>
                    <div
                      className="text-[#6B5A3E] text-sm"
                      style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                    >
                      {review.city} • {review.puja}
                    </div>
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={12} className="fill-[#F5C842] text-[#F5C842]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nav dots */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-[#B8860B]/30 text-[#B8860B] hover:bg-[#C8590A] hover:text-white hover:border-[#C8590A] transition-all"
          >
            ←
          </button>
          <div className="flex gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-[#C8590A] w-6" : "bg-[#B8860B]/30"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-[#B8860B]/30 text-[#B8860B] hover:bg-[#C8590A] hover:text-white hover:border-[#C8590A] transition-all"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
