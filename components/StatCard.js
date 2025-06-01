import { motion } from "framer-motion";
import CountUp from "./CountUp";

const StatCard = ({
  end,
  suffix = "",
  prefix = "",
  label,
  delay = 0,
  bgColor = "bg-white",
  textColor = "text-gray-800",
  numberColor = "text-green-500"
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className={`${bgColor} p-4 md:p-6 rounded-lg shadow-lg`}
    >
      <CountUp
        end={end}
        duration={2}
        suffix={suffix}
        prefix={prefix}
        label={label}
        textColor={textColor}
        numberColor={numberColor}
        numberSize="text-3xl md:text-5xl"
        labelSize="text-sm md:text-xl"
      />
    </motion.div>
  );
};

export default StatCard;
