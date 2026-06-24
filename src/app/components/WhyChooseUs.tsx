import { CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

const reasons = [
  {
    title: "प्रामाणिक वैदिक परंपरा",
    desc: "हम केवल शास्त्रोक्त विधि से पूजा करते हैं। किसी भी प्रकार की मिलावट या संक्षिप्त विधि नहीं।",
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
          <div className="lg:-mt-12">
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

            {/* Video */}
            <Dialog>
              <DialogTrigger asChild>
                <div className="rounded-2xl overflow-hidden border border-[#B8860B]/20 relative cursor-pointer group">
                  <video
                    src="/photos/video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-black/60 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#F5C842] group-hover:border-[#F5C842] transition-all duration-300 group-hover:scale-110">
                      <div className="w-0 h-0 border-y-[9px] border-y-transparent border-l-[14px] border-l-white ml-1"></div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 bg-black border-none shadow-none overflow-hidden [&>button]:text-white">
                <video
                  src="/photos/video.mp4"
                  controls
                  autoPlay
                  className="w-full max-h-[85vh] object-contain"
                />
              </DialogContent>
            </Dialog>
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
