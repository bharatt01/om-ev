import { motion, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import hero1 from "../assets/hero.mp4";
import hero2 from "../assets/hero2.mp4";
import hero3 from "../assets/hero3.mp4";

const slides = [
  { id: 1, video: hero1 },
  { id: 2, video: hero2 },
  { id: 3, video: hero3 },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);
  const touchStartX = useRef(null);

  const goTo = useCallback((index, dir) => {
    setDirection(dir);
    setCurrent(index);
  }, []);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 1);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, -1);
  }, [current, goTo]);

  // Touch swipe handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    const threshold = 50;
    if (diff > threshold) next();
    else if (diff < -threshold) prev();
    touchStartX.current = null;
  };

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [next]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-black"
      style={{ marginTop: "5rem" }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 
        Responsive container:
        - Mobile: aspect-[16/9] landscape ratio
        - Desktop: full viewport height (calc(100vh - 5rem))
      */}
      <div className="relative w-full aspect-[16/9] md:aspect-auto md:h-[calc(100vh-5rem)]">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <video
              ref={(el) => { videoRefs.current[current] = el; }}
              muted
              loop
              playsInline
              preload="auto"
              className="w-full h-full object-cover md:object-contain"
            >
              <source src={slides[current].video} type="video/mp4" />
            </video>
          </motion.div>
        </AnimatePresence>

        {/* Gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none z-10" />

        {/* Pagination dots */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 md:gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? 1 : -1)}
              className="group relative p-1"
              aria-label={`Go to slide ${i + 1}`}
            >
              <div
                className={`h-[2px] md:h-[3px] transition-all duration-500 ${
                  i === current
                    ? "bg-[#81C784] w-8 md:w-12"
                    : "bg-white/20 group-hover:bg-white/40 w-6 md:w-12"
                }`}
              />
            </button>
          ))}
        </div>

        {/* Arrows - hidden on mobile */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center border border-white/20 text-white/60 hover:border-[#81C784] hover:text-[#81C784] transition-all duration-300"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={next}
          className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 items-center justify-center border border-white/20 text-white/60 hover:border-[#81C784] hover:text-[#81C784] transition-all duration-300"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Slide counter - hidden on mobile */}
        <div className="hidden md:block absolute bottom-8 right-6 z-20 text-white/30 text-[11px] font-bold tracking-[0.2em]">
          <span className="text-white">{String(current + 1).padStart(2, "0")}</span>
          <span className="mx-2">/</span>
          <span>{String(slides.length).padStart(2, "0")}</span>
        </div>
      </div>

      {/* Top accent line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-0 left-0 right-0 h-[2px] bg-[#81C784] origin-left z-20"
      />
    </section>
  );
}