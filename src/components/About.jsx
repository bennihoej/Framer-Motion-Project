import {motion, AnimatePresence} from "framer-motion";
import { useState } from "react";

const About = () => {
    return (
      <motion.div
      drag
      dragConstraints={{
        top: -50,
        left: -50,
        right: 50,
        bottom: 50,
      }}
      dragElastic={0.3}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "blue",
        color: "white",
        padding: "10px",
      }}
    >
      Drag me around!
    </motion.div>
    )
  }

  export default About;