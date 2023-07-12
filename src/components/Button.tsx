import React from "react";
import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

export default function Button({ className, ...props }: ComponentPropsWithoutRef<"button">) {
  const _className = twMerge(
    "appearance-none rounded-lg bg-primary p-2 text-sm font-medium text-white shadow transition-all hover:bg-secondary",
    className
  );

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  );
}

