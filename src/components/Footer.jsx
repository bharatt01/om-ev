import { motion } from "framer-motion";
import footerThumb from "../assets/footer-thumb.jpg";

export function Footer() {
  const navLinks = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Products", "#products"],
    ["Contact", "#contact"],
  ];

  const socialLinks = [
    ["Instagram", "#"],
    ["TikTok", "#"],
    ["YouTube", "#"],
    ["X / Twitter", "#"],
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* MARQUEE TICKER */}
      <div className="border-y border-white/10 overflow-hidden py-6">
        <div className="flex whitespace-nowrap animate-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span key={i} className="flex items-center gap-8 mx-8">
              <span className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em]">
                ZERO EMISSIONS
              </span>
              <span className="text-[#81C784] text-2xl">✦</span>
              <span className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-[#81C784]">
                MAXIMUM THRILL
              </span>
              <span className="text-[#81C784] text-2xl">✦</span>
              <span className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em]">
                RIDE LIGHT
              </span>
              <span className="text-[#81C784] text-2xl">✦</span>
              <span className="text-4xl md:text-6xl lg:text-7xl font-black tracking-[-0.04em] text-[#81C784]">
                RIDE FREE
              </span>
              <span className="text-[#81C784] text-2xl">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-12 lg:gap-8">
          {/* BRAND COLUMN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="font-black text-6xl md:text-7xl lg:text-8xl tracking-[-0.06em] leading-[0.85]">
              VOLT
              <span className="text-[#81C784]">.</span>
            </div>
            <p className="mt-8 text-white/40 text-base leading-relaxed max-w-sm">
              Feather-light electric mobility. Engineered for the city. Built for the fearless.
            </p>

            {/* Newsletter */}
            <div className="mt-10 max-w-sm">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 block mb-3">
                Join the ride
              </label>
              <div className="flex border-b border-white/20 focus-within:border-[#81C784] transition-colors">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent py-3 text-sm text-white placeholder:text-white/20 outline-none"
                />
                <button className="text-[#81C784] font-bold uppercase text-[10px] tracking-[0.2em] px-2 hover:text-white transition-colors">
                  Go →
                </button>
              </div>
            </div>
          </motion.div>

          {/* NAVIGATION */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-6 md:col-span-3 lg:col-span-2 lg:col-start-7"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#81C784] mb-6">
              Navigate
            </div>
            <ul className="space-y-4">
              {navLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-[#81C784] group-hover:w-4 transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-6 md:col-span-3 lg:col-span-2"
          >
            <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#81C784] mb-6">
              Follow
            </div>
            <ul className="space-y-4">
              {socialLinks.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="group inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 h-px bg-[#81C784] group-hover:w-4 transition-all duration-300" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="col-span-12 md:col-span-12 lg:col-span-3 flex lg:justify-end items-start"
          >
            <div className="relative group">
              <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#81C784]/10 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={footerThumb}
                  alt="VOLT scooter"
                  width={512}
                  height={512}
                  loading="lazy"
                  className="w-24 h-24 lg:w-28 lg:h-28 object-contain transition-transform duration-700 group-hover:scale-110 group-hover:rotate-6"
                />
              </div>
              {/* Orbiting dot */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 bg-[#81C784] rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            © 2026 VOLT Motion Co. All rights reserved.
          </span>

          <div className="flex items-center gap-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-white/30 hover:text-white/60 transition-colors">
              Terms
            </a>
            <a
              href="#home"
              className="group inline-flex items-center gap-2 text-[#81C784] hover:text-white transition-colors text-[10px] uppercase tracking-[0.2em] font-bold"
            >
              Back to top
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}