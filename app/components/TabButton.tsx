import { TabButtonDTO } from "@app/types/tab";
import React from "react";

const TabButton: React.FC<TabButtonDTO> = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-primary-500"
    : "text-primary-gray";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
