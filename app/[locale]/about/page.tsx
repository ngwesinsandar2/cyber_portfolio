"use client";

import Footer from '@/app/components/Footer';
import Experience from '@/app/sections/about/Experience';
import Myself from '@/app/sections/about/Myself';
import TechStacks from '@/app/sections/about/TechStacks';
import {useTranslations} from 'next-intl';

const About = () => {
  const t = useTranslations();

  return (
    <>
      <main className="pt-16">
        <h1 className="text-5xl font-bold mb-6">
          <span className="uppercase">{t("about.title")}</span>{" "}
          <span className="text-2xl text-[--primary-color]">
            [ {t("about.subTitle")} ]
          </span>
        </h1>
        <Myself />
        <Experience />
        {/* <TechStacks /> */}
      </main>

      <Footer />
    </>
  );
};

export default About;
