import { assets } from "../assets/frontend_assets/assets";
import { motion } from "framer-motion";

export function Hero() {
  const separate = {
    hidden: { opacity: 0, y: 0 },
    visible: (custom) => ({
      opacity: 1,
      y: custom * 5,
      transition: { duration: 1.5 },
    }),
  };

  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/* Hero Left Side */}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <motion.p
              className="w-8 md:w-11 h-[2px] bg-[#414141]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            ></motion.p>
            <motion.p
              className="uppercase font-medium text-sm md:text-base"
              initial="hidden"
              animate="visible"
              custom={-1}
              variants={separate}
            >
              Our Best SELLER
            </motion.p>
          </div>

          <motion.h1
            className="uppercase prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={separate}
          >
            latest arrivals
          </motion.h1>

          <div className="flex items-center gap-2">
            <motion.p
              className="font-semibold text-sm md:text-base uppercase"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={separate}
            >
              shop now
            </motion.p>
            <motion.p
              className="w-8 md:w-11 h-[1px] bg-[#414141]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5 }}
            ></motion.p>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <img
        src={assets.hero_img}
        className="w-full sm:w-1/2 animate-pulse inline-block"
        alt="Hero"
      />
    </div>
  );
}

export default Hero;
