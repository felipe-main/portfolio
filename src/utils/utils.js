import { motion } from "framer-motion";
export default function appearUp(content, timeDuration) {
  return (
    <motion.div
      whileInView={{ y: [0, 0], opacity: [0, 1] }}
      transition={{ duration: timeDuration, ease: "easeInOut" }}
      style={{ display: "inline-block" }}
    >
      {content}
    </motion.div>
  );
}
