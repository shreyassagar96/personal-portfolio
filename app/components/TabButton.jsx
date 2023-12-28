import React from "react";

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-secondary border-b border-primary-400"
    : "text-[#ADB7BE]";

  return (
    <button data-aos="slide-left" data-aos-delay="200" onClick={selectTab}>
      <p
        className={`mr-4 font-semibold hover:text-secondary ${buttonClasses}`}
      ></p>
      {children}
    </button>
  );
};

export default TabButton;
