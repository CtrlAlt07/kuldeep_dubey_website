import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "क्या पूजा ऑनलाइन भी हो सकती है?",
    a: "हाँ, हम वीडियो कॉल (WhatsApp/Zoom) के माध्यम से पूजा में जोड़ते हैं। आप घर बैठे भी पूरी पूजा में सम्मिलित हो सकते हैं। पूजा की वीडियो रिकॉर्डिंग भी दी जाती है।",
  },
  {
    q: "पूजा में कितना समय लगता है?",
    a: "पूजा के प्रकार पर निर्भर करता है। साधारण पूजा 2-3 घंटे में होती है, जबकि महामृत्युंजय जाप 6-8 घंटे का होता है। बुकिंग के समय पूरी जानकारी दी जाती है।",
  },
  {
    q: "पूजा की सामग्री कौन लाएगा?",
    a: "हम सभी आवश्यक सामग्री स्वयं व्यवस्थित करते हैं। आपको कुछ भी नहीं लाना होता। सामग्री की लागत पूजा के शुल्क में शामिल होती है।",
  },
  {
    q: "क्या पूजा के बाद कोई गारंटी है?",
    a: "पूजा की प्रामाणिकता और विधि की गारंटी है। परिणाम ईश्वर की कृपा पर निर्भर करता है। हम पूरी निष्ठा से शास्त्रोक्त विधि से पूजा संपन्न करते हैं।",
  },
  {
    q: "क्या मुझे उज्जैन आना होगा?",
    a: "उज्जैन आना सर्वोत्तम है क्योंकि महाकालेश्वर की पावन भूमि पर पूजा का विशेष महत्व है। लेकिन अगर नहीं आ सकते, तो ऑनलाइन विकल्प भी उपलब्ध है।",
  },
  {
    q: "पहले से बुकिंग कैसे करें?",
    a: "फोन या WhatsApp पर संपर्क करें। हम आपसे जन्म विवरण लेकर कुंडली देखेंगे और शुभ मुहूर्त तय करेंगे। 50% अग्रिम भुगतान से तिथि बुक हो जाती है।",
  },
  {
    q: "कौन-कौन से UPI/Payment तरीके स्वीकार होते हैं?",
    a: "PhonePe, Google Pay, Paytm, Bank Transfer — सभी तरीके स्वीकार होते हैं। कैश भी ले सकते हैं। बुकिंग के समय विवरण दिया जाएगा।",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#1C1814]">
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#F5C842] to-transparent" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#C8590A] text-sm tracking-widest uppercase mb-3"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            ✦ अक्सर पूछे जाने वाले प्रश्न ✦
          </p>
          <h2
            className="text-[#FDF6E3]"
            style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "clamp(1.8rem, 4vw, 2.8rem)", lineHeight: 1.3 }}
          >
            आपके प्रश्न, हमारे उत्तर
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                open === i ? "border-[#F5C842]/30 bg-[#B8860B]/8" : "border-[#B8860B]/15 bg-[#B8860B]/3"
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className={`text-base font-medium transition-colors ${open === i ? "text-[#F5C842]" : "text-[#E8D5A3]"}`}
                  style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
                >
                  {faq.q}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-[#B8860B] shrink-0 ml-4 transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5">
                  <p
                    className="text-[#A08060] text-base"
                    style={{ fontFamily: "'Noto Sans Devanagari', sans-serif", lineHeight: 1.8 }}
                  >
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
