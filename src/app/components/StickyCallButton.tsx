import { Phone, MessageCircle } from "lucide-react";

export function StickyCallButton() {
  return (
    <>
      {/* Mobile sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-[#1C1814] border-t border-[#B8860B]/20 flex">
        <a
          href="tel:+918965800401"
          className="flex-1 flex items-center justify-center gap-2 bg-[#C8590A] py-4 text-white font-semibold text-base"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          <Phone size={20} />
          अभी कॉल करें
        </a>
        <a
          href="https://wa.me/918965800401?text=नमस्ते%20पंडित%20जी%2C%20मुझे%20पूजा%20की%20जानकारी%20चाहिए"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] py-4 text-white font-semibold text-base"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>

      {/* Desktop floating WhatsApp button */}
      <a
        href="https://wa.me/918965800401?text=नमस्ते%20पंडित%20जी%2C%20मुझे%20पूजा%20की%20जानकारी%20चाहिए"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-6 z-50 hidden sm:flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1ebe5d] text-white px-5 py-3 rounded-full shadow-xl shadow-[#25D366]/30 hover:-translate-y-1 transition-all duration-200 group"
      >
        <MessageCircle size={22} />
        <span
          className="text-base font-semibold"
          style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
        >
          WhatsApp
        </span>
      </a>
    </>
  );
}
