import { motion } from "motion/react";
import svgPaths from '../imports/svg-pcyl7426ct';

export const RobotMascot = () => (
  <motion.div
    className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-2"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
    transition={{
      opacity: { duration: 0.8, ease: "easeOut" },
      scale: { duration: 0.8, ease: "easeOut" },
      y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
    }}
  >
    <motion.svg
      className="block size-full"
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 130 134"
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      transition={{ duration: 0.6 }}
    >
      <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
        <motion.path
          d={svgPaths.p2e3f0380}
          fill="url(#paint0_linear_1_36)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeInOut" }}
        />
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, duration: 0.4, ease: "backOut" }}
        >
          <motion.path
            d={svgPaths.p3ff69700}
            fill="#DAF8E6"
            animate={{ fill: ["#DAF8E6", "#F0FDF4", "#DAF8E6"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />
          <motion.path
            d={svgPaths.p314eeb00}
            fill="#DAF8E6"
            animate={{ fill: ["#DAF8E6", "#F0FDF4", "#DAF8E6"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2.1 }}
          />
        </motion.g>
        <motion.path
          d={svgPaths.p2b46b580}
          fill="#FFC107"
          initial={{ scale: 0, rotateZ: -180 }}
          animate={{ scale: 1, rotateZ: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: "backOut" }}
          style={{ transformOrigin: "center" }}
        />
      </motion.g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_36" x1="-5.1558e-06" x2="101.686" y1="0" y2="110.335">
          <stop offset="0.1" stopColor="#0A9D34" />
          <stop offset="1" stopColor="#08C33D" />
        </linearGradient>
      </defs>
    </motion.svg>
  </motion.div>
);
