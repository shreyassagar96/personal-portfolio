"use client";
import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "text-black bg-primary-400"
    : "border-slate-600 text-secondary hover:border-secondary";

  return (
    <button
      data-aos="flip-up"
      data-aos-delay="100"
      onClick={() => onClick(name)}
      className={`${buttonStyles} rounded-full border-2 border-primary-400 px-6 py-3 text-xl cursor-pointer`}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
