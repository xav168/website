import React, { useEffect } from "react";
import { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./hooks/useDarkSide";
import { Link } from "react-scroll";

const navigation = [
  { name: "About", href: "about", current: false },
  { name: "Skills", href: "skills", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Experience", href: "experience", current: false },
  { name: "Contact Me", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme == "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 ">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 dark:hover:bg-gray-700 hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-inset dark:focus:ring-white focus:ring-black">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center text-size-xl font-mono ">
                  Xavier Ong
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 scroll-smooth">
                    {navigation.map((item) => (
                      <div className="dark:hover:bg-gray-700 hover:bg-orange-200 px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                        <Link
                          to={item.href}
                          spy={true}
                          smooth={true}
                          duration={500}
                        >
                          {item.name}
                        </Link>
                      </div>
                      /* <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "dark:hover:bg-gray-700 hover:bg-orange-200",
                          "px-3 py-2 rounded-md text-sm font-medium,"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a> */
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 p-2">
                <div className="dark:hover:bg-gray-700 hover:bg-orange-200 p-2 rounded-md">
                  <DarkModeSwitch
                    checked={darkSide}
                    onChange={toggleDarkMode}
                  />
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden ">
            {({ close }) => (
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    href={"#" + item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "hover:bg-gray-700 hover:text-white",
                      "block px-3 py-2 rounded-md text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <Link
                      to={item.href}
                      spy={true}
                      smooth={true}
                      duration={500}
                      onSetActive={() => close()}
                    >
                      {item.name}
                    </Link>
                  </Disclosure.Button>
                ))}
              </div>
            )}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
