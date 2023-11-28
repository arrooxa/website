"use client";

import React, { ReactNode } from "react";
import { MotionProps, motion } from "framer-motion";

interface BodyProps extends MotionProps {
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children, ...props }: BodyProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mt-24 mx-auto px-12 py-4"
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Body;
