"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementData = [
  {
    metric: "Years",
    value: 1,
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Projects",
    value: 10,
  },
  {
    metric: "Certification",
    value: 4,
  },
];

const Achievement = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 mt-4">
      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        className="sm:border-[#FFFFFF] sm:border rounded-2xl py-8 px-16 flex flex-col sm:flex-row items-center justify-between"
      >
        {achievementData.map((data, i) => {
          return (
            <div
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
              key={i}
            >
              <h2 className="text-secondary text-4xl font-bold flex flex-row">
                {data.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(data.value)}
                  locale="en-US"
                  transitions={(i) => ({
                    type: "spring",
                    duration: i + 7,
                  })}
                  className="text-secondary text-4xl font-bold"
                />
                {data.postfix}
              </h2>
              <p className="text-primary-400 text-base">{data.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Achievement;
