import { motion } from "framer-motion";

const AnimationDemo = () => {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">

      {/* 1️⃣ Fade In */}
      <motion.div
        className="bg-blue-500 text-white px-6 py-3 rounded"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        🌟 Fade In
      </motion.div>

      {/* 2️⃣ Slide from Bottom */}
      <motion.div
        className="bg-green-500 text-white px-6 py-3 rounded"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🚀 Slide Up
      </motion.div>

      {/* 3️⃣ Bounce / Pop Effect */}
      <motion.div
        className="bg-pink-500 text-white px-6 py-3 rounded"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
      >
        💥 Bounce In
      </motion.div>

    </div>
  );
};

export default AnimationDemo;
