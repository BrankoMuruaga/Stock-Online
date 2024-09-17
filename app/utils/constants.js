// @/utils/constants.ts
import React from "react";
export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export const repeat = (times, element) => {
  return Array.from({ length: times }, (_, index) => (
    <React.Fragment key={index}>{element}</React.Fragment>
  ));
};
