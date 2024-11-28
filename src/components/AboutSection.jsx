import React from "react";
import TextAnimation from "./TextAnimation";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useTransform,
} from "framer-motion";

const services = [
  "Web Design",
  "App Design",
  "Web Developement",
  "Dashboard Design",
  "Wireframing",
];

const AboutSection = () => {
  const baseX = useMotionValue(0);
  const x = useTransform(baseX, (v) => `${-v % 100}%`);

  useAnimationFrame((t, delta) => {
    baseX.set(baseX.get() + delta / 300);
  });
  return (
    <div className="bg-black pb-10">
      <div className="p-20">
        <h2 className="uppercase font-kenyanCoffee text-bigTitle text-white overflow-hidden leading-none ">
          <TextAnimation text="ABOUT" once />
        </h2>
        <div className="flex items-start gap-10 justify-end mt-10">
          <div>
            <svg
              width="175"
              height="174"
              viewBox="0 0 175 174"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M129.642 25.9841H22.291L22.291 0H155.626H174.038V151.747H40.6264L148.054 151.747V44.3195L40.6264 151.747L18.3735 174L0 155.626L129.642 25.9841Z"
                fill="#515151"
              />
            </svg>
          </div>
          <p className="text-white text-2xl w-[58%]">
            Crafting seamless digital experiences with clean code and creative
            design. From idea to execution, I bring innovation and precision to
            every project. Let’s build something extraordinary.
          </p>
        </div>
      </div>

      <div className="relative bg-white py-5 overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex items-center whitespace-nowrap flex-nowrap relative gap-[2.05rem]"
        >
          {[...services, ...services].map((service, index) => (
            <>
              <p key={index} className="text-3xl">
                {service}
              </p>

              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                >
                  <path
                    d="M17.5 0.5L22.2001 12.7999L34.5 17.5L22.2001 22.2001L17.5 34.5L12.7999 22.2001L0.5 17.5L12.7999 12.7999L17.5 0.5Z"
                    fill="#D9D9D9"
                  />
                </svg>
              </span>
            </>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
