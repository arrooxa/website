"use client";

import React, { useState } from "react";
import GithubIcon from "@public/images/github-icon.svg";
import LinkedinIcon from "@public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { toast } from "react-toastify";
import { useTranslations } from "next-intl";

const EmailSection: React.FC = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const t = useTranslations("contact");

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);

    if (response.status !== 200) {
      return toast.error(
        "Erro ao enviar a mensagem, tente novamente mais tarde."
      );
    }

    toast.success("Sua mensagem foi enviada com sucesso!");
    return setEmailSubmitted(true);
  };

  return (
    <section className="grid md:grid-cols-2 gap-4 relative" id="contact">
      <div className="hidden md:block bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-[65%] -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Lets Connect!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {t("contactDescription")}
        </p>
        <div className="flex flex-row gap-2">
          <Link
            href={"https://www.linkedin.com/in/vitor-rocha-cambui/"}
            target="_blank"
          >
            <Image src={LinkedinIcon} alt={"Linkedin Icon"}></Image>
          </Link>
          <Link href={"https://github.com/arrooxa"} target="_blank">
            <Image src={GithubIcon} alt={"Github Icon"}></Image>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-700 font-bold">
            Sua mensagem foi enviada! Aguarde meu retorno.
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-2 text-white block text-sm font-medium"
              >
                {t("emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
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
                {t("subjectLabel")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder={t("subjectPlaceholder")}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 text-white block text-sm font-medium"
              >
                {t("messageLabel")}
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder={t("messagePlaceholder")}
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              {t("submitButton")}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
