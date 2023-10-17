"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { Key } from "react";
import { Url, UrlObject } from "url";

interface LinkInterface {
  id: Key,
  title: string,
  link_url: string | Url,
}

const MobileMenu = ({
  links,
  showMenu,
}: {
  links: LinkInterface[];
  showMenu: Boolean;
}) => {
  const pathname = usePathname();

  return (
    <nav className={`${showMenu ? 'translate-x-0 opacity-1' : 'translate-x-full opacity-0'} relative w-full bg-black/20 backdrop-blur-lg mt-8 transition-all duration-300`}>
      <ul className="p-4 flex flex-col gap-6">
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
  );
};

export default MobileMenu;
