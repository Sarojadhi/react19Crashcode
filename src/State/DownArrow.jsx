import { motion } from "framer-motion";

const DownArrow = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        animate={{ y: [0, 10, 0] }}     // moves down and back up
        transition={{
          duration: 1,                  // 1 second per loop
          repeat: Infinity,             // loop forever
          ease: "easeInOut",            // smooth easing
        }}
        className="text-3xl"
      >
        ⬇️
      </motion.div>
    </div>
  );
}

export default DownArrow;
