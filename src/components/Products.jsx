import { motion } from "framer-motion";
import productHero from "../assets/product-hero.jpg";
import cardAero from "../assets/card-aero.jpg";
import cardSwift from "../assets/card-swift.jpg";
import cardUrban from "../assets/card-urban.jpg";

export function Products() {
  return (
    <section id="products" className="relative bg-white">

      {/* HEADER */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
         
          <h2 className="text-[clamp(2.5rem,5.5vw,4rem)] font-black tracking-[-0.03em] leading-[0.95] text-black">
            All Machines One Purpose<br />
            <span className="text-[#81C784]">Smooth Ride , Long Range</span>
          </h2>
        </motion.div>
      </div>

      {/* LINE */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="h-px bg-black/8" />
      </div>

      {/* PRODUCT 1 — VOLT PRIME: FULL WIDTH IMAGE, TEXT BELOW */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 pt-16 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Full width image */}
          <div className="relative bg-[#f5f5f5] overflow-hidden">
            <img
              src={productHero}
              alt="Volt Prime"
              className="w-full h-[50vh] min-h-[320px] max-h-[600px] object-cover"
            />
            <div className="absolute top-5 left-5 bg-black px-3 py-1.5">
              <span className="text-white text-[9px] uppercase tracking-[0.25em] font-bold">
                Flagship
              </span>
            </div>
          </div>

          {/* Text below image */}
          <div className="mt-8 lg:mt-10 max-w-2xl">
            <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#81C784] mb-2">
              The Flagship
            </p>
            <h3 className="text-3xl lg:text-4xl font-black tracking-tight text-black mb-4">
              Volt Prime
            </h3>
            <p className="text-[15px] leading-[1.7] text-black/45 mb-6 max-w-lg">
              Carbon frame. 750W mid-drive. We built this because nothing on the market 
              felt serious enough for daily city riding. 180km range. 14kg. That is not a typo.
            </p>

            <div className="flex gap-8 mb-6">
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-black/30 font-bold mb-1">Range</p>
                <p className="text-xl font-black text-black">180<span className="text-[#81C784] text-xs ml-1">km</span></p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-black/30 font-bold mb-1">Top Speed</p>
                <p className="text-xl font-black text-black">55<span className="text-[#81C784] text-xs ml-1">km/h</span></p>
              </div>
              <div>
                <p className="text-[9px] uppercase tracking-[0.2em] text-black/30 font-bold mb-1">Weight</p>
                <p className="text-xl font-black text-black">14<span className="text-[#81C784] text-xs ml-1">kg</span></p>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-black hover:text-[#81C784] transition-colors duration-300">
              Reserve yours
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>

      {/* LINE */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="h-px bg-black/8" />
      </div>

      {/* PRODUCTS 2,3,4 — THREE COLUMN GRID */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">

          {/* AERO X1 */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-[#f5f5f5] overflow-hidden mb-5">
              <img
                src={cardAero}
                alt="Aero X1"
                className="w-full h-[280px] lg:h-[340px] object-cover"
              />
            </div>
            <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#81C784] mb-1.5">
              For Distance
            </p>
            <h4 className="text-xl font-black tracking-tight text-black mb-2">
              Aero X1
            </h4>
            <p className="text-[13px] leading-[1.6] text-black/40 mb-4">
              85km range. Battery holds 90% after 1,000 cycles. For the commute that never ends.
            </p>
            <div className="flex gap-5">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-black/30 font-bold">Range</p>
                <p className="text-lg font-black text-black">85<span className="text-[#81C784] text-[10px] ml-0.5">km</span></p>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-black/30 font-bold">Speed</p>
                <p className="text-lg font-black text-black">45<span className="text-[#81C784] text-[10px] ml-0.5">km/h</span></p>
              </div>
            </div>
          </motion.div>

          {/* SWIFT FOLD */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <div className="relative bg-[#f5f5f5] overflow-hidden mb-5">
              <img
                src={cardSwift}
                alt="Swift Fold"
                className="w-full h-[280px] lg:h-[340px] object-cover"
              />
            </div>
            <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#81C784] mb-1.5">
              For Agility
            </p>
            <h4 className="text-xl font-black tracking-tight text-black mb-2">
              Swift Fold
            </h4>
            <p className="text-[13px] leading-[1.6] text-black/40 mb-4">
              Folds in 3 seconds. Fits under a desk. Tested on 47 staircases.
            </p>
            <div className="flex gap-5">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-black/30 font-bold">Range</p>
                <p className="text-lg font-black text-black">40<span className="text-[#81C784] text-[10px] ml-0.5">km</span></p>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-black/30 font-bold">Fold</p>
                <p className="text-lg font-black text-black">3<span className="text-[#81C784] text-[10px] ml-0.5">sec</span></p>
              </div>
            </div>
          </motion.div>

          {/* URBAN DRIFT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative bg-[#f5f5f5] overflow-hidden mb-5">
              <img
                src={cardUrban}
                alt="Urban Drift"
                className="w-full h-[280px] lg:h-[340px] object-cover"
              />
            </div>
            <p className="text-[9px] uppercase tracking-[0.25em] font-bold text-[#81C784] mb-1.5">
              For Power
            </p>
            <h4 className="text-xl font-black tracking-tight text-black mb-2">
              Urban Drift
            </h4>
            <p className="text-[13px] leading-[1.6] text-black/40 mb-4">
              120km range. 85Nm torque. The one your friends will want to borrow.
            </p>
            <div className="flex gap-5">
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-black/30 font-bold">Range</p>
                <p className="text-lg font-black text-black">120<span className="text-[#81C784] text-[10px] ml-0.5">km</span></p>
              </div>
              <div>
                <p className="text-[8px] uppercase tracking-[0.2em] text-black/30 font-bold">Speed</p>
                <p className="text-lg font-black text-black">50<span className="text-[#81C784] text-[10px] ml-0.5">km/h</span></p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="bg-black">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 py-14 flex flex-col lg:flex-row items-center justify-between gap-6">
          <p className="text-white text-lg font-black tracking-tight">
            Not sure which one? <span className="text-[#81C784]">Test them all.</span>
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#81C784] text-black text-xs font-bold uppercase tracking-[0.12em] px-8 py-4 hover:bg-white transition-colors duration-300"
          >
            Book a test ride
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}