import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    num: "01",
    title: "Configure",
    desc: "Pick your model. Choose your color. Add accessories.",
    detail: "3 models • 5 colors • 12 accessories",
  },
  {
    num: "02",
    title: "Reserve",
    desc: "Drop your details. We hold your slot for 48 hours.",
    detail: "Free cancellation",
  },
  {
    num: "03",
    title: "Test Ride",
    desc: "We bring the bike to your block. Ride it. Feel it.",
    detail: "Same-day in Berlin",
  },
  {
    num: "04",
    title: "Ride Free",
    desc: "Love it? We finalize. Zero pressure, maximum thrill.",
    detail: "2-year warranty",
  },
];

export function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="relative bg-black text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-24 lg:py-32">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 lg:mb-28"
        >
        
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-black tracking-[-0.03em] leading-[0.95]">
            From config to street.<br />
            <span className="text-[#81C784]">Four steps.</span>
          </h2>
        </motion.div>

        {/* STEPS — FULL WIDTH, HORIZONTAL ON DESKTOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setActiveStep(i)}
              className={`relative p-8 lg:p-10 border border-white/10 transition-all duration-500 cursor-pointer ${
                activeStep === i ? "bg-white/[0.03] border-[#81C784]/30" : "bg-transparent hover:bg-white/[0.02]"
              }`}
            >
              {/* Number */}
              <span className={`block text-4xl font-black mb-4 transition-colors duration-300 ${
                activeStep === i ? "text-[#81C784]" : "text-white/10"
              }`}>
                {step.num}
              </span>

              {/* Title */}
              <h3 className={`text-lg font-black tracking-tight mb-3 transition-colors duration-300 ${
                activeStep === i ? "text-white" : "text-white/50"
              }`}>
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-[13px] leading-[1.6] text-white/40 mb-4">
                {step.desc}
              </p>

              {/* Detail */}
              <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#81C784]/70">
                {step.detail}
              </span>

              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>

        {/* ACTIVE STEP DETAIL */}
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <p className="text-sm text-white/30">
            Step <span className="text-[#81C784] font-black">{activeStep + 1}</span> of {steps.length}: <span className="text-white/50">{steps[activeStep].title}</span>
          </p>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/10">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">Ready to start?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#81C784] text-black text-xs font-bold uppercase tracking-[0.12em] px-7 py-3.5 hover:bg-white transition-colors duration-300"
          >
            Configure your ride
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
