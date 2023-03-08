/* eslint-disable @next/next/no-img-element */
"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  CurrencyDollarIcon,
  PencilSquareIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

import { Press_Start_2P } from "next/font/google";
const p2 = Press_Start_2P({ weight: "400", subsets: ["latin"] });
const library = [
  {
    name: "Co-founder Matching",
    description: "How it works",
    href: "#",
    icon: PencilSquareIcon,
    soon: true,
  },
  {
    name: "VC Directory",
    description: "Find the right investors",
    href: "#",
    icon: CurrencyDollarIcon,
    soon: true,
  },
  {
    name: "Startup Checklist",
    description: "Your tasks from idea to MVP",
    href: "#",
    icon: SquaresPlusIcon,
    soon: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { data: session } = useSession();

  return (
    <header className="bg-black shadow-md">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:p-0"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <img className="h-6 w-auto" src="./img/f2f.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
              Library{" "}
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-white"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-black shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {library.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50">
                        <item.icon
                          className="h-6 w-6 text-black"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-white"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                          {item.soon && (
                            <span className="ml-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none bg-[#21FF7E] text-black rounded-full">
                              Soon
                            </span>
                          )}
                        </a>
                        <p className="mt-1 text-white">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Rules
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            About
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-white">
            Partner
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {!session ? (
            <div className="py-6">
              <button
                onClick={() => signIn("linkedin")}
                className={`${p2.className} px-3 py-2 border-2 border-[#21FF7E] text-white rounded-md text-sm cursor-pointer hover:bg-[#29a35c] hover:border-[#29a35c]`}
              >
                <span>Log In</span>
              </button>
            </div>
          ) : (
            <div className="py-6">
              <button
                onClick={() => signOut("linkedin")}
                className={`${p2.className} px-3 py-2 border-2 border-[#21FF7E] text-white rounded-md text-sm cursor-pointer hover:bg-[#29a35c] hover:border-[#29a35c]`}
              >
                Sign Out
              </button>
            </div>
          )}
          {/* 
          <button
            className="text-sm font-semibold leading-6 text-white"
          >
            Signup / Login with{" "}
            <BsGoogle className="w-4 h-4 inline mb-1 ml-1" />
          </button> */}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <img className="h-6 w-auto" src="./img/f2f.svg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-white text-base font-semibold leading-7 hover:bg-gray-50 hover:text-black/90">
                        <div>Library</div>
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...library].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black/90"
                          >
                            {item.soon && (
                              <span className="mr-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none bg-[#21FF7E] text-black rounded-full">
                                Soon
                              </span>
                            )}
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black/90"
                >
                  Rules
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  About
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-50 hover:text-black/90"
                >
                  Partner
                </a>
              </div>

              {!session ? (
                <div className="py-6">
                  <button
                    onClick={() => signIn("linkedin")}
                    className={`${p2.className} px-3 py-2 border-2 border-[#21FF7E] text-white rounded-md text-sm cursor-pointer hover:bg-[#29a35c] hover:border-[#29a35c]`}
                  >
                    <span>Log In</span>
                  </button>
                </div>
              ) : (
                <div className="py-6">
                  <button
                    onClick={() => signOut("linkedin")}
                    className={`${p2.className} px-3 py-2 border-2 border-[#21FF7E] text-white rounded-md text-sm cursor-pointer hover:bg-[#29a35c] hover:border-[#29a35c]`}
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
