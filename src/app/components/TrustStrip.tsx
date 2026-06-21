import { CheckCircle2 } from "lucide-react";

export function TrustStrip() {
  const trustPoints = [
    "15+ वर्षों का अनुभव",
    "5000+ सफल अनुष्ठान",
    "भारतभर से श्रद्धालुओं का विश्वास",
    "वैदिक विधि से पूजा",
  ];

  return (
    <section className="relative bg-[#1C1814] border-y border-[#F5C842]/20 py-6 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-3">
              <CheckCircle2 className="text-[#F5C842] shrink-0" size={20} />
              <span
                className="text-[#FDF6E3] font-medium tracking-wide text-base md:text-lg"
                style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              >
                {point}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
