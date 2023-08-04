import React from "react";
import { cn } from "@/utils/cn";

const Button = ({ classNames, children }) => {
  return (
    <button
      className={cn(
        "bg-slate-200 text-slate-800 py-6 px-10 rounded-full tracking-wider font-semibold text-base",
        classNames
      )}
    >
      {children}
    </button>
  );
};

export default Button;
