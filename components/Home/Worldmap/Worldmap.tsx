'use client';
import { motion } from "framer-motion";

// fadeIn function
const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 2) => ({
  hidden: {
    y: direction === "up" ? 50 : -50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
    },
  },
});

// staggerContainer animation
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

// TypingText component
interface TypingTextProps {
  text: string;
  delay?: number;
  style?: React.CSSProperties;
}

const TypingText = ({ text, delay = 0 }: TypingTextProps) => (
  <motion.h2
    variants={fadeIn("up", "tween", delay, 2)}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold text-center text-blue-300"
  >
    {text}
  </motion.h2>
);

const Map = () => (
  <section className="relative z-10 bg-[#f7f6fb] py-10 dark:bg-slate-500">
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="relative w-full h-[550px]"
    >
      {/* map image */}
      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 2)}
        className="relative w-full h-full"
      >
        <img
          src="/images/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />

        {/* Text */}
        <motion.div
          variants={staggerContainer}
          className="absolute inset-0 flex flex-col items-center justify-center space-y-4"
        >
          <TypingText
            text="Welcome to the KATEC"
            delay={0.5}
            style={{ color: "#FF5733" }}
          />
          <TypingText
            text="Explore and Connect"
            delay={1.5}
            style={{ color: "rgb(0, 128, 255)" }}
          />
        </motion.div>
      </motion.div>

      {/* Location icon (random) */}
      <motion.div
        variants={fadeIn("up", "tween", 0.6, 2)}
        className="hidden md:block absolute bottom-20 right-80 sm:bottom-16 sm:right-64 md:bottom-14 md:right-56 lg:bottom-20 lg:right-80 w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]"
      >
        <img
          src="/images/people-01.png"
          alt="people1"
          className="w-full h-full"
        />
      </motion.div>

      {/* Location icon (Vancouver) */}
      <motion.div
        variants={fadeIn("up", "tween", 0.7, 2)}
        className="hidden md:block absolute top-[25%] left-[18%] sm:top-[22%] sm:left-[15%] md:top-[20%] md:left-[12%] lg:top-[25%] lg:left-[18%] w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]"
      >
        <img
          src="/images/people-02.png"
          alt="people2"
          className="w-full h-full"
        />
      </motion.div>

      {/* Location icon (South Korea) */}
      <motion.div
        variants={fadeIn("up", "tween", 0.8, 2)}
        className="hidden md:block absolute top-[15%] right-[30%] sm:top-[13%] sm:right-[25%] md:top-[10%] md:right-[20%] lg:top-[15%] lg:right-[30%] w-[60px] h-[60px] sm:w-[50px] sm:h-[50px] md:w-[40px] md:h-[40px] lg:w-[70px] lg:h-[70px] p-[6px] rounded-full bg-[#5d6680]"
      >
        <img
          src="/images/people-03.png"
          alt="people3"
          className="w-full h-full"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default Map;
