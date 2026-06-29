import { motion } from "framer-motion";
import teamImg from "../assets/about-team.jpg";
import workshopImg from "../assets/about-workshop.jpg";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white">

      {/* Top green line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-[3px] bg-[#81C784] origin-left"
      />

      {/* HERO IMAGE — FULL WIDTH, EDGE TO EDGE */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative w-full h-[50vh] lg:h-[65vh] overflow-hidden"
      >
        <img
          src={teamImg}
          alt="The team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="max-w-[1280px] mx-auto">
            <h2 className="text-white text-[clamp(2rem,5vw,4rem)] font-black tracking-[-0.03em] leading-[0.95]">
              We got tired of bad options.<br />
              <span className="text-[#81C784]">So we built our own.</span>
            </h2>
          </div>
        </div>
      </motion.div>

      {/* STORY — OFFSET LAYOUT */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

          {/* Left: Label + headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#81C784]" />
              <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-black/35">
                Our Story
              </span>
            </div>
            <h3 className="text-2xl lg:text-3xl font-black tracking-tight text-black leading-[1.1]">
              Four riders.<br />One workshop.
            </h3>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 lg:col-start-6"
          >
            <p className="text-[15px] leading-[1.8] text-black/45 mb-5">
              Every scooter we tried had the same problem. Too heavy to carry upstairs. 
              Too slow to be useful. Too ugly to leave outside. Too expensive to justify.
            </p>
            <p className="text-[15px] leading-[1.8] text-black/45 mb-5">
              We are four people who ride every day. We started this because we needed 
              something that did not exist.
            </p>
            <p className="text-[15px] leading-[1.8] text-black/45">
              That is what we make now. It is not for everyone. It is for people who 
              actually ride.
            </p>
          </motion.div>
        </div>
      </div>

      {/* IMAGE BREAK — FULL WIDTH, ASYMMETRIC */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="w-full lg:w-[85%] h-[300px] lg:h-[500px] overflow-hidden"
        >
          <img
            src={workshopImg}
            alt="Our workshop"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlapping text block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[400px] bg-black p-8 lg:p-12 mt-6 lg:mt-0"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#81C784] mb-3">
            The Workshop
          </p>
          <p className="text-white text-[15px] leading-[1.7]">
            We work out of a converted warehouse in the city center. We test prototypes 
            on the same streets our customers ride. We answer emails ourselves.
          </p>
        </motion.div>
      </div>

      {/* VALUES — STRIPPED BACK */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#81C784] mb-3">01</p>
            <h4 className="text-lg font-black tracking-tight text-black mb-3">Light matters</h4>
            <p className="text-[14px] leading-[1.7] text-black/40">
              Our heaviest model is 18kg. Our lightest is 12.5kg. We do not think that is a compromise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#81C784] mb-3">02</p>
            <h4 className="text-lg font-black tracking-tight text-black mb-3">Built for streets</h4>
            <p className="text-[14px] leading-[1.7] text-black/40">
              We test on real streets, not smooth factory floors. Every frame is rated for 100,000 vibration cycles.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#81C784] mb-3">03</p>
            <h4 className="text-lg font-black tracking-tight text-black mb-3">No false choices</h4>
            <p className="text-[14px] leading-[1.7] text-black/40">
              You should not have to pick between range and weight. Between speed and foldability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FACTS — BLACK STRIP */}
      <div className="bg-black">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0 }}
            >
              <p className="text-3xl lg:text-4xl font-black text-white mb-1">4</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">people on the team</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <p className="text-3xl lg:text-4xl font-black text-white mb-1">2024</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">year we started</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-3xl lg:text-4xl font-black text-white mb-1">1000+</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">test rides completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <p className="text-3xl lg:text-4xl font-black text-[#81C784] mb-1">0</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/30">outside investors</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* BOTTOM CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center py-16 lg:py-20"
      >
        <p className="text-xl font-black tracking-tight text-black mb-3">
          See what we built.
        </p>
        <a
          href="#products"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black hover:text-[#81C784] transition-colors duration-300"
        >
          View the scooters
          <span>→</span>
        </a>
      </motion.div>

      {/* Bottom green line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-[3px] bg-[#81C784] origin-right"
      />
    </section>
  );
}