import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const slideUp = {
  initial: {
    y: "100%",
    rotate: 12,
  },
  open: (i) => ({
    y: "0%",
    rotate: 0,
    transition: { duration: 0.5, delay: 0.02 * i, ease: [0.34, 1.36, 0.64, 1] },
  }),
  closed: {
    y: "100%",
    rotate: 12,
    transition: { duration: 0.5 },
  },
};

const TextAnimation = ({ text, once, type }) => {
  const ref = useRef();
  const isInView = useInView(ref, { amount: 1, once });

  if (type === "word") {
    return (
      <>
        <p className="m-0 leading-[1.2] gap-2" ref={ref}>
          {text.split(" ").map((word, index) => {
            return (
              <span
                key={index}
                className="relative overflow-hidden inline-flex mr-1"
              >
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {word}
                </motion.span>
              </span>
            );
          })}
        </p>
        <p className="sr-only">{text}</p>
      </>
    );
  }
  return (
    <>
      <p ref={ref} className="m-0 leading-none gap-2">
        {text.split(" ").map((word, index) => (
          <span key={index}>
            {word.split("").map((letter, index) => (
              <span
                key={index}
                className="relative overflow-hidden inline-flex"
              >
                <motion.span
                  variants={slideUp}
                  initial="initial"
                  custom={index}
                  animate={isInView ? "open" : "closed"}
                  key={index}
                >
                  {letter}
                </motion.span>
              </span>
            ))}
          </span>
        ))}
      </p>
      <p className="sr-only">{text}</p>
    </>
  );
};

export default TextAnimation;
