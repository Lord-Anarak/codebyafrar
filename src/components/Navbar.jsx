import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header initial={{ opacity: 0.5, y: -100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.34, 1.36, 0.64, 1]}} className="flex justify-between items-center p-4 px-10 absolute left-0 right-0 bg-slate-50 mx-auto w-[95%] top-5 rounded-3xl z-10">
      <div className="font-semibold text-lg">Code By Afrar</div>
      <nav className="uppercase flex gap-5">
        <Link href="/about">About</Link>
        <span>/</span>
        <Link href="/works">Works</Link>
      </nav>
      <Link
        href="/contact"
        aria-label="contact"
        className="p-3 px-7 border-2 border-black rounded-xl">
        Hire Me
      </Link>
    </motion.header>
  );
};

export default Navbar;
