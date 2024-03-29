"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { navLinks } from "@app/types/link";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const t = useTranslations("navLinks");
  const pathname = usePathname();

  return (
    <nav className="fixed mx-auto top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          arroxa
        </Link>
        <div className="flex gap-4">
          <Link href="/pt">
            <Image
              src={"/images/brazil-flag.png"}
              alt="Brazilian Flag"
              width="0"
              height="0"
              style={{ width: "25px", height: "15px" }}
              className={pathname === "/pt" ? "opacity-100" : "opacity-50"}
            />
          </Link>
          <Link href="/en">
            <Image
              src={"/images/us-flag.png"}
              alt="USA Flag"
              width="0"
              height="0"
              style={{ width: "25px", height: "15px" }}
              className={pathname === "/en" ? "opacity-100" : "opacity-50"}
            />
          </Link>
        </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map(({ href, title, targetBlank }, index) => (
              <li key={index}>
                <NavLink
                  href={href}
                  title={t(title)}
                  targetBlank={targetBlank}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
