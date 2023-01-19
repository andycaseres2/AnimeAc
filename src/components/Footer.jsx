import React from "react";
import { BsArrowUpSquare } from "react-icons/bs";
import {
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { Link } from "react-router-dom";

export const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer items-center p-4 bg-base-100 mt-4 relative">
      <div className="items-center grid-flow-col gap-4">
        <Link to={"/"}>
          <img src="/Black_Bull.webp" alt="Black_Bull" className="w-12" />
        </Link>
        <p>2023 - Andy Caseres</p>
      </div>

      <div className="flex md:gap-6 justify-center w-full md:justify-start">
        <a href="https://twitter.com/AndyCaseresDev" target="__blank">
          <AiFillTwitterSquare
            size={30}
            className="cursor-pointer hover:scale-110 ease-in-out duration-700 transition-all"
          />
        </a>
        <a
          href="https://www.instagram.com/andycaseresdev/?r=nametag"
          target="__blank"
        >
          <AiFillInstagram
            size={30}
            className="cursor-pointer hover:scale-110 ease-in-out duration-700 transition-all"
          />
        </a>
        <a href="https://www.linkedin.com/in/andy-caseres/" target="__blank">
          <AiFillLinkedin
            size={30}
            className="cursor-pointer hover:scale-110 ease-in-out duration-700 transition-all"
          />
        </a>
      </div>

      <BsArrowUpSquare
        size={25}
        className="absolute top-3 right-3 cursor-pointer hover:scale-110 ease-in-out duration-700 transition-all"
        onClick={scrollTop}
      />
    </footer>
  );
};
