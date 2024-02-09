"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import shreyasImg from "../../public/images/shreyas2.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 pt-5">
        <div
          data-aos="fade-down"
          data-aos-delay="100"
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-secondary font-black mb-4 text-4xl sm:text-3xl lg:text-6xl lg:leading-normal">
            <span className="text-primary-400 mb-2">Hello, I&apos;m </span>
            <br />
            <TypeAnimation
              className="text-3xl"
              sequence={[
                "Shreyas Sagar",
                1000,
                "Software Developer",
                1000,
                "Photographer",
                1000,
                "Freelancer",
                1000,
              ]}
              wrapper="span"
              speed={30}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-xl mb-6">
            Hii I&apos;m Shreyas Sagar passionate Software Developer. Currently
            I&apos;m looking for internship oportunity.
          </p>
          <div>
            <a
              href="./shreyas_resume.pdf"
              download
              data-aos="fade-down"
              data-aos-delay="200"
              className="bg-transparent text-secondary hover:bg-primary-400 hover:text-black font-bold border border-primary-400 px-6 py-3 rounded-full w-full sm:w-fit"
            >
              Download CV
            </a>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4">
          <div
            data-aos="flip-left"
            data-aos-delay="200"
            className="rounded-full bg-primary-400 w-[300px] h-[300px] lg:w-[700px]lg:h-[700px] relative"
          >
            <Image
              src={shreyasImg}
              alt="hero Img"
              width={267}
              height={267}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/3 left-1/2"
            />
          </div>
          <div
            data-aos="fade-up"
            delay="200"
            className="socials flex flex-row gap-6 sm:mb-4 pt-5 py-4 px-4 items-center justify-center"
          >
            <Link target="_blank" href={"https://github.com/shreyassagar96"}>
              <FaGithub className="text-secondary" size={40} />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/shreyas-sagar-5a284b248?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              }
            >
              <FaLinkedin className="text-secondary" size={40} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
