import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);    
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Products", "#products"],
    ["Contact", "#contact"],
  ];

  return (
    <>
      <nav
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md border-b border-black/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 h-20 lg:h-24 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="relative z-50 group"
            onClick={() => setMenuOpen(false)}
          >
            <span className="font-black text-2xl lg:text-3xl tracking-[-0.06em] text-black leading-none">
              OMEV
              <span className="text-[#81C784] group-hover:animate-pulse">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-12">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="relative text-sm font-semibold uppercase tracking-[0.15em] text-black/70 hover:text-black transition-colors duration-300 group py-2"
                >
                  {label}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#81C784] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href="#products"
            className="hidden lg:inline-flex items-center gap-2 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] px-7 py-3.5 hover:bg-[#81C784] hover:text-black transition-all duration-300 group"
          >
            Shop Now
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 group"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-7 h-[2px] bg-black transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <span
              className={`block h-[2px] bg-black transition-all duration-300 ${
                menuOpen ? "w-0 opacity-0" : "w-7 opacity-100"
              }`}
            />
            <span
              className={`block w-7 h-[2px] bg-black transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {links.map(([label, href], i) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-black tracking-[-0.04em] text-black hover:text-[#81C784] transition-colors duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 50 + 100}ms` : "0ms",
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.4s ease, transform 0.4s ease, color 0.3s ease",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href="#products"
            onClick={() => setMenuOpen(false)}
            className="mt-8 inline-flex items-center gap-3 bg-[#81C784] text-black text-sm font-bold uppercase tracking-[0.2em] px-8 py-4 hover:bg-black hover:text-[#81C784] transition-all duration-300"
            style={{
              transitionDelay: menuOpen ? "300ms" : "0ms",
              opacity: menuOpen ? 1 : 0,
              transform: menuOpen ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.4s ease, transform 0.4s ease, background 0.3s ease, color 0.3s ease",
            }}
          >
            Shop Now
          </a>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-12 left-6 right-6 flex justify-between items-end text-[10px] uppercase tracking-[0.3em] text-black/40">
          <span>© 2026</span>
          <span>Electric / Urban</span>
        </div>
      </div>
    </>
  );
}