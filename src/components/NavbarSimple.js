// Here i am using tailwind css navbar
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Outlet } from "react-router-dom";
import icon from "./templates/favicon.ico";

const navigation = [
  // { name: 'Home', href: '/', current: true },
  { name: "Home", href: "/portfolio", current: false },
  { name: "About Me", href: "/portfolio/aboutMe", current: false },
  { name: "Portfolio", href: "/portfolio/portfolio", current: false },
  { name: "Skills", href: "/portfolio/skills", current: false },
  { name: "Blog", href: "/portfolio/blog", current: false },
  { name: "My Resume", href: "/portfolio/myResume", current: false },
  { name: "Contact", href: "/portfolio/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarSimple() {
  return (
    <Disclosure as="nav" className="sticky top-0 bg-black font-serif">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    src={icon}
                    alt="Your Company"
                  />
                  <h3 className="text-base font-medium mx-2 font-mono">
                    Portfolio
                  </h3>
                </div>
                <div
                  className="hidden sm:ml-6 sm:block"
                  style={{ marginTop: "4px" }}
                >
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-white text-grey p-0"
                            : "text-white hover:bg-black hover:text-white",
                          "rounded-md text-base font-medium font-serif p-0"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-400 hover:bg-white hover:text-black",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
          <Outlet />
        </>
      )}
    </Disclosure>
  );
}
