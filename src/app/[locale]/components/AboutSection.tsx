"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { Tabs, TabsData, skillsTabData } from "@app/types/tab";
import TabButton from "./TabButton";
import { getAge } from "@app/utils/getAge";
import Link from "next/link";
import { useTranslations } from "next-intl";

const tabsData: TabsData[] = [
  {
    id: "skills",
    content: (
      <ul className="flex flex-wrap gap-2 items-center">
        {skillsTabData.map((skill) => (
          <Link
            href={skill.website}
            target="_blank"
            className="opacity-70 hover:opacity-100 duration-200"
            key={skill.id}
          >
            <Image
              src={skill.image}
              width="0"
              height="0"
              style={{ width: "50px", height: "50px" }}
              alt={`${skill.name} icon`}
            />
          </Link>
        ))}
      </ul>
    ),
  },
  {
    id: "certifications",
    content: (
      <ul>
        <li>Complete React - Origamid</li>
        <li>Javascript ES6 Essentials - DIO</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState<Lowercase<Tabs>>("skills");
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("about");

  function handleChangeTab(id: Lowercase<Tabs>) {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 items-center px-4 xl:px-0">
        <Image
          src="/images/333.jpg"
          width={500}
          height={500}
          alt="About Image"
          className="hidden xl:block"
          priority
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">{t("aboutMe")}</h2>
          <span className="mb-2">{t("helloThere")} 👋</span>
          <p className="text-base md:text-lg">
            {t("description", { age: getAge() })}
          </p>
          <div className="flex flex-row mt-8">
            {tabsData.map(({ id }) => (
              <TabButton
                selectTab={() => handleChangeTab(id)}
                active={tab === id}
                key={id}
              >
                {t(id)}
              </TabButton>
            ))}
          </div>
          <div className="mt-8">
            {tabsData.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
