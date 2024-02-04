import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-scroll";
// import icon from "./templates/favicon.ico";

const navigation = [
  // { name: 'Home', href: '/', current: true },
  { section: "section1", name: "Home", href: "/portfolio", current: false },
  {
    section: "section2",
    name: "About Me",
    href: "/portfolio/aboutMe",
    current: false,
  },
  {
    section: "section3",
    name: "Portfolio",
    href: "/portfolio/portfolio",
    current: false,
  },
  {
    section: "section4",
    name: "Skills",
    href: "/portfolio/skills",
    current: false,
  },
  {
    section: "section5",
    name: "Resume",
    href: "/portfolio/Resume",
    current: false,
  },
  {
    section: "section6",
    name: "Contact",
    href: "/portfolio/contact",
    current: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="w-full sticky top-0 bg-[#47434392] font-serif text-white text-xl rounded-2xl"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2">
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
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    // src={icon}
                    alt="Your Company"
                  />
                  <h3 className="text-4xl mx-2 font-mono">
                    <b>LOGO</b>
                  </h3>
                </div>
                <div
                  className="hidden sm:ml-6 sm:block"
                  style={{ marginTop: "4px" }}
                >
                  <div className="flex">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.section}
                        smooth={true}
                        duration={500}
                        className={classNames(
                          " text-[#31f500] hover:text-white ml-10 rounded-md font-serif p-0 cursor-default text-xl"
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
                  to={item.section}
                  className={classNames(
                    item.current
                      ? " text-white text-xl"
                      : "text-gray-400  hover:text-white",
                    "block rounded-md px-3 py-2 text-base "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;
