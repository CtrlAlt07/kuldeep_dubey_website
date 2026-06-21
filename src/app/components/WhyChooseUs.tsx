import { CheckCircle2 } from "lucide-react";

const reasons = [
  {
    title: "प्रामाणिक वैदिक परंपरा",
    desc: "हम केवल शास्त्रोक्त विधि से पूजा करते हैं। किसी भी प्रकार की मिलावट या संक्षिप्त विधि नहीं।",
  },
  {
    title: "महाकालेश्वर में विशेष अनुमति",
    desc: "उज्जैन के महाकालेश्वर ज्योतिर्लिंग मंदिर में पूजा करवाने की विशेष अनुमति प्राप्त है।",
  },
  {
    title: "पारदर्शी मूल्य निर्धारण",
    desc: "कोई छिपा हुआ शुल्क नहीं। सब कुछ पहले से स्पष्ट — सामग्री, दक्षिणा, और प्रक्रिया।",
  },
  {
    title: "ऑनलाइन / वर्चुअल पूजा उपलब्ध",
    desc: "अगर आप उज्जैन नहीं आ सकते, तो ऑनलाइन वीडियो कॉल पर भी पूजा में सम्मिलित हो सकते हैं।",
  },
  {
    title: "पूजा के बाद मार्गदर्शन",
    desc: "पूजा के बाद उपाय, दिशा-निर्देश और अनुवर्ती परामर्श निःशुल्क प्रदान किया जाता है।",
  },
  {
    title: "पूरे भारत से यात्री आते हैं",
    desc: "दिल्ली, मुंबई, बेंगलुरु, कोलकाता — हर कोने से श्रद्धालु पंडित जी से पूजा करवाते हैं।",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#1C1814] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(45deg, #F5C842 0px, #F5C842 1px, transparent 0px, transparent 50%)`,
          backgroundSize: "20px 20px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p
              className="text-[#C8590A] text-sm tracking-widest uppercase mb-3"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
            >
              ✦ हमें क्यों चुनें ✦
            </p>
            <h2
              className="text-[#FDF6E3] mb-6"
              style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.3 }}
            >
              विश्वास, परंपरा और
              <br />
              <span className="text-[#F5C842]">सच्ची श्रद्धा</span> का संगम
            </h2>
            <p
              className="text-[#A08060] mb-8"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.9 }}
            >
              पंडित कुलदीप दुबे जी तीन पीढ़ियों से उज्जैन में वैदिक अनुष्ठान संपन्न कराते आ रहे हैं।
              उनका मानना है कि पूजा केवल कर्मकांड नहीं, बल्कि ईश्वर से जीवात्मा का साक्षात्कार है।
            </p>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden border border-[#B8860B]/20">
              <img
                src="https://images.unsplash.com/photo-1646208505943-1a7ed7a62c1b?w=700&h=400&fit=crop&auto=format"
                alt="पंडित जी अनुष्ठान करते हुए"
                className="w-full h-56 object-cover"
              />
            </div>
          </div>

          {/* Right — reasons */}
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="bg-[#B8860B]/5 border border-[#B8860B]/15 rounded-xl p-5 hover:border-[#F5C842]/30 transition-colors"
              >
                <CheckCircle2 size={22} className="text-[#F5C842] mb-3" />
                <h4
                  className="text-[#FDF6E3] mb-2"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", fontWeight: 600, fontSize: "1.1rem" }}
                >
                  {r.title}
                </h4>
                <p
                  className="text-[#A5927A] text-sm md:text-base"
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.7 }}
                >
                  {r.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />
    </section>
  );
}
