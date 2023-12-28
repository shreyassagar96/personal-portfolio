"use client";
import React, { useRef } from "react";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zxl7pbh",
        "template_3gszuq1",
        form.current,
        "TazJA46syzdDYo4d9"
      )
      .then(
        (result) => {
          toast.success("Email send successfully");
          console.log(result.text);
        },
        (error) => {
          toast.error(error.message);
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 md:my-12 py-24 gap-4 relative"
    >
      <div
        data-aos="slide-right"
        data-aos-delay="200"
        className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-300 to-transparent rounded-full h-60 w-60  z-0 blur-2xl absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div className="">
        <h5
          data-aos="slide-right"
          data-aos-delay="200"
          className="text-4xl font-extrabold text-primary-400 mb-4 my-2"
        >
          Get In Touch
        </h5>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-secondary mb-4 maz-w-md"
        >
          I am currently looking for oportunities, my inbox is always open.
          Wheather you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>

        <div
          data-aos="fade-down"
          data-aos-delay="200"
          className="socials flex flex-row gap-6 sm:mb-4 mb-4"
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
      <div>
        <form
          ref={form}
          data-aos="flip-right"
          data-aos-delay="200"
          className="flex flex-col"
          onSubmit={sendEmail}
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-primary-400 block mb-2 text-sm font-medium"
            >
              Name
            </label>
            <input
              name="from_name"
              type="text"
              id="name"
              required
              placeholder="Type your name"
              className="bg-[#33353F] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rou
              nded-lg block w-full p-2.5 outline-none"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              type="email"
              className="text-primary-400 block text-sm mb-2 font-medium"
            >
              Your Email
            </label>
            <input
              name="from_email"
              type="email"
              id="email"
              required
              placeholder="xyz@gmail.com"
              className="bg-[#33353F] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-primary-400 block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="from_message"
              id="message"
              placeholder="Enter your message here..."
              rows={10}
              pla
              className="bg-[#33353F] border border-[#33353F]  placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5 outline-none"
            />
          </div>
          <button
            type="submit"
            className="bg-primary-400 text-black cursor-pointer font-bold py-2.5 px-5 rounded-xl w-full"
          >
            Send
          </button>
        </form>
      </div>
      <Toaster />
    </section>
  );
};

export default ContactSection;
