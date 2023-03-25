import React, { useEffect, useState } from "react";
import Link from "next/link";

type Props = {
  menuOpen: boolean;
  menuRef: React.RefObject<HTMLDivElement>;
};

const DropdownMenu = ({ menuOpen, menuRef }: Props) => {
  const [positionStyles, setPositionStyles] = useState({});

  useEffect(() => {
    if (menuRef.current) {
      const rect = menuRef.current.getBoundingClientRect();
      setPositionStyles({
        top: `${rect.bottom}px`,
        right: "10px",

      });
    }
  }, [menuRef]);

  return (
    <div
      id="dropdownUsers"
      className={`${
        menuOpen ? "block" : "hidden"
      } z-10 absolute bg-white dark:bg-gray-700 rounded-lg shadow w-60 overflow-auto`}
      style={positionStyles}
    >
      <ul className="h-48 py-2 overflow-y-auto text-gray-700 dark:text-gray-200">
        <li>
          <Link
            href="/Jets"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Jets
          </Link>
        </li>
        <li>
          <Link
            href="/Destinations"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Destinations
          </Link>
        </li>
        <li>
          <Link
            href="/About"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/Search"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Search
          </Link>
        </li>
        <li>
          <Link
            href="/Book"
            className="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Book
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
