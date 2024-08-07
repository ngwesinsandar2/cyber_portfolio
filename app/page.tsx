"use client";

import './page.css'
import CyberCircle from './components/CyberCircle'
import { OutlineButton, SolidButton } from './components/Buttons'
import Footer from './components/Footer'

export default function Home() {
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
              <p>{t("home.welcomeText")}</p>
              <p>{t("home.thanksText")}</p>
            </div>

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
