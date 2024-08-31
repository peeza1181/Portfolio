import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export const Footer = () => {
  return (
    <div
      name="footer"
      className="w-full bg-gray-200 flex justify-around text-black p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
      </div>

      <ul className="text-sm md:text-xl">
        <li className="flex gap-2 items-center">
          <IoIosMail size={20} />
          piyarat.napat@gamil.com
        </li>
        <li className="flex gap-2 items-center">
          <FaGithub size={20} />
          github.com/peeza1181
        </li>
      </ul>
    </div>
  );
};
