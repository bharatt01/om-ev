import { motion } from "framer-motion";

const reviews = [
  {
    text: "I have owned three electric scooters. This is the first one that did not feel like a toy.",
    name: "Marcus K.",
    detail: "Volt Prime owner, Berlin",
  },
  {
    text: "Folded it in the back of a taxi last week. Driver did not even notice it was there.",
    name: "Sarah L.",
    detail: "Swift Fold owner, Hamburg",
  },
  {
    text: "85km range is not marketing. I tracked it. It did 87km before the battery light came on.",
    name: "David R.",
    detail: "Aero X1 owner, Munich",
  },
];

export function Trust() {
  return (
    <section className="relative bg-white">
      {/* Top green line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-[3px] bg-[#81C784] origin-left"
      />

      <div className="max-w-[1100px] mx-auto px-6 lg:px-12 py-24 lg:py-32">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
         
          <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-black tracking-[-0.02em] leading-[1.05] text-black">
            Real people.<br />
            <span className="text-[#81C784]">Real rides.</span>
          </h2>
        </motion.div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="relative"
            >
              {/* Quote mark */}
              <span className="absolute -top-2 -left-1 text-6xl font-black text-[#81C784]/10 leading-none">
                "
              </span>

              <p className="text-[15px] leading-[1.7] text-black/50 mb-6 relative z-10">
                {review.text}
              </p>

              <div className="pt-4 border-t border-black/8">
                <p className="text-sm font-bold text-black">{review.name}</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-black/30 mt-0.5">
                  {review.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 lg:mt-24 pt-10 border-t border-black/8 text-center"
        >
          <p className="text-sm text-black/30">
            Every review is from a verified owner. No incentives. No filters.
          </p>
        </motion.div>
      </div>

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