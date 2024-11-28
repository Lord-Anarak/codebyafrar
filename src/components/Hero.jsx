"use client";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import TextAnimation from "./TextAnimation";

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const baseVelocity = 2.5;

const Hero = () => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  const directionFactor = useRef(-1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="h-screen bg-primary p-container p-10 overflow-hidden relative">
      <div className="py-10 flex mt-20 justify-between items-center ">
        <h2 className="text-lg gap-2 flex flex-col">
          <TextAnimation text="Freelance" once type={"word"} />
          <TextAnimation text="Designer & Developer" once type={"word"} />
        </h2>
        <div className="px-10 py-5 bg-black text-white rounded-l-full">
          <div></div>
          <h2 className="text-sm">
            Located in <br />
            <span className="text-2xl">Dubai</span>
          </h2>
        </div>
      </div>
      <div className="absolute top-[calc(100vh-350px)]">
        <div className="relative">
          <motion.div
            style={{ x }}
            className="relative flex whitespace-nowrap flex-nowrap"
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              ease: [0.34, 1.36, 0.64, 1],
              delay: 0.3,
            }}
          >
            <h1 className="text-black text-bigTitle font-kenyanCoffee uppercase">
              Muhammed Afrar -&nbsp;
            </h1>
            <h1 className="text-black text-bigTitle font-kenyanCoffee uppercase">
              Muhammed Afrar -&nbsp;
            </h1>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0.5, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.34, 1.36, 0.64, 1] }}
        className="relative bottom-0 h-full z-20"
      >
        <Image
          src="/hero.png"
          width={520}
          height={1000}
          alt="Muhammed Afrar"
          className="absolute bottom-20 left-0 right-0 mx-auto "
        />
      </motion.div>
    </div>
  );
};

export default Hero;
