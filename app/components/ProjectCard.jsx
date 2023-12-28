"use client";
import React from "react";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { FiEye } from "react-icons/fi";

const ProjectsCard = ({ imgUrl, title, description, gitUrl, prevUrl }) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl.src})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-3 relative rounded-full border border-secondary"
          >
            <FaCode className="h-10 w-10 text-primary-400 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
          <Link
            href={prevUrl}
            target="_blank"
            className="h-14 w-14 relative rounded-full border border-secondary"
          >
            <FiEye className="h-10 w-10 text-primary-400 cursor-pointer absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </Link>
        </div>
      </div>

      <div className="text-primary-400 mt-3 rounded-b-xl bg-[#101010] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-secondary ">{description}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
