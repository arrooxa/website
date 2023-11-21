"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { Tabs, TabsData } from "@app/types/tab";
import TabButton from "./TabButton";
import { getAge } from "@app/utils/getAge";

const tabsData: TabsData[] = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul>
        <li>Node.js</li>
        <li>React.js</li>
        <li>Typescript</li>
        <li>Golang</li>
        <li>AWS</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="flex flex-col gap-3">
        <li>
          Santos College of Technology - Higher Technology Course (HTC) /
          Systems Analysis and Development
        </li>
        <li>
          USJT - Higher Technology Course (CST) / Systems Analysis and
          Development
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
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

  function handleChangeTab(id: Lowercase<Tabs>) {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 items-center py-8 px-4 sm:py-16 xl:px-0">
        <Image
          src="/images/333.jpg"
          width={500}
          height={500}
          alt="About Image"
          className="hidden xl:block"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <span className="mb-2">Hello there 👋</span>
          <p className="text-base md:text-lg">
            I'm Vitor Rocha Cambuí, a 22-year-old software developer with a
            degree in Analysis and Systems Development from the Technology
            College of Santos. Over the past 4 years, I've focused on Web
            Development, specializing in Javascript technologies like React.js
            and Nest.js. In various roles, I've contributed to creating
            solutions that enhance company revenue by building software aimed at
            boosting productivity among collaborators and increasing lead
            generation.
          </p>
          <div className="flex flex-row mt-8">
            {tabsData.map(({ id, title }) => (
              <TabButton
                selectTab={() => handleChangeTab(id)}
                active={tab === id}
                key={id}
              >
                {title}
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
