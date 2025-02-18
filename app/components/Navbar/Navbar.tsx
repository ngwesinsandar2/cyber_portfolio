'use client';

import { Link, usePathname, useRouter } from '@/navigation';
import { useParams } from 'next/navigation';
import { useState, useTransition } from 'react';
import { RiArrowDownSFill } from 'react-icons/ri';
import MobileNavbar from './MobileNavbar';
import useDialog from '@/app/hooks/useDialog';
import { FaHamburger } from 'react-icons/fa';

const links = [
  {
    id: 1,
    title: 'home',
    link_url: '/'
  },
  {
    id: 2,
    title: 'about',
    link_url: '/about'
  },
  {
    id: 3,
    title: 'projects',
    link_url: '/projects'
  },
  {
    id: 4,
    title: 'contact',
    link_url: '/contact'
  }
];

const Navbar = () => {
  const dialog = useDialog();
  const pathname = usePathname();
  const [showLanguages, setShowLanguages] = useState<Boolean>(false);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const params = useParams();

  return (
    <>
      <header className="w-full md:w-auto fixed top-[2%] right-[10px] md:right-[98px] h-2 z-30 pl-[16px]">
        <nav className="bg-black/20 backdrop-blur-lg rounded-sm">
          <div className="flex justify-between md:justify-start gap-4">
            <ul className="hidden md:flex flex-col sm:flex-row ps-4 gap-6">
              {links.map((link) => {
                return (
                  <li
                    className="relative"
                    key={link.id}
                  >
                    <Link
                      href={link.link_url}
                      className={`${
                        link.link_url === pathname &&
                        'text-[var(--primary-color)]'
                      } uppercase font-2xl before:z-[-1]`}
                    >
                      [ {link.title} ]
                      {link.link_url === pathname && (
                        <div className="flex gap-1">
                          <div className="w-[60%] h-[2px] bg-[var(--primary-color)]"></div>
                          <div className="w-[20%] h-[2px] bg-[var(--primary-color)]"></div>
                          <div className="w-[20%] h-[2px] bg-[var(--primary-color)]"></div>
                        </div>
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <FaHamburger
              className="text-white size-8 cursor-pointer block md:hidden"
              onClick={dialog.openDialog}
            />
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className="flex items-center bg-[var(--primary-color)] text-[var(--grey-color)] px-2"
            >
              <p>Languages</p>
              <RiArrowDownSFill />
            </button>
          </div>
        </nav>
        {/* Languages Menu */}
        {showLanguages && (
          <div className="bg-black/20 backdrop-blur-lg rounded-sm w-[30%] float-right">
            <button
              onClick={() => {
                startTransition(() => {
                  router.replace(
                    // @ts-expect-error -- TypeScript will validate that only known `params`
                    // are used in combination with a given `pathname`. Since the two will
                    // always match for the current route, we can skip runtime checks.
                    { pathname, params },
                    { locale: 'en' }
                  );
                });
              }}
              className={`w-full flex items-center gap-2 p-2 cursor-pointer font-bold ${
                params?.locale === 'en'
                  ? 'bg-[var(--primary-color)] text-[var(--grey-color)]'
                  : ''
              } hover:bg-[var(--primary-color)] hover:text-[var(--grey-color)]`}
            >
              <p>-</p>
              <p className="uppercase">english</p>
            </button>
            <button
              onClick={() => {
                startTransition(() => {
                  router.replace(
                    // @ts-expect-error -- TypeScript will validate that only known `params`
                    // are used in combination with a given `pathname`. Since the two will
                    // always match for the current route, we can skip runtime checks.
                    { pathname, params },
                    { locale: 'mm' }
                  );
                });
              }}
              className={`w-full flex items-center gap-2 p-2 cursor-pointer font-bold ${
                params?.locale === 'mm'
                  ? 'bg-[var(--primary-color)] text-[var(--grey-color)]'
                  : ''
              } hover:bg-[var(--primary-color)] hover:text-[var(--grey-color)]`}
            >
              <p>-</p>
              <p className="uppercase">myanmar</p>
            </button>
          </div>
        )}
      </header>
      <MobileNavbar
        links={links}
        dialog={dialog}
      />
    </>
  );
};

export default Navbar;
