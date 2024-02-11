import React from "react";
import { navLinks } from "../constants";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";

const Navbar = () => {
  return (
    <section className="z-10 w-full bg-white flex justify-center items-center p-4 fixed top-0 left-0 right-0">
      <nav className="w-[80%] flex justify-between">
        <a href="/" className="text-2xl font-bold">
          Bicol
        </a>
        <ul className="flex basis-1/2 justify-evenly items-center">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex gap-1">
          <PrimaryButton name="Login" />
          <SecondaryButton name="Sign Up" />
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
