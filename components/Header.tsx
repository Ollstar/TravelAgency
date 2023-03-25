import React, { useState, useRef } from "react";
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Travel Agency
        </Link>
        <button
          ref={menuRef}
          className="block lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {/* <i className={`fas fa-${menuOpen ? "times" : "bars"}`} /> */}
          <i className={`fas fa-bars`} />

        </button>
        <DropdownMenu menuOpen={menuOpen} menuRef={menuRef} />
        <nav className="hidden lg:block">
          <ul className="flex space-x-4 lg:space-x-4">
            <li>
              <Link
                href="/Jets"
                className="hover:text-indigo-300 transition duration-200"
              >
                Jets
              </Link>
            </li>
            <li>
              <Link
                href="/Destinations"
                className="hover:text-indigo-300 transition duration-200"
              >
                Destinations
              </Link>
            </li>
            <li>
              <Link
                href="/About"
                className="hover:text-indigo-300 transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/Search"
                className="hover:text-indigo-300 transition duration-200"
              >
                Search
              </Link>
            </li>
            <li>
              <Link
                href="/Book"
                className="hover:text-indigo-300 transition duration-200"
              >
                Book
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
