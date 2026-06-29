import { motion } from "framer-motion";
import scooterImage from "../assets/scooter.png";
import roadVideo from "../assets/road.mp4";
export function ScooterScene() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 120 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full"
    >
      {/* Scooter image container */}
      <div className="relative z-10 flex justify-center">
        <motion.img
          src={scooterImage}
          alt="Electric Scooter"
          className="w-full max-w-[520px] h-auto object-contain"
          style={{ 
            filter: "drop-shadow(0 25px 40px rgba(0,0,0,0.25))",
            marginBottom: "-60px"
          }}
          animate={{ y: [0, -4, 0, -2, 0] }}
          transition={{
            duration: 0.6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Road video */}
      <div className="relative w-full h-[70px] overflow-hidden rounded-b-xl">
        <video
          className="absolute w-full h-[300%] object-cover"
          style={{ top: "-240%" }}
          src={roadVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        
        {/* Gradient overlay to blend scooter into road */}
    
        
        {/* Bottom vignette for depth */}
        <div 
          className="absolute inset-x-0 bottom-0 h-8 z-10"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.15) 0%, transparent 100%)"
          }}
        />
      </div>

      {/* Speed lines — subtle, behind everything */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{
              duration: 1.2 + i * 0.25,
              delay: i * 0.12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[1px] bg-black/8"
            style={{
              top: `${60 + i * 12}%`,
              width: `${80 + i * 40}px`,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
