// components/header.js
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="p-4 bg-white shadow-sm sticky top-0 z-50 text-gray-800">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              src="/images/lv3.png"
              alt="Logo"
              width={100}
              height={100}
              className="w-16 h-16"
            />
          </Link>
          <Link href="/" className="text-xl font-medium">
            joshualeegarza
          </Link>
        </div>
        <button
          onClick={toggleMenu}
          className="block lg:hidden p-2"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? (
            <XMarkIcon className="w-6 h-6 text-gray-800" />
          ) : (
            <Bars3Icon className="w-6 h-6 text-gray-800" />
          )}
        </button>
        <nav
          className={`fixed top-0 left-0 h-full w-full bg-white transform transition-transform duration-300 ease-in-out lg:static lg:w-auto lg:flex lg:items-center lg:space-x-6 lg:transform-none ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 lg:hidden"
            aria-label="Close Menu"
          >
            <XMarkIcon className="w-8 h-8 text-gray-800" />
          </button>
          <ul className="flex flex-col lg:flex-row lg:items-center lg:space-x-6 lg:mt-0 mt-20 space-y-4 lg:space-y-0">
            <li>
              <Link
                href="/"
                className="text-xl hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-xl hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-xl hover:underline"
                onClick={() => setIsMenuOpen(false)}
              >
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
