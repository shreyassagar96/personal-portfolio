import React from "react";
import { FaCopyright } from "react-icons/fa";

const Fotter = () => {
  return (
    <footer>
      <div
        data-aos="slide-left"
        data-aos-delay="200"
        className="footer border border-t-primary-400 border-l-transparent border-r-transparent border-b-transparent"
      >
        <span className="container p-12 flex justify-between">
          <p className="text-slate-500 flex">
            <FaCopyright size={30} className="mr-2 text-secondary" />
            Shreyas Sagar, All rights are reserved.
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Fotter;
