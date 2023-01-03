import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
const Nav = () => {
  function toggleVisibility() {
    const element = document.querySelectorAll(".mobile-menu");
    element.forEach((e) => {
      e.classList.toggle("hidden");
    });
  }
  useEffect(() => {
    const mobileLinks = document.querySelectorAll(".link");
    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        const element = document.querySelectorAll(".mobile-menu");
        element.forEach((e) => {
          e.classList.add("hidden");
        });
      });
    });
  });
  return (
    <div className="px-[5vw] flex py-4 bg-zinc-300 md:px-10vw">
      <nav className="lg:flex gap-5 justify-between w-full">
        <div className="max-w-[100px] lg:max-w-[125px]">
          <Link href="/">
            <Image
              className="self-start h-auto max-w-[100px] lg:min-w-[125px] lg:max-w-[125px]"
              src="/assets/churn-logo-2.png"
              alt="me"
              width="400"
              height="400"
            />
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center gap-2 xl:gap-0 xl:flex-row">
          <ul className="mobile-menu flex hidden flex-col items-center gap-4 pt-4 lg:p-0 lg:flex lg:flex-row lg:gap-8">
            <li>
              <Link
                className="link font-medium hover:text-zinc-800 text-lg"
                href="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link font-medium hover:text-zinc-800 text-lg"
                href="/about">
                About
              </Link>
            </li>
            <li>
              <Link
                className="link font-medium hover:text-zinc-800 text-lg"
                href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="link font-medium hover:text-zinc-800 text-lg whitespace-nowrap"
                href="/events">
                Events & Activities
              </Link>
            </li>
          </ul>
          <ul className="mobile-menu flex hidden flex-col items-center pt-2 gap-4 lg:p-0 lg:pl-8 lg:flex lg:flex-row lg:gap-8">
            <li>
              <Link
                className="link font-medium hover:text-zinc-800 text-lg"
                href="/membership-donations">
                Memberships
              </Link>
            </li>
            <li>
              <Link
                className="link font-medium hover:text-zinc-800 text-lg"
                href="/resources">
                Resources
              </Link>
            </li>
            <li>
              <Link
                className="link font-medium hover:text-zinc-800 text-lg"
                href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile-menu hidden flex lg:flex flex-col py-5 items-center lg:p-0 lg:flex-row">
          <Link
            className="link rounded-full bg-orange-600 px-9 py-2 font-medium hover:bg-orange-700 hover:shadow-lg text-white text-lg tracking-wide transition duration-100 ease-in-out"
            href="/membership-donations">
            Give
          </Link>
        </div>
      </nav>
      <div className="relative">
        <div
          className="hamburger w-7 pt-5 absolute right-0 cursor-pointer lg:hidden"
          onClick={toggleVisibility}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
