import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import styles from "../styles/NavBar.module.css";
import Link from "next/link";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      <nav className="">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            <div className="w-full flex items-center justify-between font-gilroy">
              <div className="flex  items-center space-around">
                <img
                  src="https://i.imgur.com/oVZTwYa.png"
                  alt="img"
                  className="w-9 lg:w-11"
                />
                <Link href="/">
                  <a
                    className={`font-taberna mx-2 text-[1.3em] lg:text-[1.8em]  ${styles.navbarBrand}`}
                  >
                    IDEATHON
                  </a>
                </Link>
              </div>
              <div className="hidden md:block font-gilroyBold text-[2rem] tracking-wider">
                <div className="flex items-baseline mt-2 space-x-4 lg:space-x-8 text-[10px] lg:text-[14px] xl:text-[16px]">
                  <Link href="/">
                    <a className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      HOME
                    </a>
                  </Link>
                  <Link href="/#about">
                    <a className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      ABOUT
                    </a>
                  </Link>

                  <Link href="/#timeline">
                    <a className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      TIMELINE
                    </a>
                  </Link>

                  {/* <a href="/#speakers" className={`${styles.navLink} ${styles.navLinkLtr}`}>
										SPEAKERS
									</a> */}

                  <Link href="/#faqs">
                    <a className={`${styles.navLink} ${styles.navLinkLtr}`}>
                      FAQs
                    </a>
                  </Link>
                  {/* <a href="/#sponsors" className={`${styles.navLink} ${styles.navLinkLtr}`}>
										SPONSORS
									</a> */}
                  {/* <Link to="/leaderboard" className="nav-link nav-link-ltr ">
										LEADERBOARD
									</Link> */}
                  {/* <a
                    href="#"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    TEAM
                  </a> */}
                </div>
              </div>
              <div>
                <Link href="">
                  <a
                    target="_blank"
                    type="submit"
                    className={` font-semibold font-gilroy tracking-wider rounded-full m-2 py-1 md:py-2 px-3 text-xs lg:text-[1.1rem] transition duration-150 ease-in-out ${styles.Register}`}
                  >
                    REGISTER NOW
                  </a>
                </Link>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-[#432d1d] hover:text-[#432d1d] focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="md:hidden backdrop-blur bg-[#e2caa4] bg-opacity-20 absolute font-gilroy tracking-wider z-10 w-full"
              id="mobile-menu"
            >
              <div className=" px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link href="/">
                  <a className="font-bold hover:bg-[#c79f82] text-[#432d1d] block px-3 py-2 rounded-md text-base">
                    HOME
                  </a>
                </Link>

                <Link href="/#about">
                  <a className="font-bold hover:bg-[#c79f82] text-[#432d1d] block px-3 py-2 rounded-md text-base">
                    ABOUT
                  </a>
                </Link>

                <Link href="/#timeline">
                  <a className="font-bold hover:bg-[#c79f82] text-[#432d1d] block px-3 py-2 rounded-md text-base">
                    TIMELINE
                  </a>
                </Link>
                <Link href="/#faqs">
                  <a className="font-bold hover:bg-[#c79f82] text-[#432d1d] block px-3 py-2 rounded-md text-base">
                    FAQs
                  </a>
                </Link>

                {/* <a
									href="/#speakers"
									className="font-Montserrat font-bold text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base "
								>
									SPEAKERS
								</a> */}

                {/* <a
									href="/#sponsors"
									className="font-Montserrat font-bold text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base "
								>
									SPONSORS
								</a> */}
                {/* <Link
									to="/leaderboard"
									className="font-Montserrat font-bold text-white hover:bg-cyan-700 hover:text-white block px-3 py-2 rounded-md text-base "
								>
									LEADERBOARD
								</Link> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default NavBar;
