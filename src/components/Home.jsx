import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

function Home() {
  const [isComplete, setIsComplete] = useState(false);
  const firstText = "Framer Motion is a really cool tool".split(" ");
  const secondText = "School Project by Benjamin S. Petersen".split(" ");

  const initialVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay: i * 0.5
      }
    }),
  };

  const secondTextVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 1,
        delay: 1 + i * 0.5, 
      }
    }),
  };

  useEffect(() => {
    const totalDelay = (firstText.length * 0.5) + 1; 
    const timer = setTimeout(() => setIsComplete(true), totalDelay * 600);
    return () => clearTimeout(timer);
  }, [firstText.length]);

  return (
    <div className="Hero">
      <div className="home-first-text">
        {firstText.map((el, i) => (
          <motion.h1
            variants={initialVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            key={i}
          >
            {el}{" "}
          </motion.h1>
        ))}
      </div>

      <AnimatePresence>
        {isComplete && (
          <div className="home-second-text">
            {secondText.map((el, i) => (
              <motion.span
                variants={secondTextVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                custom={i}
                key={`second-${i}`}
              >
                {el}{" "}
              </motion.span>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Home;
