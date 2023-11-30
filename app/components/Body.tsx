"use client";

import React, { ReactNode } from "react";
import { MotionProps, motion } from "framer-motion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BodyProps extends MotionProps {
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children, ...props }: BodyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mt-24 mx-auto px-12 py-4 flex flex-col gap-8 md:gap-16 [&>*:last-child]:mb-16"
      {...props}
    >
      {children}
      <ToastContainer theme="light" autoClose={2500} />
    </motion.div>
  );
};

export default Body;
