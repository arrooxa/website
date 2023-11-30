import { useTranslations } from "next-intl";
import React from "react";

const Footer = () => {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-t-[#33353F]">
      <div className="container p-12 flex justify-between">
        <span className="text-white z-10">arroxa</span>
        <p className="text-primary-gray">{t("allRights")}</p>
      </div>
    </footer>
  );
};

export default Footer;
