"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

import about from "../../public/images/skills/about.png";

const Tab_Data = [
  {
    title: "Skills",
    id: "skills",
    content: [
      <ul className="list-disc pl-2">
        <li className="mb-1">JavaScript</li>
        <li className="mb-1">Tailwind</li>
        <li className="mb-1">React</li>
        <li className="mb-1">Redux</li>
        <li className="mb-1">NextJS</li>
        <li className="mb-1"> NodeJS</li>
        <li className="mb-1">ExpressJS</li>
        <li className="mb-1"> MongoDB</li>
        <li className="mb-1">Git</li>
        <li className="mb-1"> Github</li>
        <li className="mb-1">Microservices</li>
      </ul>,
    ],
  },
  {
    title: "Education",
    id: "education",
    content: [
      <ul className="list-disc pl-2">
        <li className="text-primary-400 text-xl">
          Master of Science in (Computer Science)
        </li>
      </ul>,
      <ul>
        <li className="text-sm">Savitribai Phule Pune University, Pune.</li>
      </ul>,
      <ul className="list-disc pl-2 mt-3">
        <li className="text-primary-400 text-xl">Bachelor of Science (B.Sc)</li>
      </ul>,
      <ul>
        <li className="text-sm">
          Dr. Babasaheb Ambedkar Marathwada University, SambhajiNagar.{" "}
        </li>
      </ul>,
    ],
  },
  {
    title: "Certifications",
    id: "certification",
    content: [
      <ul className="list-disc pl-2">
        <li className="mb-1">AWS Cloud Foundation Academy</li>
        <li className="mb-1">
          Master Microservices with Spring Boot and Spring Cloud in28Minutes
          Offical, Udemy.
        </li>
        <li className="mb-1">
          The Complete Web Development Bootcamp by Dr.Angela Yu, Udemy.
        </li>
        <li className="mb-1">
          React Complete Guide (react, redux & router) by Maximilian
          Schwarzumuller, Udemy.
        </li>
      </ul>,
    ],
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-secondary" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          data-aos="slide-right"
          data-aos-delay="200"
          src={about}
          height={400}
          width={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2
            data-aos="slide-left"
            data-aos-delay="200"
            className="text-4xl font-extrabold text-primary-400 m-4"
          >
            About Me
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-base md:text-lg"
          >
            I am a full stack developer with a passion for creating interactive
            web applications. I have experience in working with JavaScript,
            React, Redux, NextJS, NodeJS, ExpressJS, MongoDB, Microservices,
            Git, Github.
          </p>

          <div className="flex flex-row mt-8 justify-start gap-5 lg:text-2xl">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-8 p-5 m-5 py-5"
          >
            {Tab_Data.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
