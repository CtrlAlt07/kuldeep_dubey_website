import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "पंडित जी", href: "#pandit-ji" },
    { label: "सेवाएं", href: "#services" },
    { label: "हमारे बारे में", href: "#why-us" },
    { label: "प्रक्रिया", href: "#process" },
    { label: "गैलरी", href: "#gallery" },
    { label: "समीक्षाएं", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1C1814]/97 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span
            className="text-[#F5C842] tracking-wide"
            style={{ fontFamily: "'Tiro Devanagari Hindi', serif", fontSize: "1.15rem" }}
          >
            पं. कुलदीप दुबे
          </span>
          <span className="text-[#D4A96A] text-xs tracking-widest uppercase" style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}>
            वैदिक पंडित • उज्जैन
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#E8D5A3] hover:text-[#F5C842] transition-colors text-base font-medium"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+918965800401"
            className="hidden sm:flex items-center gap-2 bg-[#C8590A] hover:bg-[#E06010] text-white px-5 py-2.5 rounded-full text-base font-semibold transition-all duration-200 shadow-md shadow-[#C8590A]/30"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            <Phone size={15} className="shrink-0" />
            अभी कॉल करें
          </a>
          <button
            className="lg:hidden text-[#F5C842] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#1C1814] border-t border-[#B8860B]/20 px-4 py-6 flex flex-col gap-5">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#E8D5A3] hover:text-[#F5C842] transition-colors text-lg font-medium"
              style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+918965800401"
            className="flex items-center justify-center gap-2 bg-[#C8590A] text-white px-6 py-3.5 rounded-full text-base font-semibold mt-2"
            style={{ fontFamily: "'Noto Sans Devanagari', sans-serif" }}
          >
            <Phone size={16} />
            अभी कॉल करें
          </a>
        </div>
      )}
    </header>
  );
}
