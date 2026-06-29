import { motion } from "framer-motion";
import { useState } from "react";
import contactFolded from "../assets/contact-folded.jpg";

function InputField({ id, label, type = "text", value, onChange, delay = 0 }) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className="relative"
    >
      {type === "textarea" ? (
        <textarea
          id={id}
          rows={4}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="peer w-full bg-transparent border-0 border-b-2 border-black/15 focus:border-[#81C784] outline-none py-4 text-lg transition-colors duration-300 resize-none"
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="peer w-full bg-transparent border-0 border-b-2 border-black/15 focus:border-[#81C784] outline-none py-4 text-lg transition-colors duration-300"
        />
      )}
      <label
        htmlFor={id}
        className={`absolute left-0 pointer-events-none transition-all duration-300 ${
          active
            ? "-top-2 text-[10px] uppercase tracking-[0.2em] font-bold text-[#81C784]"
            : "top-4 text-base text-black/40"
        } peer-focus:-top-2 peer-focus:text-[10px] peer-focus:uppercase peer-focus:tracking-[0.2em] peer-focus:font-bold peer-focus:text-[#81C784]`}
      >
        {label}
      </label>
    </motion.div>
  );
}

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", city: "", msg: "" });

  const update = (field) => (val) => setForm((p) => ({ ...p, [field]: val }));

  return (
    <section id="contact" className="relative bg-white">
      {/* HEADER STRIP */}
      <div className="bg-black text-white py-20 lg:py-28">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] uppercase tracking-[0.35em] font-bold text-[#81C784] block mb-6">
              04 — Contact
            </span>
            <h2 className="text-[12vw] md:text-[8vw] lg:text-[7rem] font-black tracking-[-0.06em] leading-[0.85]">
              LET'S
              <br />
              <span className="text-[#81C784]">RIDE.</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* LEFT: Form */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg text-black/50 leading-relaxed max-w-md mb-14"
            >
              Test ride a VOLT this week. Drop your details — we'll bring the bike to your block.
            </motion.p>

            <form
              className="space-y-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <InputField
                id="name"
                label="Your Name"
                value={form.name}
                onChange={update("name")}
                delay={0.1}
              />
              <InputField
                id="email"
                label="Email"
                type="email"
                value={form.email}
                onChange={update("email")}
                delay={0.2}
              />
              <InputField
                id="city"
                label="City"
                value={form.city}
                onChange={update("city")}
                delay={0.3}
              />
              <InputField
                id="msg"
                label="Tell us where you ride"
                type="textarea"
                value={form.msg}
                onChange={update("msg")}
                delay={0.4}
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="pt-4"
              >
                <button
                  type="submit"
                  className="group inline-flex items-center gap-4 bg-black text-white font-bold uppercase tracking-[0.15em] text-sm px-10 py-5 hover:bg-[#81C784] hover:text-black transition-all duration-300"
                >
                  Book a test ride
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </motion.div>
            </form>
          </div>

          {/* RIGHT: Image + Info */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[4/5] bg-neutral-100 overflow-hidden"
            >
              <img
                src={contactFolded}
                alt="Folded VOLT scooter"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white p-6">
                <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-black/30 mb-2">
                  Response time
                </div>
                <div className="text-lg font-black">Under 24 hours</div>
              </div>
            </motion.div>

            {/* Side info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-10 space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#81C784]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#81C784]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold">hello@voltmotion.co</div>
                  <div className="text-xs text-black/40 mt-0.5">For all inquiries</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[#81C784]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#81C784]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold">Berlin, Germany</div>
                  <div className="text-xs text-black/40 mt-0.5">Worldwide shipping</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}