"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import { Tabs, TabsData } from "@app/types/tab";
import TabButton from "./TabButton";

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
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-0 justify-items-center">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          alt="About Image"
          className="hidden xl:block"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            libero cupiditate temporibus dolores asperiores nesciunt quos ut
            veniam. Quisquam aliquid voluptatum earum blanditiis temporibus
            excepturi obcaecati adipisci, iusto cupiditate aut.
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
