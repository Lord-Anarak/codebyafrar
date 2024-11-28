import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-primary p-20 pb-5">
      <div className="flex items-start justify-between pb-20 border-b border-black">
        <div className="flex gap-10 items-start">
          <div className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="235"
              height="234"
              viewBox="0 0 235 234"
              fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M209.291 0H234.051V204.074L199.107 204.074V59.6021L24.7092 234L0 209.291L29.9775 179.313L174.347 34.9442H29.9775L29.9775 179.313V0H209.291Z"
                fill="black"
              />
            </svg>
          </div>
          <span className="text-8xl font-medium uppercase p-0 m-0 leading-none">
            Let’s Work <br />
            Together
          </span>
        </div>

        <Link
          href="#"
          className="py-5 px-10 rounded-2xl border-black font-semibold border-2">
          Send Message
        </Link>
      </div>
      <div className="mt-16">
        <h2 className="text-[15.7vw] font-kenyanCoffee uppercase text-center leading-none">
          Muhammed Afrar
        </h2>
        <div className="flex justify-between items-center">
          <p>© Code By Afrar. All Rights Reserved</p>
          <ul className="flex gap-10 items-center">
            <li>
              <Link href="">Instagram</Link>
            </li>
            <li>
              <Link href="">LinkedIn</Link>
            </li>
            <li>
              <Link href="">GitHub</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
