import React from "react";
import { motion, px } from "framer-motion";

const works = [
  {
    name: "StartHub",
    work: "Design & Developement",
    link: "/starthub.mp4",
  },
  {
    name: "Travel World",
    work: "Design & Developement",
    link: "/travelworld.mp4",
  },
  {
    name: "NAS Management",
    work: "Design & Developement",
    link: "/nas.mp4",
  },
  {
    name: "Connected",
    work: "Developement",
    link: "/connected.mp4",
  },
  {
    name: "Printing Legacy",
    work: "Developement",
    link: "/printing.mp4",
  },
];

const RecentWorks = () => {
  return (
    <div className="px-20 py-40">
      <h2 className="uppercase">Recent Works</h2>
      <div>
        <ul className="border-t border-black border-dashed mt-10">
          {works.map((work, i) => (
            <motion.li
              key={i}
              initial="rest"
              whileHover="hover"
              animate="rest"
              variants={{
                rest: { paddingBottom: 40 },
                hover: { paddingBottom: 208 },
              }}
              transition={{ duration: 0.5, ease: [0.34, 1.36, 0.64, 1] }}
              className="flex justify-between items-center py-10 border-b border-black border-dashed relative overflow-hidden"
              onMouseEnter={(e) => {
                const video = e.currentTarget.querySelector("video");
                video.play();
              }}
              onMouseLeave={(e) => {
                const video = e.currentTarget.querySelector("video");
                video.pause();
                video.currentTime = 0; // Reset video to the beginning (optional)
              }}
            >
              <span className="text-7xl font-semibold">{work.name}</span>
              <span className="text-2xl">{work.work}</span>
              <motion.div
                className="w-[28vw] absolute mx-auto left-80 right-0 bottom-0"
                variants={{
                  rest: { y: "100%" },
                  hover: { y: "0%" },
                }}
                transition={{ duration: 0.5, ease: [0.34, 1.36, 0.64, 1] }}
              >
                <video
                  src={work.link}
                  muted
                  loop
                  autoplay
                  preload="metadata"
                ></video>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecentWorks;
