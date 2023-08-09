'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState<Boolean>(false);

  const links = [
    {
      id: 1,
      title: "home",
      link_url: "/",
    },
    {
      id: 2,
      title: "about",
      link_url: "/about",
    },
    {
      id: 3,
      title: "projects",
      link_url: "/projects",
    },
    {
      id: 4,
      title: "contact",
      link_url: "/contact",
    },
  ]

  return (
    <>
      <header className="w-full md:w-auto fixed top-[2%] sm:right-[10%] z-10">
        <button onClick={() => setShowMenu(!showMenu)} className="flex flex-col gap-[.3rem] float-right pr-8 pb-2 bg-black/20 backdrop-blur-lg md:hidden">
          <div className={`${showMenu ? 'rotate-45 translate-y-[0.55rem] w-8' : 'rotate-0 translate-y-0 w-4'} h-1 bg-white rounded-lg transition-all duration-300`}></div>
          <div className={`${showMenu ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-1'} h-1 bg-white rounded-lg w-8 transition-all duration-300`}></div>
          <div className={`${showMenu ? '-rotate-45 -translate-y-[0.55rem] w-8' : 'rotate-0 translate-y-0 w-4'}  h-1 bg-white rounded-lg self-end transition-all duration-300`}></div>
        </button>

        <nav>
          <ul className="hidden md:flex flex-col sm:flex-row gap-6">
            {
              links.map(link => {
                return (
                  <li className="relative" key={link.id}>
                    <Link href={link.link_url} className={`${link.link_url === pathname && 'text-[var(--primary-color)]'} uppercase font-2xl before:z-[-1]`}>
                      [ {link.title} ]
                      {
                        link.link_url === pathname &&
                        <div className="flex gap-1">
                          <div className="w-[60%] h-[2px] bg-[var(--primary-color)]"></div>
                          <div className="w-[20%] h-[2px] bg-[var(--primary-color)]"></div>
                          <div className="w-[20%] h-[2px] bg-[var(--primary-color)]"></div>
                        </div>
                      }
                    </Link>
                  </li>
                )
              })
            }
          </ul>
        </nav>
        
        <MobileMenu links={links} showMenu={showMenu} />
      </header>
    </>
  );
}

export default Navbar;