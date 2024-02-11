import React from "react";
import { navLinks } from "../constants";

const Footer = () => {
  const date = new Date();
  return (
    <section className="w-full bg-black text-white flex justify-center py-10">
      <footer className="w-[80%] grid grid-cols-3">
        <div className="">
          <a href="/" className="text-2xl font-bold">
            Bicol
          </a>
        </div>
        <div className="flex flex-col">
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <p>Copyright &copy; {date.getFullYear()}. All rights reserved.</p>
          <p>
            Created by <a href="#">llosalaclintjoey@gmail.com</a>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
