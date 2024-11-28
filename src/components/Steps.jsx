import Image from "next/image";
import React from "react";

const Steps = () => {
  return (
    <div className="px-20 pb-40">
      <div className="bg-black rounded-3xl flex justify-between gap-20 items-start px-20 py-20">
        <div className="w-[50%] text-white">
          <h3 className="font-kenyanCoffee text-[10rem] leading-none">
            Define
          </h3>
          <h3 className="font-kenyanCoffee text-[10rem] leading-none">
            Design
          </h3>
          <h3 className="font-kenyanCoffee text-[10rem] leading-none">
            Deliver
          </h3>
          <p className="text-gray-200 text-lg mt-10">
            Laying the foundation by understanding client goals, identifying
            challenges, and outlining a clear strategy to ensure every project
            starts with purpose and direction.
          </p>
        </div>
        <div className="relative w-1/2 h-[700px]">
          <Image src="/design.jpg" alt="design" fill objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Steps;
