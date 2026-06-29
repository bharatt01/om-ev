import { motion } from "framer-motion";
import { ScooterScene } from "./AnimatedScooter";

export default function ScooterShowcase() {
  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">

      {/* Ambient green glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#81C784]/6 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle dot grid */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #81C784 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#81C784] origin-left"
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-12 w-full py-20">

        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.2rem,6vw,5rem)] font-black leading-[0.95] tracking-[-0.03em] text-white mb-5"
          >
            Engineered for the City.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-[15px] leading-[1.8] text-white/35 max-w-[460px] mx-auto"
          >
            Every curve, every gram, every watt — designed to move you 
            through the urban landscape with zero compromise.
          </motion.p>
        </div>

        {/* Scooter showcase area */}
        <div className="relative flex items-center justify-center min-h-[420px] sm:min-h-[520px] lg:min-h-[580px]">

          {/* Road surface */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="absolute bottom-[15%] sm:bottom-[12%] left-1/2 -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-[80px] sm:h-[100px]"
          >
            {/* Road base */}
            <div className="absolute inset-0 bg-[#1a1a1a] rounded-[50%] blur-sm" />

            {/* Road highlight */}
            <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 rounded-full" />

            {/* Center dashed line */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center gap-4 sm:gap-6">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.08 }}
                  className="w-6 sm:w-8 h-[2px] bg-[#81C784]/40 rounded-full"
                />
              ))}
            </div>
          </motion.div>

          {/* Road perspective lines */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute bottom-[8%] sm:bottom-[6%]  w-[70%] sm:w-[60%] md:w-[50%]"
          >
            <div className="relative h-[60px] sm:h-[80px]">
              {/* Left perspective line */}
              <div 
                className="absolute left-0 top-0 w-[1px] h-full bg-white/[0.06] origin-top"
                style={{ transform: 'rotate(12deg)' }}
              />
              {/* Right perspective line */}
              <div 
                className="absolute right-0 top-0 w-[1px] h-full bg-white/[0.06] origin-top"
                style={{ transform: 'rotate(-12deg)' }}
              />
            </div>
          </motion.div>

          {/* Rotating outer ring */}
          <motion.div
            initial={{ opacity: 0, rotate: -90 }}
            whileInView={{ opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[340px] h-[340px] sm:w-[440px] sm:h-[440px] md:w-[540px] md:h-[540px] lg:w-[620px] lg:h-[620px] rounded-full border border-[#81C784]/15 pointer-events-none"
          >
            {/* Tick marks */}
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-[1px] h-3 bg-[#81C784]/30"
                style={{
                  top: '0',
                  left: '50%',
                  transform: `rotate(${i * 30}deg)`,
                  transformOrigin: `0 ${170}px`
                }}
              />
            ))}
          </motion.div>

          {/* Middle ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[440px] md:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full border border-[#81C784]/10 pointer-events-none"
          />

          {/* Inner ring with dash */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full border border-dashed border-[#81C784]/8 pointer-events-none"
          />

          {/* Scooter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[520px] z-10"
          >
            <ScooterScene />
          </motion.div>

          {/* Left spec card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <div className="text-right space-y-8">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25 mb-1.5">Range</div>
                <div className="text-3xl font-black text-white tracking-tight">85<span className="text-[#81C784] text-base ml-1 font-bold">km</span></div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25 mb-1.5">Battery</div>
                <div className="text-3xl font-black text-white tracking-tight">36<span className="text-[#81C784] text-base ml-1 font-bold">V</span></div>
              </div>
            </div>
          </motion.div>

          {/* Right spec card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.15 }}
            className="absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 hidden md:block"
          >
            <div className="space-y-8">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25 mb-1.5">Top Speed</div>
                <div className="text-3xl font-black text-white tracking-tight">45<span className="text-[#81C784] text-base ml-1 font-bold">km/h</span></div>
              </div>
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25 mb-1.5">Weight</div>
                <div className="text-3xl font-black text-white tracking-tight">12.5<span className="text-[#81C784] text-base ml-1 font-bold">kg</span></div>
              </div>
            </div>
          </motion.div>

          {/* Mobile specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 1.2 }}
            className="absolute -bottom-2 left-0 right-0 flex justify-center gap-8 md:hidden"
          >
            {[
              ["85", "km", "Range"],
              ["45", "km/h", "Speed"],
              ["12.5", "kg", "Weight"],
            ].map(([num, unit, label]) => (
              <div key={label} className="text-center">
                <div className="text-xl font-black text-white">{num}<span className="text-[#81C784] text-xs ml-0.5">{unit}</span></div>
                <div className="text-[8px] uppercase tracking-[0.2em] text-white/30 mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 1.3 }}
          className="text-center mt-20 lg:mt-24"
        >
          <a
            href="#specs"
            className="group inline-flex items-center gap-3 border border-[#81C784]/30 text-[#81C784] text-[11px] font-bold uppercase tracking-[0.15em] px-9 py-4 hover:bg-[#81C784] hover:text-black hover:border-[#81C784] transition-all duration-300"
          >
            Explore Full Specifications
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Bottom accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#81C784] origin-right"
      />
    </section>
  );
}