"use client";

import Image from 'next/image'
import './page.css'
import CyberCircle from './components/CyberCircle'
import { OutlineButton, SolidButton } from './components/Buttons'
import Footer from './components/Footer'
import { useTranslation } from 'react-i18next'
import { cookies } from 'next/headers';
import { Locale, translations } from '@/libs/localization/i18n';

export default function Home() {
  const {t} = useTranslation();
  const cookieStore = cookies();
  const locale = (cookieStore.get("locale")?.value || "en") as Locale;

  return (
    <>
      <main className=''>
        <div className="marquee-container fixed hidden sm:block">
          <div className="relative flex justify-center items-center text-[--grey-color] bg-[--primary-color] transform -rotate-180 writing_mode_rl w-10 h-full text-center text-md font-bold uppercase">
            <div className="flex gap-6 marquee">
              
              <p>{t("home.fullNameUnderscore")}</p>
              <p>{t("home.fullNameUnderscore")}</p>
              <p>{t("home.fullNameUnderscore")}</p>
            </div>
            <div className="flex gap-6 marquee marquee2">
              <p>{t("home.fullNameUnderscore")}</p>
              <p>{t("home.fullNameUnderscore")}</p>
              <p>{t("home.fullNameUnderscore")}</p>
            </div>
          </div>
        </div>

        <div className="min-h-[calc(94vh-5px)] grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center sm:pl-16 py-4">
          <div className="pt-4 lg:pt-0">
            <h1 className="text-5xl font-bold mb-6"><span className="uppercase">{t("home.fullName")}</span> <span className="text-2xl text-[--primary-color]">[ {t("home.occupationUnderscore")} ]</span></h1>

            <div className="text-lg mb-4">
              <p>{t("home.whatsUp")}</p>
              <p>{translations[locale].home.welcomeText}</p>
              <p>{t("home.welcomeText")}</p>
              <p>{t("home.thanksText")}</p>
            </div>

            {/* <ul className='flex flex-col gap-2 mb-8'>
            <li className="relative">
              <a href="mailto:ngwesinsandar112@gmail.com" className="group flex items-center gap-2" target='_blank'>
                <CyberCircle first_circle_size={50} second_circle_size={40} first_circle_ani="group-hover:animate-[spin_30s_linear_infinite]" second_circle_ani='group-hover:animate-[spin_30s_linear_infinite_reverse]' second_circle_con_custom_classes="w-[40px] h-[40px]">
                  <BiMailSend className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 text-[var(--primary-color)]" />
                </CyberCircle>
                <span className="group-hover:text-[var(--primary-color)] transition-all">ngwesinsandar112@gmail.com</span>
              </a>
            </li>
            <li className="relative">
              <a href="mailto:ngwesinsandar112@gmail.com" className="group flex items-center gap-2" target='_blank'>
                <CyberCircle first_circle_size={50} second_circle_size={40} first_circle_ani="group-hover:animate-[spin_30s_linear_infinite]" second_circle_ani='group-hover:animate-[spin_30s_linear_infinite_reverse]' second_circle_con_custom_classes="w-[40px] h-[40px]">
                  <FaMobileAlt className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-5 h-5 text-[var(--primary-color)]" />
                </CyberCircle>
                <span className="group-hover:text-[var(--primary-color)] transition-all">09757-978-569</span>
              </a>
            </li>
          </ul> */}

            <div className="flex gap-6">
              <OutlineButton content={t("common.buttons.contact")} />
              <SolidButton content={t("common.buttons.downloadCV")} />
            </div>
          </div>

          <div className="overflow-hidden justify-self-end pb-6 lg:pb-0">
            <div className="mb-10">
              <CyberCircle />
            </div>
          </div>
        </div>
      </main>

      <Footer footer_custom_classes="sm:ml-16" />
    </>
  )
}
