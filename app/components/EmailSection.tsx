import React from "react";
import GithubIcon from "@public/images/github-icon.svg";
import LinkedinIcon from "@public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection: React.FC = () => {
  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
      id="contact"
    >
      <div className="hidden md:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-[65%] -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          dicta qui? Vitae ipsum eos eligendi atque accusantium, ab iusto, iste
          nesciunt fugit odit sapiente? Laboriosam praesentium sunt enim
          similique doloribus.
        </p>
        <div className="flex flex-row gap-2">
          <Link href={"https://www.linkedin.com/in/vitor-rocha-cambui/"}>
            <Image src={LinkedinIcon} alt={"Linkedin Icon"}></Image>
          </Link>
          <Link href={"https://github.com/arrooxa"}>
            <Image src={GithubIcon} alt={"Github Icon"}></Image>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 text-white block text-sm font-medium"
            >
              Your email
            </label>
            <input
              type="text"
              id="email"
              required
              placeholder="steve@jobs.com"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="mb-2 text-white block text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              placeholder="Just saying hi!"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="mb-2 text-white block text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
