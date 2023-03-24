import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Travel Agency
        </Link>
        <nav>
          <ul className="flex space-x-4">
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
