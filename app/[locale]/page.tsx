'use client';

import './page.css';
import CyberCircle from '../components/CyberCircle';
import { OutlineButton, SolidButton } from '../components/Buttons';
import Footer from '../components/Footer';
import { useTranslations } from 'next-intl';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  const t = useTranslations();

  return (
    <>
      <main className="">
        <div className="min-h-[calc(94vh-5px)] grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center py-4">
          <div className="pt-4 lg:pt-0">
            <h1 className="text-5xl font-bold mb-6">
              <span className="uppercase">{t('home.fullName')}</span>{' '}
              <span className="text-2xl text-[--primary-color]">
                [ {t('home.occupationUnderscore')} ]
              </span>
            </h1>

            <div className="text-lg mb-4">
              {/* <p>{t('home.whatsUp')}</p> */}
              <p>{t('home.welcomeText')}</p>
              <p>{t('home.thanksText')}</p>
            </div>

            <div className="flex gap-6">
              <OutlineButton content={t('common.buttons.contact')} />
              <SolidButton content={t('common.buttons.downloadCV')} />
            </div>
          </div>

          <div className="overflow-hidden justify-self-end pb-6 lg:pb-0">
            <div className="mb-10">
              <CyberCircle />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
