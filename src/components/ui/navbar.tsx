import Link from "next/link";
import React from "react";
import { NavLink } from "../../../types";

const navlinks: NavLink[] = [
  {
    name: "Festivals",
    link: "/festivals",
  },
  {
    name: "Comedy Shows",
    link: "/shows",
  },
  {
    name: "Places",
    link: "/places",
  },
];

export const Navbar = () => {
  return (
    <header className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Laugh & Explore</h1>
        <nav>
          <ul className="flex space-x-8 text-base">
            {navlinks.map((link) => (
              <li key={link.name}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition duration-300">
          Connect Wallet
        </button>
      </div>
    </header>
  );
};
