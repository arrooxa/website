import { TabButtonDTO } from "@app/types/tab";
import React from "react";
import { Variants, motion } from "framer-motion";

const TabButton: React.FC<TabButtonDTO> = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-primary-gray";

  const variants: Variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
  };

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mr-3"
      />
    </button>
  );
};

export default TabButton;
